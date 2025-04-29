import { RevealOnScroll } from "../components/RevealOnScroll";
import { FaLinkedinIn } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import { socialMediaLinks } from "../data/data";

export const Contact = () => {
  const linkedinURL = socialMediaLinks[0].linkURL;
  const githubURL = socialMediaLinks[1].linkURL;

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="px-4 w-full min-w-[300px] md:w-[500px] sm:w-2/3 p-6 flex flex-col items-center space-y-3">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            {" "}
            Get In Touch
          </h2>

          <img src="/profile.png" width={250} height={250} alt="my-profile" />

          <div className="my-3 space-x-3">
            <a href={linkedinURL}>
              <button className="group p-3 rounded-full text-black hover:text-white bg-[#00bcd4] cursor-pointer hover:shadow-[1px_1px_18px_1px_#00bcd4]">
                <FaLinkedinIn size={20} />
              </button>
            </a>

            <a href={githubURL}>
              <button className="group p-3 rounded-full text-black  hover:text-white bg-[#00bcd4] cursor-pointer hover:shadow-[1px_1px_18px_1px_#00bcd4] ">
                <IoLogoGithub size={20} />
              </button>
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export const SocialLinks = () => {
  return (
    <>
      <div className="my-5">
        <ul className="w-1/2 py-1 flex items-start justify-start gap-6 text-xl">
          <span>
            <a target="_blank">
              <FaLinkedinIn />
            </a>
          </span>

          <span>
            <a target="_blank">
              <IoLogoGithub />
            </a>
          </span>
        </ul>
      </div>
    </>
  );
};
