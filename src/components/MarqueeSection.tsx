export const MarqueeSection = () => {
  const text = "AI Engineering • Web Development • Machine Learning • Creative Coding • ";
  
  return (
    <section className="py-8 border-y border-border overflow-hidden">
      <div className="marquee">
        <div className="marquee-content">
          {[...Array(4)].map((_, i) => (
            <span key={i} className="display-medium text-muted-foreground/30 whitespace-nowrap px-4">
              {text}
            </span>
          ))}
        </div>
        <div className="marquee-content" aria-hidden>
          {[...Array(4)].map((_, i) => (
            <span key={i} className="display-medium text-muted-foreground/30 whitespace-nowrap px-4">
              {text}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};
