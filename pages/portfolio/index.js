import Image from "next/image";
import React from "react";
import samplePic from "../../public/sample.png";

const Portfolio = () => {
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            Portfolio
          </h1>
        </div>
        <div className="container px-5 py-5 mx-auto">
          <div className="flex flex-wrap -m-4">
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-gray-100 p-6 rounded-lg">
                <a href="https://devparkse.github.io/hansalim/" target="_blank">
                  <Image
                    className="h-40 rounded w-full object-cover object-center mb-6"
                    src={samplePic}
                    layout="responsive"
                    alt="content"
                  />
                </a>
                <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
                  SUBTITLE
                </h3>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                  Chichen Itza
                </h2>
                <p className="leading-relaxed text-base">
                  Fingerstache flexitarian street art 8-bit waistcoat.
                  Distillery hexagon disrupt edison bulbche.
                </p>
              </div>
            </div>
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-gray-100 p-6 rounded-lg">
                <a href="https://devparkse.github.io/hansalim/" target="_blank">
                  <Image
                    className="h-40 rounded w-full object-cover object-center mb-6"
                    src={samplePic}
                    layout="responsive"
                    alt="content"
                  />
                </a>
                <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
                  SUBTITLE
                </h3>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                  Colosseum Roma
                </h2>
                <p className="leading-relaxed text-base">
                  Fingerstache flexitarian street art 8-bit waistcoat.
                  Distillery hexagon disrupt edison bulbche.
                </p>
              </div>
            </div>
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-gray-100 p-6 rounded-lg">
                <a href="https://devparkse.github.io/hansalim/" target="_blank">
                  <Image
                    className="h-40 rounded w-full object-cover object-center mb-6"
                    src={samplePic}
                    layout="responsive"
                    alt="content"
                  />
                </a>
                <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
                  SUBTITLE
                </h3>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                  Great Pyramid of Giza
                </h2>
                <p className="leading-relaxed text-base">
                  Fingerstache flexitarian street art 8-bit waistcoat.
                  Distillery hexagon disrupt edison bulbche.
                </p>
              </div>
            </div>
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-gray-100 p-6 rounded-lg">
                <a href="https://devparkse.github.io/hansalim/" target="_blank">
                  <Image
                    className="h-40 rounded w-full object-cover object-center mb-6"
                    src={samplePic}
                    layout="responsive"
                    alt="content"
                  />
                </a>
                <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
                  SUBTITLE
                </h3>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                  San Francisco
                </h2>
                <p className="leading-relaxed text-base">
                  Fingerstache flexitarian street art 8-bit waistcoat.
                  Distillery hexagon disrupt edison bulbche.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;
