import Image from "next/image";
import React from "react";
import samplePic from "../../public/sample.png";
import { TOKEN, DATABASE_ID } from "../../config";

const Portfolio = ({ projects }) => {
  // console.log(projects);
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            Portfolio : {projects.results.length}
          </h1>
        </div>
        <div className="container px-5 py-5 mx-auto">
          <div className="flex flex-wrap -m-4">
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="btn-project">
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
              <div className="btn-project">
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
              <div className="btn-project">
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
              <div className="btn-project">
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

// SSG
export async function getStaticProps() {
  const options = {
    method: "POST",
    headers: {
      accept: "application/json",
      "Notion-Version": "2022-06-28",
      "content-type": "application/json",
      Authorization: `Bearer ${TOKEN}`,
    },
    body: JSON.stringify({ page_size: 100 }),
  };

  const res = await fetch(
    `https://api.notion.com/v1/databases/${DATABASE_ID}/query`,
    options
  );

  const projects = await res.json();
  // console.log(projects.results);

  return {
    props: { projects },
  };
}
