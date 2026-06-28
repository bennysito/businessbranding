type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
};

export function SectionHeader({ eyebrow, title, description, align = 'left' }: SectionHeaderProps) {
  return (
    <div className={align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}>
      <p className="text-sm font-bold uppercase tracking-[0.22em] text-azure">{eyebrow}</p>
      <h1 className="mt-3 text-4xl font-bold tracking-tight text-ink md:text-5xl">{title}</h1>
      {description ? (
        <p className="mt-5 text-lg leading-8 text-steel">{description}</p>
      ) : null}
    </div>
  );
}
