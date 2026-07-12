import Image from "next/image";
export default function Navbar() {
  return (
    <header className="absolute left-0 top-0 z-50 w-full">
      <div className="navbar-anim mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-10">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="relative h-10 w-10 overflow-hidden rounded-sm bg-white p-1">
  <Image
    src="/images/logo.png"
    alt="Logo"
    fill
    className="object-contain"
  />
</div>

          <div className="leading-none text-white">
            <h1 className="text-lg font-bold tracking-[0.3em]">ACHINTHA</h1>
            <p className="mt-1 text-[10px] font-medium tracking-[0.35em] text-white/70">
              VIDEO EDITOR
            </p>
          </div>
        </div>

        {/* Nav Links */}
        <nav className="hidden items-center gap-10 text-xs font-bold text-white md:flex">
          <a href="#work" className="hover:text-white/70">
            WORK
          </a>
          <a href="#about" className="hover:text-white/70">
            ABOUT
          </a>
          <a href="#services" className="hover:text-white/70">
            SERVICES
          </a>
          <a href="#process" className="hover:text-white/70">
            PROCESS
          </a>
          <a href="#pricing" className="hover:text-white/70">
  PRICING
</a>
        </nav>

        {/* CTA */}
        <a
          href="#contact"
          className="hidden rounded border border-white/40 px-6 py-3 text-xs font-bold text-white transition hover:bg-white hover:text-black md:inline-flex"
        >
          LET&apos;S WORK TOGETHER →
        </a>
      </div>
    </header>
  );
}