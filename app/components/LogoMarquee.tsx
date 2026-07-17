import Image from "next/image";

const logos = [
  {
    name: "Client 1",
    src: "/logos/client-1.png",
  },
  {
    name: "Client 2",
    src: "/logos/client-2.png",
  },
  {
    name: "Client 3",
    src: "/logos/client-3.png",
  },
  {
    name: "Client 4",
    src: "/logos/client-4.png",
  },
  {
    name: "Client 5",
    src: "/logos/client-5.png",
  },
  {
    name: "Client 6",
    src: "/logos/client-6.png",
  },
   {
    name: "Client 7",
    src: "/logos/client-7.png",
  },
];

const repeatedLogos = [...logos, ...logos];

export default function LogoMarquee() {
  return (
    <section className="bg-white px-6 py-16 text-black lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="gsap-fade-up mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="mb-3 text-[11px] font-medium tracking-[0.28em] text-black/40">
              Trusted By
            </p>

            <h2 className="max-w-xl text-2xl font-medium tracking-tight md:text-4xl">
              Brands and Creators I&apos;ve worked with.
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-6 text-black/50">
            A selection of clients, creators and brands featured through video
            editing and content work.
          </p>
        </div>

        <div className="relative overflow-hidden border-y border-black/10 py-8">
          {/* Left fade */}
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-white to-transparent" />

          {/* Right fade */}
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-white to-transparent" />

          <div className="logo-marquee flex w-max items-center gap-14">
            {repeatedLogos.map((logo, index) => (
              <div
  key={`${logo.name}-${index}`}
  className="flex h-24 w-52 shrink-0 items-center justify-center opacity-45 grayscale transition duration-300 hover:opacity-100 hover:grayscale-0"
>
  <Image
    src={logo.src}
    alt={logo.name}
    width={210}
    height={100}
    className="max-h-20 w-auto object-contain"
  />
</div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}