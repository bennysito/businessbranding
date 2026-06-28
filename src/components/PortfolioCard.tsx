import { Placeholder } from './Placeholder';

type PortfolioCardProps = {
  title: string;
  category: string;
  description: string;
};

export function PortfolioCard({ title, category, description }: PortfolioCardProps) {
  return (
    <article className="group overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-azure/40 hover:shadow-premium">
      <div className="relative overflow-hidden">
        <Placeholder
          label="Image"
          className="h-56 rounded-none border-x-0 border-t-0 transition duration-500 group-hover:scale-[1.03] group-hover:border-azure/40"
        />
        <div className="absolute inset-0 grid place-items-center bg-ink/0 opacity-0 transition duration-300 group-hover:bg-ink/55 group-hover:opacity-100">
          <span className="rounded border border-white/30 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-white">
            Preview Soon
          </span>
        </div>
      </div>
      <div className="p-6">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-azure">{category}</p>
        <h3 className="mt-3 text-xl font-bold text-ink">{title}</h3>
        <p className="mt-3 text-sm leading-6 text-steel">{description}</p>
      </div>
    </article>
  );
}
