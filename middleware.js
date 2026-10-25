/**
 * Vercel Routing Middleware: serves the Markdown copy of each page, written into
 * dist/ by scripts/build-markdown.mjs, with the headers AI agents expect.
 *
 *   GET /some-page.md                          -> Markdown of /some-page/
 *   GET /some-page/ + Accept: text/markdown    -> Markdown of /some-page/ (q-values respected)
 *   GET /some-page/ from a known AI crawler    -> Markdown, unless its Accept ranks HTML higher
 *   GET /some-page/ + Accept excluding both    -> 406 Not Acceptable (e.g. Accept: application/json)
 *   GET /api/md/some-page                      -> Markdown of /some-page/, always
 *   GET /api/md/_catalog                       -> JSON list of every Markdown page
 *
 * HTML pages pass through with a Link header pointing at their Markdown copy
 * (rel="alternate"), so browsers, curl and link previews (a wildcard Accept, or
 * none) still get HTML. Follows the AEO Spec 1.0 (dualmark.dev). Uses Web APIs only.
 */

export const config = {
  runtime: 'nodejs',
  matcher: ['/((?!_astro/|_vercel/|images/).*)'],
};

// AEO Spec version advertised on every Markdown response.
const AEO_VERSION = '1.0';

// AI crawlers that get Markdown by default, matching @dualmark/core's AI_BOTS list.
// Search engines such as Googlebot and Bingbot are not on it and always get HTML.
const AI_BOT_UA = /GPTBot|ChatGPT-User|OAI-SearchBot|ClaudeBot|Anthropic-ai|Claude-Web|Claude-SearchBot|Claude-User|PerplexityBot|Perplexity-User|Google-Extended|Applebot-Extended|cohere-ai|CCBot|Bytespider|DeepSeekBot|Amazonbot|YouBot|Diffbot|ImagesiftBot|Omgilibot|DuckAssistBot|meta-externalagent|meta-externalfetcher/i;

// Sent on every HTML page. Replaces the static Link header vercel.json used to set,
// so the rel="describedby" entries stay alongside the new rel="alternate" one.
const DESCRIBEDBY = '</llms.txt>; rel="describedby"; type="text/plain", </llms-full.txt>; rel="describedby"; type="text/plain", </ai.txt>; rel="describedby"; type="text/plain"';

// Marks the middleware's own request for the static .md file so it isn't handled twice.
const INTERNAL = 'x-markdown-internal';

const CORS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, HEAD, OPTIONS',
  'Access-Control-Allow-Headers': 'Accept, Content-Type',
};

/**
 * Quality the client gives HTML and Markdown (RFC 9110 q-values). An exact media
 * type beats text/* which beats the full wildcard. No Accept header means anything goes.
 */
export function acceptQualities(accept) {
  if (!accept || !accept.trim()) return { markdown: 1, html: 1 };
  const exact = { markdown: -1, html: -1 };
  let text = -1;
  let any = -1;
  for (const part of accept.split(',')) {
    const [type, ...params] = part.split(';').map((s) => s.trim().toLowerCase());
    const qParam = params.find((p) => p.startsWith('q='));
    const parsed = qParam ? Number(qParam.slice(2)) : 1;
    const q = Number.isFinite(parsed) ? Math.min(1, Math.max(0, parsed)) : 0;
    if (type === 'text/markdown' || type === 'text/x-markdown') exact.markdown = Math.max(exact.markdown, q);
    else if (type === 'text/html' || type === 'application/xhtml+xml') exact.html = Math.max(exact.html, q);
    else if (type === 'text/*') text = Math.max(text, q);
    else if (type === '*/*') any = Math.max(any, q);
  }
  const resolve = (q) => (q >= 0 ? q : text >= 0 ? text : any >= 0 ? any : 0);
  return { markdown: resolve(exact.markdown), html: resolve(exact.html) };
}

/** Which format to send: 'markdown', 'html', or null (neither is acceptable -> 406). */
export function negotiate(accept, userAgent) {
  const { markdown, html } = acceptQualities(accept);
  if (markdown <= 0 && html <= 0) return null;
  // Known AI crawlers get Markdown on a tie, e.g. Accept: */* or no Accept at all.
  if (AI_BOT_UA.test(userAgent ?? '')) return markdown > 0 && markdown >= html ? 'markdown' : 'html';
  return markdown > html ? 'markdown' : 'html';
}

/** /some-page/ -> /some-page.md ; / -> /index.md */
function markdownPath(pathname) {
  const p = pathname.replace(/\.md$/, '').replace(/\/+$/, '');
  return p === '' || p === '/index' ? '/index.md' : `${p}.md`;
}

/** Pages whose HTML may be swapped for Markdown: no file extension, not an endpoint. */
function isContentRoute(pathname) {
  return !/\.[a-z0-9]+$/i.test(pathname) && !/^\/(api|_[^/]*|\.well-known)(\/|$)/.test(pathname);
}

function respond(request, body, { status = 200, contentType = 'text/markdown; charset=utf-8', canonical, lastModified, negotiated = false } = {}) {
  const headers = new Headers({
    ...CORS,
    'Content-Type': contentType,
    'X-Content-Type-Options': 'nosniff',
    'X-AEO-Version': AEO_VERSION,
    // Every Markdown response varies on Accept: the same content is also served as
    // HTML, so shared caches must not hand one format to a client asking for the other.
    Vary: negotiated ? 'Accept, User-Agent' : 'Accept',
    'X-Markdown-Tokens': String(Math.ceil(body.length / 4)),
    'X-Robots-Tag': 'noindex, follow',
    'Cache-Control': status === 200 ? 'public, s-maxage=3600, stale-while-revalidate=86400' : 'public, s-maxage=300',
  });
  if (canonical) {
    headers.set('Content-Location', canonical);
    headers.set('Link', `<${canonical}>; rel="canonical"`);
  }
  if (lastModified) headers.set('Last-Modified', lastModified);
  return new Response(request.method === 'HEAD' ? null : body, { status, headers });
}

function notFound(request, pathname, negotiated) {
  const origin = new URL(request.url).origin;
  const body = `# Page not found\n\n> There is no Markdown page at ${pathname}.\n\nEvery page on this site is listed in ${origin}/llms.txt and ${origin}/api/md/_catalog.\n`;
  return respond(request, body, { status: 404, negotiated });
}

async function fetchInternal(request, path) {
  return fetch(new URL(path, request.url), { headers: { [INTERNAL]: '1' } });
}

// Paths of every page with a Markdown copy, read once per instance from md-catalog.json.
let catalogPaths;
function markdownPages(request) {
  catalogPaths ??= fetchInternal(request, '/md-catalog.json')
    .then((res) => (res.ok ? res.json() : Promise.reject(new Error(`md-catalog.json: ${res.status}`))))
    .then((json) => new Set(json.pages.map((p) => new URL(p.markdown).pathname)))
    .catch(() => {
      catalogPaths = undefined; // retry on the next request
      return new Set();
    });
  return catalogPaths;
}

/** Lets the HTML through, adding headers that point agents at its Markdown copy. */
async function passHtml(request, pathname) {
  const mdPath = markdownPath(pathname);
  const hasMarkdown = (await markdownPages(request)).has(mdPath);
  const link = hasMarkdown ? `<${mdPath}>; rel="alternate"; type="text/markdown", ${DESCRIBEDBY}` : DESCRIBEDBY;
  // x-middleware-next is what @vercel/functions' next() sends: continue to the
  // static page and merge these headers into its response.
  return new Response(null, {
    headers: { 'x-middleware-next': '1', Link: link, Vary: 'Accept, User-Agent' },
  });
}

function notAcceptable(request, pathname) {
  const mdPath = markdownPath(pathname);
  const body = `Not Acceptable\n\nThis page is available as text/html (${pathname}) or text/markdown (${mdPath}).\n`;
  return new Response(request.method === 'HEAD' ? null : body, {
    status: 406,
    headers: {
      ...CORS,
      'Content-Type': 'text/plain; charset=utf-8',
      'X-Content-Type-Options': 'nosniff',
      Vary: 'Accept, User-Agent',
      Link: `<${mdPath}>; rel="alternate"; type="text/markdown"`,
      'Cache-Control': 'no-store',
    },
  });
}

async function serveMarkdown(request, pathname, negotiated) {
  const res = await fetchInternal(request, markdownPath(pathname));
  if (!res.ok) return negotiated ? undefined : notFound(request, pathname, negotiated);
  const body = await res.text();
  const canonical = body.match(/^Canonical: (\S+)$/m)?.[1];
  const updated = body.match(/^Last updated: (\d{4}-\d{2}-\d{2})$/m)?.[1];
  return respond(request, body, {
    canonical,
    lastModified: updated ? new Date(`${updated}T00:00:00Z`).toUTCString() : undefined,
    negotiated,
  });
}

export default async function middleware(request) {
  if (request.headers.get(INTERNAL)) return;
  const { pathname } = new URL(request.url);

  const direct = pathname.startsWith('/api/md/') || pathname === '/api/md';
  const suffix = !direct && pathname.endsWith('.md');
  const page = !direct && !suffix && isContentRoute(pathname);
  if (!direct && !suffix && !page) return;

  let negotiated = false;
  if (page) {
    if (request.method !== 'GET' && request.method !== 'HEAD') return;
    const format = negotiate(request.headers.get('accept'), request.headers.get('user-agent'));
    if (format === null) return notAcceptable(request, pathname);
    if (format === 'html') return passHtml(request, pathname);
    negotiated = true;
  }

  if (request.method === 'OPTIONS') return new Response(null, { status: 204, headers: { ...CORS, 'Access-Control-Max-Age': '86400' } });
  if (request.method !== 'GET' && request.method !== 'HEAD') {
    return new Response('Method not allowed\n', { status: 405, headers: { ...CORS, Allow: 'GET, HEAD, OPTIONS' } });
  }

  if (direct) {
    const rest = pathname.replace(/^\/api\/md\/?/, '');
    if (rest.replace(/\/+$/, '') === '_catalog') {
      const res = await fetchInternal(request, '/md-catalog.json');
      if (!res.ok) return notFound(request, pathname, false);
      return respond(request, await res.text(), { contentType: 'application/json; charset=utf-8' });
    }
    return serveMarkdown(request, `/${rest}`, false);
  }
  // No Markdown copy (drafts, noindex hubs): fall back to the HTML page.
  return (await serveMarkdown(request, pathname, negotiated)) ?? passHtml(request, pathname);
}
