import React from "react";
import { TOKEN, DATABASE_ID } from "../../config";
import ProjectItem from "../../components/ProjectItem";

const Portfolio = ({ projects }) => {
  // console.log(projects);

  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
          Portfolio : {projects.results.length}
        </h1>
      </div>
      <div className="container px-5 py-5 mx-auto">
        <div className="flex flex-wrap -m-4">
          {projects.results.map((item) => (
            <ProjectItem key={item.id} data={item} />
          ))}
        </div>
      </div>
    </section>
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
    body: JSON.stringify({
      sorts: [
        {
          property: "Name",
          direction: "ascending",
        },
      ],
      page_size: 100,
    }),
  };

  const res = await fetch(
    `https://api.notion.com/v1/databases/${DATABASE_ID}/query`,
    options
  );

  const projects = await res.json();
  // console.log(projects.results);

  return {
    props: { projects },
    revalidate: 10,
  };
}
