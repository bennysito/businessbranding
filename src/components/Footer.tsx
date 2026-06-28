import type { PageId } from '../data';
import { services } from '../data';

type FooterProps = {
  onNavigate: (page: PageId) => void;
};

export function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-ink text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 md:grid-cols-[1.2fr_1fr_1fr] lg:px-8">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-gold">Prime</p>
          <h2 className="mt-2 text-2xl font-bold">Digital Services</h2>
          <p className="mt-4 max-w-md text-sm leading-6 text-slate-300">
            A professional digital services company preparing businesses for stronger marketing,
            systems, creative assets, and financial organization.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-slate-300">Services</h3>
          <ul className="mt-4 space-y-2 text-sm text-slate-300">
            {services.map((service) => (
              <li key={service.title}>{service.title}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-slate-300">Contact</h3>
          <div className="mt-4 space-y-2 text-sm text-slate-300">
            <p>Email: email@example.com</p>
            <p>Phone: +00 000 000 0000</p>
            <p>Location: City, Country</p>
          </div>
          <button
            type="button"
            onClick={() => onNavigate('contact')}
            className="mt-6 rounded bg-gold px-5 py-3 text-sm font-bold text-ink transition hover:bg-white"
          >
            Start a Conversation
          </button>
        </div>
      </div>
      <div className="border-t border-white/10 px-5 py-5 text-center text-xs text-slate-400">
        © 2026 Prime Digital Services. All rights reserved.
      </div>
    </footer>
  );
}
