export default function About() {
    return (
      <section
        id="MoreAbout"
        className="mx-auto max-w-5xl px-6 py-24 text-gray-800"
      >
        <div className="space-y-10">
          <div>
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-gray-500">
              About Me
            </p>
  
            <h2 className="max-w-3xl text-4xl font-bold leading-tight md:text-5xl">
              Building technology that is functional, reliable, and designed to
              create meaningful impact.
            </h2>
          </div>
  
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <p className="text-lg leading-relaxed text-gray-700">
                I am an Information Technology student with a strong interest in
                software development, quality assurance, and data-driven
                technologies. I enjoy transforming ideas into practical digital
                solutions that solve real-world problems and create meaningful
                experiences for users.
              </p>
            </div>
  
            <div>
              <p className="text-lg leading-relaxed text-gray-700">
                My passion for technology extends beyond writing code. I am
                equally interested in understanding how systems are designed,
                tested, optimized, and maintained to ensure reliability,
                scalability, and long-term success.
              </p>
            </div>
          </div>
  
          <div className="border-l-2 border-gray-300 pl-6">
            <p className="text-lg leading-relaxed text-gray-700">
              Throughout my academic journey, I have worked on projects involving
              web development, information systems, database management, UI/UX
              design, software documentation, and software testing. These
              experiences have strengthened my ability to adapt to new
              technologies, collaborate effectively within teams, and approach
              challenges with a solution-oriented mindset.
            </p>
          </div>
  
          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-2xl border border-gray-200 p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <h3 className="mb-3 font-semibold">Development</h3>
              <p className="text-gray-600">
                Creating responsive web applications and scalable systems using
                modern technologies and best practices.
              </p>
            </div>
  
            <div className="rounded-2xl border border-gray-200 p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <h3 className="mb-3 font-semibold">Quality Assurance</h3>
              <p className="text-gray-600">
                Ensuring software reliability through testing, validation, and
                continuous improvement processes.
              </p>
            </div>
  
            <div className="rounded-2xl border border-gray-200 p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <h3 className="mb-3 font-semibold">Data & Analytics</h3>
              <p className="text-gray-600">
                Leveraging data to uncover insights, support decision-making, and
                drive meaningful outcomes.
              </p>
            </div>
          </div>
  
          <div>
            <p className="text-lg leading-relaxed text-gray-700">
              Beyond technical skills, I value communication, collaboration, and
              continuous learning. I believe that great technology is built by
              people who are curious, adaptable, and committed to growth. I am
              constantly exploring new tools, frameworks, and industry practices
              to become a more versatile and effective technology professional.
            </p>
  
            <p className="mt-6 text-lg leading-relaxed text-gray-700">
              Currently, I am seeking opportunities where I can contribute,
              collaborate with experienced professionals, and continue growing as
              a developer while expanding my expertise across software
              development, quality assurance, and data-driven technologies.
            </p>
          </div>
        </div>
      </section>
    );
  }