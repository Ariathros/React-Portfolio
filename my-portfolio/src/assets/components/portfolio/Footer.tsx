export default function Footer() {
  return (
    <footer className="border-t border-border py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-6">
          <span className="font-mono text-xs text-muted-foreground tracking-wider">© 2024 — ALL RIGHTS RESERVED</span>
        </div>

        {/* <div className="flex items-center gap-1">
          <span className="font-mono text-[10px] text-muted-foreground tracking-wider mr-3">CONNECT →</span>
          <a href="#" className="p-2 text-muted-foreground hover:text-foreground transition-colors">
            <Github size={16} />
          </a>
          <a href="#" className="p-2 text-muted-foreground hover:text-foreground transition-colors">
            <Linkedin size={16} />
          </a>
          <a href="#" className="p-2 text-muted-foreground hover:text-foreground transition-colors">
            <Twitter size={16} />
          </a>
        </div> */}

        <div className="font-mono text-[10px] text-muted-foreground/50 tracking-wider">
          BUILT WITH REACT + TAILWIND, FRAMER MOTION, EMAILJS
        </div>
      </div>
    </footer>
  );
}