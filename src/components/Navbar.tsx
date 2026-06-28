import { useEffect, useState } from 'react';
import type { PageId } from '../data';
import { navItems } from '../data';

type NavbarProps = {
  activePage: PageId;
  onNavigate: (page: PageId) => void;
};

export function Navbar({ activePage, onNavigate }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setHasScrolled(window.scrollY > 8);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (page: PageId) => {
    onNavigate(page);
    setIsOpen(false);
  };

  return (
    <header
      className={`sticky top-0 z-50 border-b text-white backdrop-blur transition-all duration-300 ${
        hasScrolled
          ? 'border-white/10 bg-ink/95 shadow-[0_18px_45px_rgba(9,17,31,0.22)]'
          : 'border-white/5 bg-ink/90'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <button
          type="button"
          onClick={() => handleNavigate('home')}
          className="group flex items-center gap-3 text-left"
          aria-label="Go to home page"
        >
          <span className="grid h-10 w-10 place-items-center rounded bg-white/10 ring-1 ring-white/15 transition group-hover:bg-white/15">
            <span className="h-4 w-4 rounded-sm bg-gold transition duration-300 group-hover:rotate-45" />
          </span>
          <span>
            <span className="block text-sm font-semibold uppercase tracking-[0.24em] text-gold">
              Prime
            </span>
            <span className="block text-base font-bold">Digital Services</span>
          </span>
        </button>

        <button
          type="button"
          className="rounded border border-white/15 px-3 py-2 text-sm font-semibold transition hover:border-gold hover:text-gold md:hidden"
          onClick={() => setIsOpen((value) => !value)}
          aria-expanded={isOpen}
          aria-controls="main-navigation"
        >
          Menu
        </button>

        <div
          id="main-navigation"
          className={`absolute left-0 right-0 top-full overflow-hidden bg-ink px-5 shadow-premium transition-all duration-300 md:static md:max-h-none md:overflow-visible md:bg-transparent md:p-0 md:opacity-100 md:shadow-none ${
            isOpen ? 'max-h-96 pb-5 opacity-100' : 'max-h-0 pb-0 opacity-0 md:max-h-none'
          }`}
        >
          <div className="flex flex-col gap-2 md:flex-row md:items-center md:gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => handleNavigate(item.id)}
                className={`group relative rounded px-4 py-2 text-sm font-semibold transition ${
                  activePage === item.id
                    ? 'bg-white text-ink shadow-sm'
                    : 'text-slate-200 hover:bg-white/5 hover:text-white'
                }`}
              >
                {item.label}
                <span
                  className={`absolute bottom-1 left-4 right-4 h-0.5 origin-left rounded-full transition-transform duration-300 ${
                    activePage === item.id
                      ? 'scale-x-100 bg-gold'
                      : 'scale-x-0 bg-gold group-hover:scale-x-100'
                  }`}
                />
              </button>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}
