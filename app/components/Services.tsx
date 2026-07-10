import {
  Film,
  Scissors,
  Palette,
  Sparkles,
  Clapperboard,
  MonitorPlay,
} from "lucide-react";

const services = [
  {
    icon: Scissors,
    title: "Short Form Edits",
    text: "Reels, TikToks, YouTube Shorts and fast-paced social media edits.",
  },
  {
    icon: MonitorPlay,
    title: "YouTube Editing",
    text: "Clean long-form video editing with pacing, cuts, sound and structure.",
  },
  {
    icon: Film,
    title: "Wedding Films",
    text: "Emotional wedding highlights with cinematic storytelling and music.",
  },
  {
    icon: Clapperboard,
    title: "Commercial Videos",
    text: "Professional edits for brands, businesses, promotions and campaigns.",
  },
  {
    icon: Palette,
    title: "Color Grading",
    text: "Cinematic tones, clean contrast and polished final look.",
  },
  {
    icon: Sparkles,
    title: "Motion Graphics",
    text: "Minimal titles, lower thirds, text animation and clean visual effects.",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-black px-6 py-24 text-white lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="gsap-fade-up mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="mb-4 text-[11px] font-medium tracking-[0.28em] text-white/45">
              Services
            </p>

            <h2 className="max-w-2xl text-3xl font-medium leading-tight tracking-tight md:text-5xl">
              Editing services for creators, brands and events.
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-6 text-white/55">
            From raw footage to final delivery, every edit is crafted with clean
            pacing, cinematic mood and professional finishing.
          </p>
        </div>

        <div className="gsap-stagger grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="gsap-card group transform-gpu rounded-3xl border border-white/10 bg-[#111111] p-8 transition-colors duration-300 hover:bg-white hover:text-black"
              >
                <div className="mb-10 flex h-12 w-12 items-center justify-center rounded-full bg-white text-black transition-colors duration-300 group-hover:bg-black group-hover:text-white">
                  <Icon size={20} />
                </div>

                <h3 className="text-xl font-medium tracking-tight">
                  {service.title}
                </h3>

                <p className="mt-4 text-sm leading-6 text-white/50 transition-colors duration-300 group-hover:text-black/55">
                  {service.text}
                </p>

                <div className="mt-8 h-px w-10 bg-white/20 transition-all duration-300 group-hover:w-20 group-hover:bg-black/30" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}