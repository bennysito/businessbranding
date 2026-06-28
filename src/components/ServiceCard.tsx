import { Placeholder } from './Placeholder';

type ServiceCardProps = {
  title: string;
  description: string;
};

export function ServiceCard({ title, description }: ServiceCardProps) {
  return (
    <article className="group cursor-pointer rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-azure/50 hover:shadow-[0_24px_70px_rgba(47,128,237,0.16)]">
      <Placeholder
        label="Icon"
        className="h-14 w-14 rounded-md transition duration-300 group-hover:-translate-y-1 group-hover:border-azure/50 group-hover:bg-azure/5 group-hover:text-azure"
      />
      <h3 className="mt-6 text-xl font-bold text-ink">{title}</h3>
      <p className="mt-3 min-h-24 text-sm leading-6 text-steel">{description}</p>
      <button
        type="button"
        className="mt-6 rounded border border-ink px-4 py-2 text-sm font-bold text-ink transition-all duration-300 group-hover:border-azure group-hover:bg-azure group-hover:text-white group-hover:shadow-lg group-hover:shadow-azure/20"
      >
        Learn More
      </button>
    </article>
  );
}
