interface SectionHeadingProps {
  tag?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export default function SectionHeading({
  tag,
  title,
  subtitle,
  centered = true,
}: SectionHeadingProps) {
  return (
    <div className={`mb-14 sm:mb-16 ${centered ? "text-center" : ""}`}>
      {tag && (
        <span className="inline-block mb-4 text-[11px] font-semibold tracking-[0.2em] uppercase text-brand-400">
          {tag}
        </span>
      )}
      <h2
        className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-[3.25rem] lg:leading-[1.15]"
        style={{ fontFamily: "var(--font-heading)" }}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-4 max-w-xl text-base text-dark-400 leading-relaxed ${centered ? "mx-auto" : ""}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
