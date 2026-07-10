"use client";

import { ExternalLink, Play, X } from "lucide-react";
import { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const works = [
  {
    title: "Cinematic Edit 01",
    category: "Video Editing",
    description: "Clean cinematic pacing, mood, music sync and polished cuts.",
    vimeoUrl: "https://player.vimeo.com/video/1128626230",
  },
  {
    title: "Creative Visual Edit",
    category: "Commercial / Social",
    description: "A sharp visual edit crafted for social media and brand impact.",
    vimeoUrl: "https://player.vimeo.com/video/1068741094",
  },
  {
    title: "Storytelling Edit",
    category: "Portfolio Work",
    description: "A smooth story-driven edit with clean structure and emotion.",
    vimeoUrl: "https://player.vimeo.com/video/1129230015",
  },
];

export default function SelectedWorks() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const mobilePinRef = useRef<HTMLDivElement | null>(null);
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    let mm: gsap.MatchMedia | undefined;

    const ctx = gsap.context(() => {
      mm = gsap.matchMedia();

      // Mobile only pinned scroll effect
      mm.add("(max-width: 767px)", () => {
        const cards = gsap.utils.toArray<HTMLElement>(".mobile-pin-card");

        gsap.set(cards, {
          autoAlpha: 0,
          y: 40,
          scale: 0.94,
        });

        gsap.set(cards[0], {
          autoAlpha: 1,
          y: 0,
          scale: 1,
        });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: mobilePinRef.current,
            pin: true,
            start: "top top",
            end: "+=1000",
            scrub: 1,
            anticipatePin: 1,
            snap: {
              snapTo: "labels",
              duration: { min: 0.2, max: 1 },
              delay: 0.1,
              ease: "power1.inOut",
            },
          },
        });

        tl.addLabel("card-1")
          .to({}, { duration: 0.3 })

          .addLabel("card-2")
          .to(
            cards[0],
            {
              autoAlpha: 0,
              y: -40,
              scale: 0.94,
              duration: 0.6,
              ease: "power2.out",
            },
            "card-2"
          )
          .to(
            cards[1],
            {
              autoAlpha: 1,
              y: 0,
              scale: 1,
              duration: 0.6,
              ease: "power2.out",
            },
            "card-2"
          )

          .addLabel("card-3")
          .to(
            cards[1],
            {
              autoAlpha: 0,
              y: -40,
              scale: 0.94,
              duration: 0.6,
              ease: "power2.out",
            },
            "card-3"
          )
          .to(
            cards[2],
            {
              autoAlpha: 1,
              y: 0,
              scale: 1,
              duration: 0.6,
              ease: "power2.out",
            },
            "card-3"
          )

          .addLabel("end");
      });
    }, sectionRef);

    return () => {
      mm?.revert();
      ctx.revert();
    };
  }, []);

  return (
    <>
      <section
        ref={sectionRef}
        id="work"
        className="bg-white px-6 py-24 text-black lg:px-10"
      >
        <div className="mx-auto max-w-7xl">
          {/* Header */}
          <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="mb-3 text-[11px] font-medium tracking-[0.28em] text-black/45">
                Selected Works
              </p>

              <h2 className="max-w-2xl text-3xl font-medium leading-tight tracking-tight text-black md:text-5xl">
                Recent edits with clean cinematic storytelling.
              </h2>
            </div>

            <div className="max-w-sm">
              <p className="text-sm leading-6 text-black/55">
                A curated collection of visual edits, brand stories and creative
                video projects crafted with a clean cinematic style.
              </p>

              <a
                href="https://vimeo.com/user139016661"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-2 text-xs font-medium text-black underline-offset-4 hover:underline"
              >
                View full Vimeo profile
                <ExternalLink size={14} />
              </a>
            </div>
          </div>

          {/* Desktop normal cards - no pinned effect */}
          <div className="hidden gap-5 md:grid md:grid-cols-3">
            {works.map((work, index) => (
              <button
                key={work.title}
                onClick={() => setActiveVideo(work.vimeoUrl)}
                className="group relative h-[460px] overflow-hidden rounded-3xl bg-black text-left text-white"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#050505] via-[#222222] to-[#8a8a8a]" />
                <div className="absolute inset-0 bg-black/25 transition-colors duration-300 group-hover:bg-black/10" />

                <span className="absolute right-6 top-6 text-7xl font-light text-white/10">
                  0{index + 1}
                </span>

                <div className="absolute left-6 top-6 flex h-12 w-12 items-center justify-center rounded-full bg-white text-black transition-transform duration-300 group-hover:scale-110">
                  <Play size={16} fill="black" />
                </div>

                <div className="absolute inset-x-6 bottom-8">
                  <p className="mb-4 text-[11px] font-medium tracking-[0.25em] text-white/50">
                    {work.category}
                  </p>

                  <h3 className="max-w-sm text-3xl font-medium leading-tight tracking-tight text-white">
                    {work.title}
                  </h3>

                  <p className="mt-5 max-w-sm text-sm leading-6 text-white/55">
                    {work.description}
                  </p>

                  <div className="mt-8 inline-flex items-center gap-3 rounded-full border border-white/15 px-5 py-3 text-xs font-medium text-white/70 transition-colors duration-300 group-hover:bg-white group-hover:text-black">
                    Watch Project
                    <Play size={13} fill="currentColor" />
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Mobile pinned scroll effect only */}
          <div ref={mobilePinRef} className="relative h-[560px] md:hidden">
            <div className="relative h-[480px]">
              {works.map((work, index) => (
                <button
                  key={work.title}
                  onClick={() => setActiveVideo(work.vimeoUrl)}
                  className="mobile-pin-card absolute inset-0 overflow-hidden rounded-3xl bg-black text-left text-white"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#050505] via-[#222222] to-[#8a8a8a]" />
                  <div className="absolute inset-0 bg-black/25" />

                  <span className="absolute right-6 top-6 text-7xl font-light text-white/10">
                    0{index + 1}
                  </span>

                  <div className="absolute left-6 top-6 flex h-12 w-12 items-center justify-center rounded-full bg-white text-black">
                    <Play size={16} fill="black" />
                  </div>

                  <div className="absolute inset-x-6 bottom-8">
                    <p className="mb-4 text-[11px] font-medium tracking-[0.25em] text-white/50">
                      {work.category}
                    </p>

                    <h3 className="max-w-sm text-3xl font-medium leading-tight tracking-tight text-white">
                      {work.title}
                    </h3>

                    <p className="mt-5 max-w-sm text-sm leading-6 text-white/55">
                      {work.description}
                    </p>

                    <div className="mt-8 inline-flex items-center gap-3 rounded-full border border-white/15 px-5 py-3 text-xs font-medium text-white/70">
                      Watch Project
                      <Play size={13} fill="currentColor" />
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Vimeo Popup */}
      {activeVideo && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 px-4">
          <button
            onClick={() => setActiveVideo(null)}
            className="absolute right-6 top-6 flex h-11 w-11 items-center justify-center rounded-full bg-white text-black transition-colors hover:bg-white/80"
            aria-label="Close video"
          >
            <X size={20} />
          </button>

          <div className="w-full max-w-5xl overflow-hidden rounded-2xl bg-black shadow-2xl">
            <div className="relative aspect-video">
              <iframe
                src={`${activeVideo}?autoplay=1&title=0&byline=0&portrait=0`}
                className="absolute inset-0 h-full w-full"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                title="Vimeo video player"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}