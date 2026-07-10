"use client";

import { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function GsapEffects() {
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    ScrollTrigger.config({
      ignoreMobileResize: true,
    });

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reduceMotion) return;

    let ctx: gsap.Context | undefined;

    // Delay global animations until mobile pinned SelectedWorks is ready
    const initTimer = window.setTimeout(() => {
      ctx = gsap.context(() => {
        gsap.defaults({
          ease: "power2.out",
        });

        // Navbar
        gsap.fromTo(
          ".navbar-anim",
          { y: -14, autoAlpha: 0 },
          { y: 0, autoAlpha: 1, duration: 0.6 }
        );

        // Hero content
        gsap.fromTo(
          ".hero-content > *",
          { y: 22, autoAlpha: 0 },
          {
            y: 0,
            autoAlpha: 1,
            duration: 0.7,
            stagger: 0.08,
            delay: 0.15,
          }
        );

        // Hero background
        gsap.to(".hero-bg", {
          yPercent: 5,
          scale: 1.03,
          ease: "none",
          scrollTrigger: {
            trigger: ".hero-section",
            start: "top top",
            end: "bottom top",
            scrub: 0.8,
            invalidateOnRefresh: true,
          },
        });

        // Fade-up sections
        gsap.utils.toArray<HTMLElement>(".gsap-fade-up").forEach((el) => {
          gsap.fromTo(
            el,
            {
              y: 28,
              autoAlpha: 0,
            },
            {
              y: 0,
              autoAlpha: 1,
              duration: 0.7,
              scrollTrigger: {
                trigger: el,
                start: "top 90%",
                end: "bottom 20%",
                toggleActions: "play none none none",
                once: true,
                invalidateOnRefresh: true,
              },
            }
          );
        });

        // Stagger cards
        gsap.utils.toArray<HTMLElement>(".gsap-stagger").forEach((group) => {
          const cards = group.querySelectorAll(".gsap-card");

          gsap.fromTo(
            cards,
            {
              y: 26,
              autoAlpha: 0,
            },
            {
              y: 0,
              autoAlpha: 1,
              duration: 0.6,
              stagger: 0.08,
              scrollTrigger: {
                trigger: group,
                start: "top 88%",
                toggleActions: "play none none none",
                once: true,
                invalidateOnRefresh: true,
              },
            }
          );
        });

        ScrollTrigger.refresh();
      }, document.body);

      // Extra refresh for mobile layout / images
      requestAnimationFrame(() => {
        ScrollTrigger.refresh();
      });

      window.setTimeout(() => {
        ScrollTrigger.refresh();
      }, 600);
    }, 700);

    const refreshOnLoad = () => ScrollTrigger.refresh();
    window.addEventListener("load", refreshOnLoad);

    return () => {
      window.clearTimeout(initTimer);
      window.removeEventListener("load", refreshOnLoad);
      ctx?.revert();
    };
  }, []);

  return null;
}