"use client";

import { useState } from "react";
import TechCarousel from "./tools";

const projects = [
  {
    id: 1,
    title: "BIOCELLA",
    description:
      "Inventory and Information Management System for bacterial collections.",
    image: "/asd.png",
    size: "large",
  },
  {
    id: 2,
    title: "DVWA Lab",
    description: "Web Security and SQL Injection practice environment.",
    image: "/asd.png",
    size: "small",
  },
  {
    id: 3,
    title: "Portfolio",
    description: "Modern interactive portfolio built with Three.js.",
    image: "/asd.png",
    size: "small",
  },
  {
    id: 4,
    title: "PowerQuery",
    description: "Dashboards and data visualizations.",
    image: "/asd.png",
    size: "large",
  },
  {
    id: 5,
    title: "VLOOKUP",
    description: "Dashboards and data visualizations.",
    image: "/asd.png",
    size: "wide",
  },
  {
    id: 6,
    title: "Dashboards",
    description: "Dashboards and data visualizations.",
    image: "/asd.png",
    size: "wide",
  },
  
];

export default function Projects() {
    const [selected, setSelected] = useState<any>(null);
  
    return (
      <>
        <section id="Projects" className="mx-auto max-w-7xl px-6 py-24">
          <h2 className="mb-12 text-5xl font-bold text-gray-700">
            Featured Projects
          </h2>
  
          <div className="grid auto-rows-[220px] grid-cols-1 gap-4 md:grid-cols-4">
            {projects.map((project) => (
              <button
                key={project.id}
                onClick={() => setSelected(project)}
                className={`
                  group relative overflow-hidden rounded-3xl
                  border border-white/10 bg-white/5
                  transition-all duration-500
                  hover:scale-[1.02]
                  hover:border-white/20 cursor-pointer
  
                  ${
                    project.size === "large"
                      ? "md:col-span-2 md:row-span-2"
                      : ""
                  }
  
                  ${
                    project.size === "wide"
                      ? "md:col-span-2"
                      : ""
                  }
                `}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />
  
                <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />
  
                <div className="absolute bottom-0 p-6 text-left">
                  <h3 className="text-2xl font-bold text-white">
                    {project.title}
                  </h3>
  
                  <p className="mt-2 text-sm text-gray-300">
                    {project.description}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </section>
  
        {selected && (
          <Modal
            project={selected}
            onClose={() => setSelected(null)}
          />
        )}
        <TechCarousel/>
      </>
    );
  }
  function Modal({
    project,
    onClose,
  }: {
    project: any;
    onClose: () => void;
  }) {
    return (
      <div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-md"
        onClick={onClose}
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className="w-[90%] max-w-3xl rounded-3xl border border-white/10 bg-[#111] p-8"
        >
          <img
            src={project.image}
            alt={project.title}
            className="mb-6 h-64 w-full rounded-2xl object-cover"
          />
  
          <h2 className="text-4xl font-bold text-white">
            {project.title}
          </h2>
  
          <p className="mt-4 text-gray-400">
            {project.description}
          </p>
  
          <div className="mt-8 flex gap-3">
            <button className="rounded-xl bg-white px-4 py-2 text-black">
              Live Demo
            </button>
  
            <button className="rounded-xl border border-white/20 px-4 py-2 text-white">
              GitHub
            </button>
          </div>
        </div>
      </div>
    );
  }