import Image from "next/image";

const tools = [
  "Premiere Pro",
  "After Effects",
  "Frame.io",
  "CapCut",
  "Photoshop",
];

export default function About() {
  return (
    <section id="about" className="bg-[#f5f5f5] px-6 py-24 text-black lg:px-10">
      <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        {/* Image */}
        <div className="gsap-fade-up relative overflow-hidden rounded-3xl bg-black">
          <div className="relative h-[520px] w-full">
            <Image
              src="/images/1.jpg"
              alt="Video editor portrait"
              fill
              className="object-cover grayscale"
              sizes="(max-width: 1024px) 100vw, 45vw"
              priority
            />
          </div>

          <div className="absolute inset-0 bg-black/20" />
        </div>

        {/* Content */}
        <div className="gsap-fade-up">
          <p className="mb-4 text-[11px] font-medium tracking-[0.28em] text-black/45">
            About Me
          </p>

          <h2 className="max-w-3xl text-3xl font-medium leading-tight tracking-tight text-black md:text-5xl">
            Creating clean, cinematic edits for creators, brands and personal
            stories.
          </h2>

          <p className="mt-7 max-w-2xl text-sm leading-7 text-black/60 md:text-base">
            I help transform raw footage into sharp, engaging and visually
            polished content. My work focuses on strong pacing, clean cuts,
            emotional flow and a premium final look that feels modern and
            professional.
          </p>

          <p className="mt-5 max-w-2xl text-sm leading-7 text-black/60 md:text-base">
            From short-form videos to long-form content and personal brand
            visuals, every project is edited with attention to story, rhythm,
            sound and audience impact.
          </p>

          {/* Tools */}
          <div className="mt-10">
            <p className="mb-4 text-xs font-medium tracking-[0.22em] text-black/40">
              Tools
            </p>

            <div className="flex flex-wrap gap-x-5 gap-y-3">
              {tools.map((tool, index) => (
                <span key={tool} className="text-sm font-medium text-black/65">
                  {tool}
                  {index !== tools.length - 1 && (
                    <span className="ml-5 text-black/20">|</span>
                  )}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-12">
            <a
              href="#work"
              className="inline-flex items-center border-b border-black pb-1 text-sm font-medium text-black transition hover:text-black/55"
            >
              View selected works →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}