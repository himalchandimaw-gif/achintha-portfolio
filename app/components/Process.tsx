import Image from "next/image";

const steps = [
  {
    number: "01",
    title: "Brief",
    icon: "/icons/brief.png",
    text: "We discuss the project goal, style, references, footage details and final output format.",
  },
  {
    number: "02",
    title: "Edit",
    icon: "/icons/edit2.png",
    text: "The raw footage is shaped into a clean story with pacing, cuts, music and visual flow.",
  },
  {
    number: "03",
    title: "Review",
    icon: "/icons/review.png",
    text: "You review the first version and share feedback for changes, timing or visual direction.",
  },
  {
    number: "04",
    title: "Final Delivery",
    icon: "/icons/final-delivery.png",
    text: "The final video is exported in the required format, ready for social media, YouTube or campaigns.",
  },
];

export default function Process() {
  return (
    <section id="process" className="bg-white px-6 py-24 text-black lg:px-10">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="gsap-fade-up mb-16 max-w-3xl">
          <p className="mb-4 text-[11px] font-medium tracking-[0.28em] text-black/45">
            Process
          </p>

          <h2 className="text-3xl font-medium leading-tight tracking-tight md:text-5xl">
            A simple editing process from idea to final video.
          </h2>

          <p className="mt-6 max-w-2xl text-sm leading-7 text-black/55 md:text-base">
            Every project follows a clean workflow to keep the editing process
            smooth, organized and easy for the client.
          </p>
        </div>

        {/* Steps */}
        <div className="gsap-stagger grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div
              key={step.number}
              className="gsap-card group transform-gpu rounded-3xl border border-black/10 bg-[#f5f5f5] p-8 transition-colors duration-300 hover:bg-black hover:text-white"
            >
              <div className="mb-12 flex items-start justify-between">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-black/10 bg-white transition-colors duration-300 group-hover:border-white/10 group-hover:bg-white">
                  <Image
                    src={step.icon}
                    alt={`${step.title} icon`}
                    width={34}
                    height={34}
                    className="object-contain grayscale"
                  />
                </div>

                <span className="text-sm font-medium text-black/35 transition-colors duration-300 group-hover:text-white/35">
                  {step.number}
                </span>
              </div>

              <h3 className="text-2xl font-medium tracking-tight">
                {step.title}
              </h3>

              <p className="mt-5 text-sm leading-6 text-black/55 transition-colors duration-300 group-hover:text-white/55">
                {step.text}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <div className="gsap-fade-up mt-12 rounded-3xl bg-black p-8 text-white md:p-10">
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-center">
            <div>
              <p className="mb-3 text-[11px] font-medium tracking-[0.28em] text-white/45">
                Delivery
              </p>

              <h3 className="max-w-2xl text-2xl font-medium leading-tight tracking-tight md:text-3xl">
                Clean communication, organized revisions and polished final
                exports.
              </h3>
            </div>

            <a
              href="#contact"
              className="inline-flex w-fit items-center rounded-full bg-white px-7 py-4 text-xs font-medium text-black transition-colors duration-300 hover:bg-white/80"
            >
              Start a Project →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}