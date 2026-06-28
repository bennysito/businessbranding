import { type FormEvent, useMemo, useState } from 'react';
import { Footer } from './components/Footer';
import { Navbar } from './components/Navbar';
import { OrgChartCard } from './components/OrgChartCard';
import { Placeholder } from './components/Placeholder';
import { PortfolioCard } from './components/PortfolioCard';
import { Reveal } from './components/Reveal';
import { SectionHeader } from './components/SectionHeader';
import { ServiceCard } from './components/ServiceCard';
import type { PageId } from './data';
import { leadership, navItems, portfolioItems, services } from './data';

function App() {
  const initialPage = useMemo(() => {
    const hash = window.location.hash.replace('#', '') as PageId;
    return navItems.some((item) => item.id === hash) ? hash : 'home';
  }, []);
  const [activePage, setActivePage] = useState<PageId>(initialPage);

  const navigate = (page: PageId) => {
    setActivePage(page);
    window.history.pushState(null, '', `#${page}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white font-sans text-ink">
      <Navbar activePage={activePage} onNavigate={navigate} />
      <main>{renderPage(activePage, navigate)}</main>
      <Footer onNavigate={navigate} />
    </div>
  );
}

function renderPage(page: PageId, navigate: (page: PageId) => void) {
  switch (page) {
    case 'about':
      return <AboutPage />;
    case 'offerings':
      return <OfferingsPage />;
    case 'portfolio':
      return <PortfolioPage />;
    case 'org-chart':
      return <OrgChartPage />;
    case 'contact':
      return <ContactPage />;
    default:
      return <HomePage onNavigate={navigate} />;
  }
}

function HomePage({ onNavigate }: { onNavigate: (page: PageId) => void }) {
  return (
    <>
      <section className="relative overflow-hidden bg-ink text-white">
        <div className="absolute -left-28 top-16 h-72 w-72 rounded-full bg-azure/20 blur-3xl" />
        <div className="absolute -right-24 bottom-10 h-80 w-80 rounded-full bg-gold/15 blur-3xl" />
        <div className="absolute right-1/4 top-12 h-24 w-24 rounded-full border border-white/10" />
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 md:grid-cols-2 lg:px-8 lg:py-28">
          <div className="relative">
            <p className="hero-enter text-sm font-bold uppercase tracking-[0.24em] text-gold">
              Digital services for growing businesses
            </p>
            <h1 className="hero-enter-delayed mt-5 text-4xl font-bold tracking-tight md:text-6xl">
              Professional digital solutions built for clarity, growth, and trust.
            </h1>
            <p className="hero-enter-more-delayed mt-6 max-w-xl text-lg leading-8 text-slate-300">
              We help clients improve their marketing, online presence, internal systems, creative
              assets, and financial organization through polished digital services.
            </p>
            <div className="hero-enter-more-delayed mt-9 flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                onClick={() => onNavigate('offerings')}
                className="rounded bg-gold px-6 py-3 text-sm font-bold text-ink transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:shadow-xl hover:shadow-gold/20"
              >
                View Services
              </button>
              <button
                type="button"
                onClick={() => onNavigate('contact')}
                className="rounded border border-white/25 px-6 py-3 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:text-ink hover:shadow-xl hover:shadow-white/10"
              >
                Contact Us
              </button>
            </div>
          </div>
          <div className="float-soft relative rounded-lg border border-white/10 bg-white/5 p-4 shadow-premium transition duration-300 hover:border-gold/30 hover:bg-white/10">
            <Placeholder label="Hero Graphic" className="h-80 border-white/20 bg-white/10 text-slate-400" />
          </div>
        </div>
      </section>

      <section className="bg-mist px-5 py-16 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-3">
          {['Creative Production', 'Technical Systems', 'Business Support'].map((item, index) => (
            <Reveal key={item} delay={index * 100}>
              <div className="rounded-lg bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-premium">
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-azure">{item}</p>
                <p className="mt-3 text-sm leading-6 text-steel">
                  Structured service delivery with a clean process, professional communication, and
                  practical outcomes clients can build on.
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}

function AboutPage() {
  return (
    <section className="page-fade px-5 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionHeader
            eyebrow="About the company"
            title="A digital services partner for modern business needs."
            description="Prime Digital Services is an upcoming company focused on helping clients strengthen their digital presence, improve operations, support marketing efforts, and keep financial organization clear and dependable."
          />
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <Reveal delay={100}>
          <div className="rounded-lg bg-ink p-8 text-white shadow-premium transition duration-300 hover:-translate-y-1">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-gold">Mission</p>
            <h2 className="mt-4 text-2xl font-bold">Deliver reliable digital work with purpose.</h2>
            <p className="mt-4 leading-7 text-slate-300">
              Our mission is to provide creative, technical, and administrative services that make
              businesses look more professional, operate more efficiently, and communicate more
              confidently.
            </p>
          </div>
          </Reveal>
          <Reveal delay={200}>
          <div className="rounded-lg border border-slate-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-premium">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-azure">Vision</p>
            <h2 className="mt-4 text-2xl font-bold text-ink">Become a trusted service hub.</h2>
            <p className="mt-4 leading-7 text-steel">
              Our vision is to become a dependable digital services company known for clean design,
              organized systems, clear financial support, and client-ready creative execution.
            </p>
          </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function OfferingsPage() {
  return (
    <section className="page-fade bg-mist px-5 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionHeader
            eyebrow="Offerings"
            title="Services designed to support marketing, systems, and operations."
            description="Each service is structured to help businesses present themselves better, manage work more clearly, and build professional assets for growth."
          />
        </Reveal>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Reveal key={service.title} delay={index * 80}>
              <ServiceCard {...service} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function PortfolioPage() {
  const filters = ['All', 'Websites', 'Video Editing', 'Systems', 'Photography', 'Accounting'];
  const [activeFilter, setActiveFilter] = useState('All');
  const filteredItems =
    activeFilter === 'All'
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeFilter);

  return (
    <section className="page-fade px-5 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionHeader
            eyebrow="Portfolio"
            title="Project showcases will be added as the company launches."
            description="These placeholder cards reserve space for future client work, internal samples, and case studies."
          />
        </Reveal>
        <Reveal delay={100}>
        <div className="mt-8 rounded-lg border border-azure/20 bg-azure/5 p-5 text-sm font-semibold text-ink">
          Real projects will be added soon.
        </div>
        </Reveal>
        <Reveal delay={160}>
          <div className="mt-8 flex flex-wrap gap-3">
            {filters.map((filter) => (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                className={`rounded-full border px-4 py-2 text-sm font-bold transition-all duration-300 ${
                  activeFilter === filter
                    ? 'border-ink bg-ink text-white shadow-lg shadow-ink/10'
                    : 'border-slate-200 bg-white text-steel hover:-translate-y-0.5 hover:border-azure hover:text-azure'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </Reveal>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {filteredItems.map((item, index) => (
            <Reveal key={`${activeFilter}-${item.title}`} delay={index * 90}>
              <PortfolioCard {...item} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function OrgChartPage() {
  return (
    <section className="page-fade bg-mist px-5 py-20 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <SectionHeader
            eyebrow="Organization"
            title="A clear leadership structure for accountable service delivery."
            description="The organizational chart presents the initial leadership roles responsible for strategy, operations, financial direction, and client trust."
            align="center"
          />
        </Reveal>
        <div className="mt-14">
          <Reveal className="mx-auto max-w-sm">
            <OrgChartCard {...leadership[0]} />
          </Reveal>
          <div className="mx-auto h-12 w-px bg-slate-300 line-grow" />
          <div className="mx-auto h-px max-w-md bg-slate-300 line-grow-x" />
          <div className="mx-auto h-12 w-px bg-slate-300 line-grow" />
          <Reveal className="mx-auto max-w-sm" delay={260}>
            <OrgChartCard {...leadership[1]} />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function ContactPage() {
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setShowSuccess(true);
  };

  return (
    <section className="page-fade px-5 py-20 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_0.9fr]">
        <div>
          <Reveal>
            <SectionHeader
              eyebrow="Contact"
              title="Let us know what your business needs next."
              description="Reach out to discuss digital services, project ideas, accounting support, creative production, or system development needs."
            />
          </Reveal>
          <form
            onSubmit={handleSubmit}
            className="mt-10 grid gap-5 rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition duration-300 focus-within:border-azure/30 focus-within:shadow-premium"
          >
            <label className="grid gap-2 text-sm font-bold text-ink">
              Name
              <input className="rounded border border-slate-300 px-4 py-3 font-normal outline-none transition-all duration-300 focus:-translate-y-0.5 focus:border-azure focus:ring-4 focus:ring-azure/10" />
            </label>
            <label className="grid gap-2 text-sm font-bold text-ink">
              Email
              <input
                type="email"
                className="rounded border border-slate-300 px-4 py-3 font-normal outline-none transition-all duration-300 focus:-translate-y-0.5 focus:border-azure focus:ring-4 focus:ring-azure/10"
              />
            </label>
            <label className="grid gap-2 text-sm font-bold text-ink">
              Service interested in
              <select className="rounded border border-slate-300 px-4 py-3 font-normal outline-none transition-all duration-300 focus:-translate-y-0.5 focus:border-azure focus:ring-4 focus:ring-azure/10">
                <option>Select a service</option>
                {services.map((service) => (
                  <option key={service.title}>{service.title}</option>
                ))}
              </select>
            </label>
            <label className="grid gap-2 text-sm font-bold text-ink">
              Message
              <textarea
                rows={5}
                className="rounded border border-slate-300 px-4 py-3 font-normal outline-none transition-all duration-300 focus:-translate-y-0.5 focus:border-azure focus:ring-4 focus:ring-azure/10"
              />
            </label>
            <button
              type="submit"
              className="rounded bg-ink px-6 py-3 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-azure hover:shadow-xl hover:shadow-azure/20"
            >
              Send Message
            </button>
            {showSuccess ? (
              <div className="hero-enter rounded border border-emerald-200 bg-emerald-50 p-4 text-sm font-semibold text-emerald-800">
                Thank you. Your message placeholder has been received, and real email delivery can
                be connected later.
              </div>
            ) : null}
          </form>
        </div>

        <Reveal delay={160}>
        <aside className="rounded-lg bg-ink p-8 text-white shadow-premium transition duration-300 hover:-translate-y-1 lg:self-start">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-gold">Business details</p>
          <div className="mt-8 space-y-6">
            {[
              ['Email', 'email@example.com'],
              ['Phone', '+00 000 000 0000'],
              ['Location', 'City, Country'],
            ].map(([label, value]) => (
              <div key={label} className="border-b border-white/10 pb-5">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-400">
                  {label}
                </p>
                <p className="mt-2 text-lg font-semibold">{value}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 leading-7 text-slate-300">
            We welcome inquiries from business owners, teams, and professionals looking for clear,
            reliable, and polished digital support. Tell us what you are building, and we will help
            identify the right next step.
          </p>
        </aside>
        </Reveal>
      </div>
    </section>
  );
}

export default App;
