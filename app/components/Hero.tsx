import { Mail, Play } from "lucide-react";

function InstagramIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5ZM.32 8.03h4.36V23H.32V8.03ZM8.03 8.03h4.18v2.04h.06c.58-1.1 2-2.26 4.12-2.26 4.41 0 5.22 2.9 5.22 6.67V23h-4.36v-7.55c0-1.8-.03-4.12-2.51-4.12-2.51 0-2.9 1.96-2.9 3.99V23H8.03V8.03Z" />
    </svg>
  );
}

export default function Hero() {
  return (
    <section className="hero-section relative min-h-[100svh] overflow-hidden bg-black">
      {/* Background image */}
      <div
        className="hero-bg absolute inset-0 bg-cover bg-[position:75%_center] md:bg-center"
        style={{
          backgroundImage: "url('/images/hero-client-bw.jpg')",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/45 md:bg-black/65" />

      {/* Mobile gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent md:hidden" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-7xl items-end px-6 pb-16 pt-28 md:items-center md:pb-0 lg:px-10">
        <div className="hero-content max-w-3xl">
          <p className="mb-5 border-l border-white/70 pl-4 text-[11px] font-medium tracking-wide text-white/80">
            Video Editor & Visual Storyteller
          </p>

          <h1 className="max-w-2xl text-4xl font-semibold leading-[1.05] tracking-tight text-white md:text-6xl">
            I turn raw footage into powerful stories.
          </h1>

          <p className="mt-6 max-w-xl text-sm leading-7 text-white/70 md:text-lg">
            Crafting clean, cinematic edits for brands, creators, weddings and
            social media.
          </p>

          <div className="mt-8 flex flex-wrap gap-3 md:gap-4">
            <a
              href="#work"
              className="inline-flex items-center gap-3 rounded bg-white px-6 py-4 text-xs font-semibold text-black transition hover:bg-white/85"
            >
              <Play size={16} fill="black" />
              Watch Works
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-3 rounded border border-white/40 px-6 py-4 text-xs font-semibold text-white transition hover:bg-white hover:text-black"
            >
              Let&apos;s Work →
            </a>
          </div>

          {/* Social Icons */}
          <div className="mt-14 flex items-center gap-4 text-white md:mt-24">
            <a
              href="https://www.instagram.com/apgmachintha?igsh=NHd2YnI3amlpcm15"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white transition hover:bg-white hover:text-black"
            >
              <InstagramIcon />
            </a>

            <a
              href="https://www.linkedin.com/in/apgm-achintha/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white transition hover:bg-white hover:text-black"
            >
              <LinkedInIcon/>
            </a>

            <a
              href="mailto:apgmachintha@gmail.com"
              aria-label="Email"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white transition hover:bg-white hover:text-black"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 text-white md:flex">
        <div className="flex h-10 w-6 items-start justify-center rounded-full border border-white/60 p-1">
          <div className="h-2 w-1 rounded-full bg-white" />
        </div>
        <span className="text-[10px] font-medium uppercase tracking-widest">
          Scroll
        </span>
      </div>
    </section>
  );
}