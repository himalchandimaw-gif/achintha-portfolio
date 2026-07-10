import Image from "next/image";
import { Clapperboard, Film, MonitorPlay, Sparkles } from "lucide-react";

const tools = [
  "Adobe Premiere Pro",
  "After Effects",
  "DaVinci Resolve",
  "CapCut",
];

const highlights = [
  {
    icon: Film,
    title: "Cinematic Editing",
    text: "Clean cuts, strong pacing and emotional storytelling.",
  },
  {
    icon: MonitorPlay,
    title: "Social Media Content",
    text: "Reels, YouTube edits, short-form videos and brand visuals.",
  },
  {
    icon: Clapperboard,
    title: "Commercial Projects",
    text: "Professional edits for businesses, creators and campaigns.",
  },
  {
    icon: Sparkles,
    title: "Color & Motion",
    text: "Clean grading, minimal titles and subtle motion graphics.",
  },
];

export default function About() {
  return (
    <section id="about" className="bg-[#f5f5f5] px-6 py-24 text-black lg:px-10">
      <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        {/* Image */}
        <div className="gsap-fade-up relative overflow-hidden rounded-3xl bg-black">
          <div className="relative h-[520px] w-full">
            <Image
              src="/images/about-client.jpg"
              alt="Video editor portrait"
              fill
              className="object-cover grayscale"
              sizes="(max-width: 1024px) 100vw, 45vw"
              priority
            />
          </div>

          <div className="absolute inset-0 bg-black/20" />

          <div className="absolute bottom-6 left-6 rounded-full border border-white/20 bg-white/10 px-5 py-3 text-xs font-medium text-white backdrop-blur-md">
            Video Editor / Visual Creator
          </div>
        </div>

        {/* Content */}
        <div className="gsap-fade-up">
          <p className="mb-4 text-[11px] font-medium tracking-[0.28em] text-black/45">
            About Me
          </p>

          <h2 className="max-w-3xl text-3xl font-medium leading-tight tracking-tight text-black md:text-5xl">
            I create clean, cinematic visuals that make every story feel sharp
            and memorable.
          </h2>

          <p className="mt-6 max-w-2xl text-sm leading-7 text-black/60 md:text-base">
            I specialize in editing videos for brands, creators, events and
            social media. My focus is to transform raw footage into polished
            visual stories with smooth pacing, clean transitions, strong mood and
            a premium cinematic finish.
          </p>

          {/* Highlights */}
          <div className="gsap-stagger mt-10 grid gap-4 md:grid-cols-2">
            {highlights.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="gsap-card rounded-2xl border border-black/10 bg-white p-6"
                >
                  <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-full bg-black text-white">
                    <Icon size={18} />
                  </div>

                  <h3 className="text-base font-medium text-black">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-black/55">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Tools */}
          <div className="gsap-fade-up mt-10">
            <p className="mb-4 text-xs font-medium tracking-[0.22em] text-black/45">
              Editing Tools
            </p>

            <div className="flex flex-wrap gap-3">
              {tools.map((tool) => (
                <span
                  key={tool}
                  className="rounded-full border border-black/10 bg-white px-5 py-3 text-xs font-medium text-black/70"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}