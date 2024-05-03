import { TrophyIcon } from "../icons";
import { useState } from "react";
import { certificationsData } from "../data";

const Certifications = () => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [fullscreenImage, setFullscreenImage] = useState(null);

  const openFullscreen = (image) => {
    setIsFullscreen(true);
    setFullscreenImage(image);
  };

  const closeFullscreen = () => {
    setIsFullscreen(false);
    setFullscreenImage(null);
  };

  return (
    <>
      <div className="px-5 py-5 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-10">
          <TrophyIcon className="mx-auto inline-block w-10 mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-black">
            Certifications
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Here are some of the course work I did.
          </p>
        </div>
        <div className="flex flex-wrap m-4">
          {certificationsData.map((certificate) => (
            <div key={certificate.name} className="p-4 md:w-1/2 w-full">
              <div className="h-full bg-gray-100 bg-opacity-40 p-8 rounded">
                <div className="inline-flex flex-col items-center">
                  <img
                    alt="certificate"
                    src={certificate.image}
                    className="w-full h-auto max-w-xl mb-5 shadow-xl rounded-lg mx-auto cursor-pointer"
                    onClick={() => openFullscreen(certificate.image)}
                  />
                  <span className="flex-grow flex flex-col pl-4">
                    <span className="title-font font-medium text-black">
                      {certificate.name}
                    </span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {isFullscreen && (
          <div
            className="fixed z-10 top-0 left-0 w-full h-full bg-black bg-opacity-80 flex justify-center items-center"
            onClick={closeFullscreen}
          >
            <img
              className="max-w-full max-h-full"
              src={fullscreenImage}
              alt="fullscreen"
            />
          </div>
        )}
      </div>
    </>
  );
};

export default Certifications;
