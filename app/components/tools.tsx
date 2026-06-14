"use client";

import Image from "next/image";

const icons = [
  "/tech/bootstrap.svg",
  "/tech/canva.svg",
  "/tech/csharp.svg",
  "/tech/docs.svg",
  "/tech/excel.svg",
  "/tech/figma.svg",
  "/tech/git.svg",
  "/tech/github.svg",
  "/tech/html.svg",
  "/tech/js.svg",
  "/tech/next.svg",
  "/tech/react.svg",
  "/tech/tailwind.svg",
];

export default function TechCarousel() {
  return (
    <div className="w-full overflow-hidden bg-transparent py-6">
      <div className="relative flex w-max animate-scroll gap-10">
        {/* First set */}
        {icons.map((icon, i) => (
          <div key={i} className="flex items-center justify-center">
            <Image
              src={icon}
              alt="tech icon"
              width={50}
              height={50}
              className="h-10 w-10 object-contain"
            />
          </div>
        ))}

        {/* Duplicate set for seamless loop */}
        {icons.map((icon, i) => (
          <div key={`dup-${i}`} className="flex items-center justify-center">
            <Image
              src={icon}
              alt="tech icon"
              width={50}
              height={50}
              className="h-10 w-10 object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
}