import { RevealOnScroll } from "../components/RevealOnScroll";

export const Home = () => {
  const myName = "Hi, I'm Yokesh B";

  const mySummary =
    "I'm a full-stack developer focused on building modern, scalable web applications. I love creating clean code and intuitive user experiences. Skilled in the MERN stack, I turn ideas into fast, functional products.";
  // "I’m a full-stack developer who loves crafting clean, scalable web  applications. My goal is to build solutions that offer both exceptional performance and a delightful user experience.";

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
    >
      <RevealOnScroll>
        <div className="text-center z-10 px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent leading-right">
            {myName}
          </h1>

          <p className="tex-gray-400 text-lg mb-8 max-w-lg mx-auto">
            {mySummary}
          </p>

          <div className="flex justify-center space-x-4">
            <a
              href="#projects"
              className="bg-blue-800 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)]"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200 
             hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-blue-500/10"
            >
              Contact Me
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
