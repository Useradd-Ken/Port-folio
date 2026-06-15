// components/home.tsx
"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const fullName = "Hi, I'm Ken Rod";
  const subtitle =
    "I enjoy building real-time solutions for real-world problems.";

  const [displayedName, setDisplayedName] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const [nameDone, setNameDone] = useState(false);

  const [displayedSubtitle, setDisplayedSubtitle] = useState("");
  const [subtitleDone, setSubtitleDone] = useState(false);

  // Type name
  useEffect(() => {
    if (!nameDone) {
      if (displayedName.length < fullName.length) {
        const timeout = setTimeout(() => {
          setDisplayedName(fullName.slice(0, displayedName.length + 1));
        }, 100);
        return () => clearTimeout(timeout);
      } else {
        setNameDone(true);
      }
    }
  }, [displayedName, nameDone]);

  // Type subtitle after name
  useEffect(() => {
    if (!nameDone || subtitleDone) return;

    if (displayedSubtitle.length < subtitle.length) {
      const timeout = setTimeout(() => {
        setDisplayedSubtitle(
          subtitle.slice(0, displayedSubtitle.length + 1)
        );
      }, 60);
      return () => clearTimeout(timeout);
    } else {
      setSubtitleDone(true);
    }
  }, [displayedSubtitle, nameDone, subtitleDone]);

  // Cursor blinking
  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 530);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className=" flex min-h-screen flex-col items-center justify-center px-6 text-center">
      
      <h1 className="text-4xl font-bold bg-gradient-to-r from-gray-900 via-gray-700 to-gray-500 bg-clip-text text-transparent md:text-6xl lg:text-7xl">
        {displayedName}
        {!nameDone && (
          <span className={showCursor ? "opacity-100" : "opacity-0"}>
            |
          </span>
        )}
      </h1>

      <p className="mx-auto mt-4 max-w-2xl text-sm text-black-300 md:text-lg lg:text-xl">
        {displayedSubtitle}
        {nameDone && !subtitleDone && (
          <span className={showCursor ? "opacity-100" : "opacity-0"}>
            |
          </span>
        )}
      </p>
    </div>
  );
}