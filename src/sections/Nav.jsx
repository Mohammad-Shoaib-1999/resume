// import { ArrowRightIcon } from "@heroicons/react/solid";

export default function Nav() {
  return (
    <header className="bg-gray-200 md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <span className="title-font font-medium text-black mb-4 md:mb-0">
          <a href="#about" className="ml-3 text-xl">
            M.Shoaib
          </a>
        </span>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
          <a href="#projects" className="mr-5 hover:text-blue-600">
            Past Work
          </a>
          <a href="#skills" className="mr-5 hover:text-blue-600">
            Skills
          </a>
          <a href="#testimonials" className="mr-5 hover:text-blue-600">
            Testimonials
          </a>
        </nav>
        <a
          href="#contact"
          className="inline-flex items-center bg-gray-300 border-0 py-1 px-3 focus:outline-none hover:bg-white rounded text-base mt-4 md:mt-0">
          Hire Me
          {/* <ArrowRightIcon className="w-4 h-4 ml-1" /> */}
        </a>
      </div>
    </header>
  );
}