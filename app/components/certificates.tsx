"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { certificates } from "./Details";

export default function Certificates() {
  const sectionRef = useRef<HTMLElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const section = sectionRef.current;
    const timeline = timelineRef.current;
    const line = lineRef.current;

    if (!section || !timeline || !line) return;

    const items = gsap.utils.toArray<HTMLElement>(".cert-item", timeline);

    const ctx = gsap.context(() => {
      gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      })
        .from(".cert-heading", {
          y: 40,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
        })
        .from(
          ".cert-subheading",
          { y: 24, opacity: 0, duration: 0.7, ease: "power3.out" },
          "-=0.45",
        );

      gsap.fromTo(
        line,
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: timeline,
            start: "top 70%",
            end: "bottom 60%",
            scrub: 1,
          },
        },
      );

      items.forEach((item, index) => {
        const dot = item.querySelector(".cert-dot");
        const card = item.querySelector(".cert-card");
        const indexLabel = item.querySelector(".cert-index");

        const itemTl = gsap.timeline({
          scrollTrigger: {
            trigger: item,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        });

        itemTl
          .from(dot, {
            scale: 0,
            opacity: 0,
            duration: 0.5,
            ease: "back.out(1.7)",
          })
          .from(
            indexLabel,
            { x: -16, opacity: 0, duration: 0.5, ease: "power3.out" },
            "-=0.2",
          )
          .from(
            card,
            {
              x: index % 2 === 0 ? -48 : 48,
              y: 32,
              opacity: 0,
              duration: 0.85,
              ease: "power3.out",
            },
            "-=0.35",
          );
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="Certifications"
      ref={sectionRef}
      className="relative bg-transparent px-6 py-24 md:py-32"
    >
      <div className="mx-auto mb-16 max-w-4xl text-center md:mb-20">
        <span className="cert-subheading inline-block rounded-full border border-gray-300/40 px-3 py-1 text-sm text-gray-600">
          Credentials
        </span>
        <h2 className="cert-heading mt-4 text-4xl font-bold text-gray-800 md:text-5xl">
          Certifications
        </h2>
      </div>

      <div ref={timelineRef} className="relative mx-auto max-w-4xl">
        <div className="absolute bottom-0 left-4 top-0 w-px origin-top bg-gray-200 md:left-8">
          <div
            ref={lineRef}
            className="absolute inset-0 origin-top scale-y-0 bg-gray-700"
          />
        </div>

        <div className="flex flex-col gap-12 md:gap-16">
          {certificates.map((cert, index) => (
            <div
              key={cert.id}
              className="cert-item relative pl-12 md:pl-20"
            >
              <div className="cert-dot absolute left-[11px] top-6 z-10 h-4 w-4 rounded-full border-[3px] border-gray-700 bg-white md:left-[27px]" />

              <span className="cert-index mb-3 block text-xs font-semibold tracking-[0.2em] text-gray-500 uppercase">
                {String(index + 1).padStart(2, "0")}
              </span>

              <article className="cert-card group overflow-hidden rounded-3xl border border-white/20 bg-white/10 backdrop-blur-xl">
                <div className="grid md:grid-cols-[220px_1fr]">
                  <div className="relative h-48 overflow-hidden md:h-full md:min-h-[220px]">
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent md:bg-gradient-to-r" />
                  </div>

                  <div className="p-6 md:p-8">
                    <span className="inline-block rounded-full border border-gray-300/40 px-3 py-1 text-xs font-medium text-gray-600">
                      {cert.organizer}
                    </span>
                    <h3 className="mt-4 text-lg font-bold leading-snug text-gray-800 md:text-xl">
                      {cert.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-gray-600 md:text-base">
                      {cert.details}
                    </p>
                  </div>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
