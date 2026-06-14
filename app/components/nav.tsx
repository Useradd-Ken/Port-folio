"use client";

import type { ViewKey } from "./ModalViewer";

type NavProps = {
  activeView: ViewKey;
};

export default function Nav({ activeView }: NavProps) {
  const links = [
    { label: "About Me", href: "#MoreAbout" },
    { label: "Projects", href: "#Projects" },
    { label: "Certifications", href: "#Certifications" },
    { label: "Contacts", href: "#Contacts" },
  ];

  const isVisible = activeView === "Nav";

  return (
    <nav
      aria-hidden={!isVisible}
      className={`absolute inset-y-0 left-0 z-10 flex items-center px-6 transition-all duration-700 ease-out sm:px-10 md:px-14 ${
        isVisible
          ? "pointer-events-auto translate-x-0 opacity-100"
          : "pointer-events-none -translate-x-8 opacity-0"
      }`}
    >
      <div className="flex flex-col">
        <ul className="flex flex-col space-y-4 sm:space-y-5 md:space-y-6">
          {links.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="block cursor-pointer text-base tracking-wide text-gray-800 transition-all duration-300 hover:translate-x-2 hover:text-gray-500 sm:text-lg md:text-xl"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Resume Button */}
        <a
          href="/KenRod_Babatido_Resume.pdf"
          download
          className="mt-8 w-fit rounded-full border border-gray-400 px-5 py-2 text-sm font-medium text-gray-800 transition-all duration-300 hover:bg-gray-900 hover:text-white"
        >
          Download Resume
        </a>
      </div>
    </nav>
  );
}