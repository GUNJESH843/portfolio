export const FooterMinimal = () => {
  return (
    <footer className="py-8 px-6 md:px-12 border-t border-border">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
          © 2025 Gunjesh Kumar
        </span>
        
        <span className="text-xs text-muted-foreground font-mono">
          Designed & Built with passion
        </span>

        <a 
          href="#" 
          className="text-xs uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors"
          data-hover
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        >
          Back to top ↑
        </a>
      </div>
    </footer>
  );
};
