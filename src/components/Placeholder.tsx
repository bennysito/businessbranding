type PlaceholderProps = {
  label?: string;
  className?: string;
};

export function Placeholder({ label = 'Placeholder', className = '' }: PlaceholderProps) {
  return (
    <div
      className={`grid place-items-center rounded border border-dashed border-slate-300 bg-slate-100 text-center text-xs font-bold uppercase tracking-[0.2em] text-slate-400 ${className}`}
    >
      {label}
    </div>
  );
}
