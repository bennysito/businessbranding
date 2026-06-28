import { Placeholder } from './Placeholder';

type OrgChartCardProps = {
  role: string;
  name: string;
  description: string;
};

export function OrgChartCard({ role, name, description }: OrgChartCardProps) {
  return (
    <article className="group relative rounded-lg border border-slate-200 bg-white p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-gold/50 hover:shadow-premium">
      <Placeholder
        label="Photo"
        className="mx-auto h-24 w-24 rounded-full transition duration-300 group-hover:border-gold/50 group-hover:bg-gold/5 group-hover:text-gold"
      />
      <p className="mt-5 text-sm font-bold uppercase tracking-[0.18em] text-gold">{role}</p>
      <h3 className="mt-2 text-xl font-bold text-ink">{name}</h3>
      <p className="mt-3 text-sm leading-6 text-steel">{description}</p>
    </article>
  );
}
