import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function MobileNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const close = () => setIsMenuOpen(false);

  // Close on Escape and lock body scroll while the menu is open
  useEffect(() => {
    if (!isMenuOpen) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
    };
    document.addEventListener('keydown', onKey);

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [isMenuOpen]);

  return (
    <div className="md:hidden">
      <button
        onClick={() => setIsMenuOpen((v) => !v)}
        className="text-gray-600 relative z-50"
        aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={isMenuOpen}
      >
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {isMenuOpen && (
        <>
          {/* Backdrop — tap outside to close */}
          <div
            className="fixed inset-0 top-16 bg-black/40 z-40"
            onClick={close}
            aria-hidden="true"
          />

          {/* Panel — anchored under the sticky 4rem header, scrolls if tall */}
          <div className="fixed top-16 inset-x-0 z-50 bg-white border-b border-gray-200 py-4 px-6 shadow-md max-h-[calc(100vh-4rem)] overflow-y-auto overscroll-contain">
            <nav className="flex flex-col space-y-4">
              <a href="/" onClick={close} className="text-left text-lg font-semibold py-2">Home</a>
              <a href="/best-of" onClick={close} className="text-left text-lg font-semibold py-2">Best of 2026</a>
              <div className="border-t border-gray-100 pt-4">
                <p className="text-xs font-black uppercase tracking-widest text-gray-400 mb-3">Treadmill Guides</p>
                <a href="/best-treadmill-for-home-reviews" onClick={close} className="flex items-center gap-3 py-2 no-underline">
                  <span className="text-xl">🏠</span>
                  <div>
                    <p className="text-base font-semibold text-gray-900">Best Treadmills for Home</p>
                    <p className="text-xs text-gray-400">7 picks · Tested 6 months</p>
                  </div>
                </a>
                <a href="/best-folding-treadmill-reviews" onClick={close} className="flex items-center gap-3 py-2 no-underline mt-2">
                  <span className="text-xl">📦</span>
                  <div>
                    <p className="text-base font-semibold text-gray-900">Best Folding Treadmills</p>
                    <p className="text-xs text-gray-400">Space-saving picks</p>
                  </div>
                </a>
                <a href="/best-treadmill-under-1000-reviews" onClick={close} className="flex items-center gap-3 py-2 no-underline mt-2">
                  <span className="text-xl">💵</span>
                  <div>
                    <p className="text-base font-semibold text-gray-900">Best Treadmills Under $1,000</p>
                    <p className="text-xs text-gray-400">Budget-friendly picks</p>
                  </div>
                </a>
              </div>
              <div className="border-t border-gray-100 pt-4">
                <p className="text-xs font-black uppercase tracking-widest text-gray-400 mb-3">Blog</p>
                <a href="/treadmill-reviews-2026" onClick={close} className="flex items-center gap-3 py-2 no-underline">
                  <span className="text-xl">⭐</span>
                  <div>
                    <p className="text-base font-semibold text-gray-900">Treadmill Reviews 2026</p>
                    <p className="text-xs text-gray-400">How we test &amp; this year's winners</p>
                  </div>
                </a>
                <a href="/treadmill-buying-guide-2026" onClick={close} className="flex items-center gap-3 py-2 no-underline mt-2">
                  <span className="text-xl">📋</span>
                  <div>
                    <p className="text-base font-semibold text-gray-900">Treadmill Buying Guide</p>
                    <p className="text-xs text-gray-400">What to check before you compare models</p>
                  </div>
                </a>
              </div>
              <div className="border-t border-gray-100 pt-4">
                <p className="text-xs font-black uppercase tracking-widest text-gray-400 mb-3">Brands</p>
                <a href="/nordictrack" onClick={close} className="block py-2 no-underline text-base font-semibold text-gray-900">NordicTrack</a>
                <a href="/proform-treadmill" onClick={close} className="block py-2 no-underline text-base font-semibold text-gray-900">ProForm</a>
                <a href="/sole-fitness" onClick={close} className="block py-2 no-underline text-base font-semibold text-gray-900">Sole Fitness</a>
                <a href="/life-fitness" onClick={close} className="block py-2 no-underline text-base font-semibold text-gray-900">Life Fitness</a>
                <a href="/matrix-fitness" onClick={close} className="block py-2 no-underline text-base font-semibold text-gray-900">Matrix Fitness</a>
                <a href="/bowflex" onClick={close} className="block py-2 no-underline text-base font-semibold text-gray-900">Bowflex</a>
              </div>
              <a href="/best-of" onClick={close} className="text-left text-lg font-semibold py-2 border-t pt-4 text-[#0F62FE]">See All Guides &amp; Reviews</a>
              <a href="/best-of" onClick={close} className="text-left text-lg font-semibold py-2 text-[#FF5A1F]">Trending Deals</a>
            </nav>
          </div>
        </>
      )}
    </div>
  );
}
