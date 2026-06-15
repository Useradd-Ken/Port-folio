"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const projects = [
  {
    title: "BIOCELLA",
    desc: "Web-based bacterial collection inventory system.",
    image: "dummy1.jpg",
  },
  
  {
    title: "Portfolio Website",
    desc: "Modern animated developer portfolio.",
    image: "dummy2.jpg",
  },
  {
    title: "Dummy1",
    desc: "Point-of-sale solution with inventory tracking.",
    image: "dummy3.jpg",
  },
  {
    title: "Dummy2",
    desc: "Point-of-sale solution with inventory tracking.",
    image: "dummy4.jpg",
  },
  {
    title: "DVWA Security Lab",
    desc: "SQL Injection and Web Security Practice.",
    image: "asd.png",
  },
];

export default function FeaturedProjects() {
  const [active, setActive] = useState(0);

  const next = () => {
    setActive((prev) => (prev + 1) % projects.length);
  };

  const prev = () => {
    setActive((prev) =>
      prev === 0 ? projects.length - 1 : prev - 1
    );
  };

  return (
    <section id="Projects" className="w-full py-20" >
      <div className="max-w-7xl mx-auto px-6">
    <div className="mx-auto mb-16 max-w-4xl text-center md:mb-20">
      <h2  className="cert-heading mt-4 text-4xl font-bold text-gray-800 md:text-5xl">
        Featured Projects</h2>
    </div>

        <div className="flex justify-end gap-4 mb-6">
      
          <button
            onClick={prev}
            className="text-2xl hover:scale-110 transition"
          >
            ←
          </button>

          <button
            onClick={next}
            className="text-2xl hover:scale-110 transition"
          >
            →
          </button>
        </div>

        <div className="flex gap-4 overflow-hidden">

          {projects.map((project, index) => {

            const offset =
              (index - active + projects.length) %
              projects.length;

            const isActive = offset === 0;

            return (
              <motion.div
                key={project.title}
                layout
                transition={{
                  type: "spring",
                  stiffness: 120,
                  damping: 18,
                }}
                onClick={() => setActive(index)}
                className={`relative cursor-pointer overflow-hidden rounded-3xl
                ${
                  isActive
                    ? "w-[70%] h-[500px]"
                    : "w-[8%] h-[500px]"
                }`}
              >
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="absolute inset-0 h-full w-full object-cover"
                  layout
                />

                <div className="absolute inset-0 bg-black/20" />

                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      initial={{
                        opacity: 0,
                        y: 20,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
                      exit={{
                        opacity: 0,
                      }}
                      className="absolute bottom-8 left-8 text-white"
                    >
                      <h2 className="text-4xl font-bold">
                        {project.title}
                      </h2>

                      <p className="mt-3 max-w-lg text-white/80">
                        {project.desc}
                      </p>

                      <button className="mt-6 px-5 py-3 rounded-xl border border-white/30 backdrop-blur-md cursor-pointer">
                        View Project →
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}