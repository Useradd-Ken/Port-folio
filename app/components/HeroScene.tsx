"use client";

import { useState } from "react";
import ModelViewer, { type ViewKey } from "./ModalViewer";
import Home from "./home";
import { About } from "./about";
import Nav from "./nav";

export default function HeroScene() {
  const [activeView, setActiveView] = useState<ViewKey>("Home");
  const [typingKey, setTypingKey] = useState(0);

  const handleViewChange = (view: ViewKey) => {
    setActiveView(view);
    if (view === "Home") {
      setTypingKey((key) => key + 1);
    }
  };

  const modelShift =
    activeView === "About"
      ? "md:-translate-x-[6%] md:scale-[0.97]"
      : activeView === "Nav"
        ? "md:translate-x-[6%] md:scale-[0.97]"
        : "";

  return (
    <div className="relative h-screen w-full overflow-hidden">
      <div
        className={`absolute inset-0 transition-transform duration-700 ease-out ${modelShift}`}
      >
          
        <ModelViewer activeView={activeView} onViewChange={handleViewChange} />
      </div>

      <Nav activeView={activeView} />

      <div
        aria-hidden={activeView !== "Home"}
        className={`absolute inset-0 z-10 transition-all duration-700 ease-out ${
          activeView === "Home"
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none translate-y-6 opacity-0"
        }`}
      >
        <Home key={typingKey} />
      </div>

      <div
        aria-hidden={activeView !== "About"}
        className={`absolute z-10 overflow-y-auto transition-all duration-700 ease-out
          inset-x-0 bottom-24 top-auto max-h-[45vh] px-4
          bg-white/5 backdrop-blur-md
          md:inset-y-0 md:left-[52%] md:right-0 md:top-0 md:flex md:max-h-none md:items-center md:px-8 md:pb-0
          md:bg-white/10 md:backdrop-blur-xl 
          ${
            activeView === "About"
              ? "pointer-events-auto translate-y-0 opacity-100 md:translate-x-0"
              : "pointer-events-none translate-y-8 opacity-0 md:translate-x-full md:translate-y-0"
          }`}
      >
        <div className="[&_section]:py-6 [&_section]:md:py-10">
          <About />
        </div>
      </div>
    </div>
  );
}
