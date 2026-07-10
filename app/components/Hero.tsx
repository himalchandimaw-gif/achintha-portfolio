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

function YouTubeIcon() {
  return (
    <svg
      width="21"
      height="21"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M23.5 6.2s-.2-1.7-.9-2.4c-.9-.9-1.9-.9-2.3-1C17.1 2.5 12 2.5 12 2.5s-5.1 0-8.3.3c-.5.1-1.5.1-2.3 1C.7 4.5.5 6.2.5 6.2S.2 8.1.2 10v1.8c0 1.9.3 3.8.3 3.8s.2 1.7.9 2.4c.9.9 2.1.9 2.6 1 1.9.2 8 .3 8 .3s5.1 0 8.3-.3c.5-.1 1.5-.1 2.3-1 .7-.7.9-2.4.9-2.4s.3-1.9.3-3.8V10c0-1.9-.3-3.8-.3-3.8ZM9.7 14.4V7.9l6.3 3.3-6.3 3.2Z" />
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
              href="https://instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white transition hover:bg-white hover:text-black"
            >
              <InstagramIcon />
            </a>

            <a
              href="https://youtube.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white transition hover:bg-white hover:text-black"
            >
              <YouTubeIcon />
            </a>

            <a
              href="mailto:hello@example.com"
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