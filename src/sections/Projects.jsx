import { RevealOnScroll } from "../components/RevealOnScroll";
import { FaExternalLinkAlt } from "react-icons/fa";
import { projects } from "../data/data";

export const Projects = () => {
  const githubLink = "https://github.com/yokeshbaskaran";

  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Featured Projects
          </h2>

          {/* Projects Lists  */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Single Project */}

            {projects.map((project, idx) => (
              <div
                key={idx}
                className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
              >
                <div className="flex items-center gap-2 justify-start">
                  <h3 className="text-xl font-bold mb-2">
                    {project.projectName}
                  </h3>

                  <a href={project.livePage} target="_blank">
                    <FaExternalLinkAlt
                      color="#00b5d2"
                      size={16}
                      className="-my-2"
                    />
                  </a>
                </div>

                <p className="text-gray-400 mb-4">{project.shortSummary}</p>

                {/* techStacks  */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStacks.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex justify-between items-center">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    className="text-blue-400 hover:text-blue-300 transition-colors my-2 p-2 rounded-md"
                  >
                    View Project →
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-15 text-center">
            <a
              href={githubLink}
              target="_blank"
              className="border border-blue-500/50 text-cyan-700 hover:text-white hover:border-white py-3 px-6 rounded font-medium transition-all duration-200 
             hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-blue-500/10"
            >
              More Projects
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
