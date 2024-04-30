import { hero } from "../images";

export default function About() {
  return (
    <>
      <div className="mx-auto flex px-5 py-5 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-black">
            Hi, I'm Mohamad Shoaib.
            <br className="hidden lg:inline-block" />I love to build amazing web
            apps.
          </h1>
          <p className="mb-8 leading-relaxed">
            A passionate Web Developer 🚀 having experience of building Web
            Applications with Javascript and some other cool libraries and
            frameworks.
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg"
            >
              Work With Me
            </a>
            <a
              download="Mohamad_Shoaib.pdf"
              href="/files/Mohamad_Shoaib.pdf"
              aria-label="Download Resume"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg"
            >
              Download CV{" "}
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src={`${hero}`}
          />
        </div>
      </div>
    </>
  );
}
