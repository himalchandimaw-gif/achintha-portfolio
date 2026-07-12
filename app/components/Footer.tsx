import { Mail, Phone, ExternalLink, ArrowUpRight } from "lucide-react";

const contactLinks = [
  {
    label: "Email",
    value: "apgmachintha@gmail.com",
    href: "mailto:apgmachintha@gmail.com",
    icon: Mail,
  },
  {
    label: "WhatsApp",
    value: "+94 74 345 3312",
    href: "https://wa.me/0743453312",
    icon: Phone,
  },
  {
    label: "Vimeo",
    value: "View Portfolio",
    href: "https://vimeo.com/user139016661",
    icon: ExternalLink,
  },
];

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#f5f5f5] px-6 py-20 text-black lg:px-10">
      <div className="mx-auto max-w-7xl">
        {/* Main CTA */}
        <div className="gsap-fade-up rounded-3xl bg-black px-6 py-14 text-white md:px-12 md:py-16">
          <div className="flex flex-col justify-between gap-10 lg:flex-row lg:items-end">
            <div>
              <p className="mb-5 text-[11px] font-medium tracking-[0.28em] text-white/45">
                Contact
              </p>

              <h2 className="max-w-3xl text-4xl font-medium leading-tight tracking-tight md:text-6xl">
                Let&apos;s create something clean, cinematic and memorable.
              </h2>
            </div>

            <a
              href="https://wa.me/0743453312"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-fit items-center gap-3 rounded-full bg-white px-8 py-4 text-sm font-medium text-black transition-colors duration-300 hover:bg-white/80"
            >
              Start a Project
              <ArrowUpRight size={18} />
            </a>
          </div>
        </div>

        {/* Contact Cards */}
        <div className="gsap-stagger mt-6 grid gap-4 md:grid-cols-3">
          {contactLinks.map((item) => {
            const Icon = item.icon;

            return (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  item.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                className="gsap-card group transform-gpu rounded-3xl border border-black/10 bg-white p-6 transition-colors duration-300 hover:bg-black hover:text-white"
              >
                <div className="mb-10 flex h-12 w-12 items-center justify-center rounded-full bg-black text-white transition-colors duration-300 group-hover:bg-white group-hover:text-black">
                  <Icon size={18} />
                </div>

                <p className="text-xs font-medium text-black/40 transition-colors duration-300 group-hover:text-white/45">
                  {item.label}
                </p>

                <div className="mt-2 flex items-center justify-between gap-4">
                  <h3 className="text-lg font-medium">{item.value}</h3>

                  <ArrowUpRight
                    size={18}
                    className="opacity-40 transition-opacity duration-300 group-hover:opacity-100"
                  />
                </div>
              </a>
            );
          })}
        </div>

        {/* Bottom Footer */}
        <div className="gsap-fade-up mt-12 flex flex-col justify-between gap-4 border-t border-black/10 pt-6 text-xs text-black/45 md:flex-row md:items-center">
          <p>© 2026 Video Editor Portfolio. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <a href="#work" className="transition-colors hover:text-black">
              Work
            </a>
            <a href="#about" className="transition-colors hover:text-black">
              About
            </a>
            <a href="#services" className="transition-colors hover:text-black">
              Services
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}