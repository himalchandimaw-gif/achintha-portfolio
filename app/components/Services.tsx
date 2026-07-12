import { ChevronRight } from "lucide-react";

const services = [
  {
    title: "Short Form Video Editing",
    text: "Reels, TikToks, YouTube Shorts and fast-paced social media content edited to grab attention quickly.",
  },
  {
    title: "Long Form Video Editing",
    text: "YouTube videos, interviews, podcasts and long-form content edited with clean pacing and structure.",
  },
  {
    title: "Personal Brand Management",
    text: "Helping creators and professionals build a consistent visual identity through content strategy and editing.",
  },
  {
    title: "Content Creation",
    text: "Creative video ideas, social media visuals and content designed to support brands and creators.",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-black px-6 py-24 text-white lg:px-10">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="gsap-fade-up mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="mb-4 text-[11px] font-medium tracking-[0.28em] text-white/45">
              Services
            </p>

            <h2 className="max-w-2xl text-3xl font-medium leading-tight tracking-tight md:text-5xl">
              Editing and content services for creators, brands and businesses.
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-6 text-white/55">
            From short-form videos to full content support, every service is
            focused on clean visuals, strong storytelling and consistent brand
            presence.
          </p>
        </div>

        {/* Services List */}
        <div className="gsap-stagger grid gap-4 md:grid-cols-2">
          {services.map((service) => (
            <div
              key={service.title}
              className="gsap-card group transform-gpu rounded-3xl border border-white/10 bg-[#111111] p-7 transition-colors duration-300 hover:bg-white hover:text-black md:p-8"
            >
              <div className="mb-8 flex items-center gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition-colors duration-300 group-hover:bg-black group-hover:text-white">
                  <ChevronRight size={22} />
                </div>

                <h3 className="text-xl font-medium italic tracking-wide md:text-2xl">
                  {service.title}
                </h3>
              </div>

              <p className="max-w-xl text-sm leading-7 text-white/50 transition-colors duration-300 group-hover:text-black/55">
                {service.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}