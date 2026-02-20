interface SectionHeadingProps {
  badge?: string;
  title: string;
  description?: string;
  center?: boolean;
}

const SectionHeading = ({ badge, title, description, center = true }: SectionHeadingProps) => (
  <div className={`mb-12 max-w-2xl ${center ? "mx-auto text-center" : ""}`}>
    {badge && (
      <span className="mb-3 inline-block rounded-full bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
        {badge}
      </span>
    )}
    <h2 className="font-display text-3xl font-bold tracking-tight md:text-4xl">{title}</h2>
    {description && <p className="mt-4 text-muted-foreground">{description}</p>}
  </div>
);

export default SectionHeading;
