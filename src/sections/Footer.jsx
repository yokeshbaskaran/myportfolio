import { FaArrowUpLong } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      {/* <div className="mx-5 pt-3 pb-5 border-t border-gray-700 text-center italic">
        Made with ❤️ by
        <span className="px-2 font-bold not-italic">Yokesh B </span>
      </div> */}

      <footer class="w-full border-t border-gray-700 flex items-center px-6 py-3">
        <p className="self-center italic absolute left-1/2 transform -translate-x-1/2">
          Made with ❤️ by
          <span className="px-2 font-bold not-italic">Yokesh B </span>
        </p>

        <a
          href="#home"
          class="group ml-auto relative inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#00bcd4] text-black hover:text-white transition duration-300"
        >
          <FaArrowUpLong size={20} />
        </a>
      </footer>
    </>
  );
};

export default Footer;
