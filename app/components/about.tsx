"use client";

export function About() {
  return (
    <section
      id="About"
      className="bg-transparent px-6 py-24 text-black"
    >
      <div className="mx-auto max-w-5xl">
        <span className="rounded-full border border-white/20 px-3 py-1 text-sm text-gray-800">
          About Me
        </span>

        <h2 className="mt-6 text-4xl font-bold md:text-5xl text-gray-800">
          Building solutions through technology and continuous learning.
        </h2>

        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-gray-800">
          I enjoy transforming ideas into functional applications, whether it's
          developing responsive web interfaces, analyzing data for meaningful
          insights, or ensuring software quality through testing and validation.
          My goal is to build technology that is efficient, user-friendly, and
          impactful.
        </p>

        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-gray-800">
          Currently, I am seeking opportunities where I can contribute,
          collaborate with experienced professionals, and continue growing as a
          developer while expanding my expertise across software development,
          quality assurance, and data-driven technologies.
        </p>
        <br></br>
        <div className="mt-4">
        <a
          href="#MoreAbout"
          className="mt-8 w-fit rounded-full border border-gray-400 p-2 py-5 text-sm font-medium text-gray-800 transition-all duration-300 hover:bg-gray-900 hover:text-white"
        >
          More about Ken
        </a>
        </div>
      </div>
    </section>
  );
}