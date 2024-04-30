import { github, linkdin, twitter, whatsapp, zoom } from "../images/icons";
const Footer = () => {
  return (
    // <footer className="bg-white rounded-lg shadow m-4 dark:bg-gray-800">
    <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
      {/* mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 */}
      <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400 ">
        © 2024{" "}
        <a href="#about" className="hover:underline">
          M.Shoaib
        </a>
        . All Rights Reserved.
      </span>
      <ul className="flex flex-wrap items-center   text-sm font-medium text-gray-500 dark:text-gray-400">
        <li className="mr-3">
          <a
            href="https://github.com/Mohammad-Shoaib-1999"
            className="hover:underline me-4 md:me-6 "
          >
            <img
              src={github}
              alt="github"
              width="25"
              height="25"
              className="flex-shrink-0"
            />
          </a>
        </li>
        <li className="mr-3">
          <a
            href="www.linkedin.com/in/mohamad-shoaib

"
            className="hover:underline me-4 md:me-6"
          >
            <img
              src={linkdin}
              alt="linkdin"
              width="25"
              height="25"
              className="flex-shrink-0"
            />
          </a>
        </li>
        <li className="mr-3">
          <a href="#" className="hover:underline me-4 md:me-6">
            <img
              src={zoom}
              alt="zoom"
              width="25"
              height="25"
              className="flex-shrink-0"
            />
          </a>
        </li>
        <li className="mr-3">
          <a href="https://twitter.com/MohamadSho7612" className="hover:underline me-4 md:me-6">
            <img
              src={twitter}
              alt="twitter"
              width="25"
              height="25"
              className="flex-shrink-0"
            />
          </a>
        </li>
        <li className="mr-3">
          <a href="https://api.whatsapp.com/send?phone=9767979313" className="hover:underline me-4 md:me-6">
            <img
              src={whatsapp}
              alt="whatsapp"
              width="25"
              height="25"
              className="flex-shrink-0"
            />
          </a>
        </li>
      </ul>
    </div>
    // </footer>
  );
};

export default Footer;
