import { useEffect, useState } from "react";
import sanityClient from "../client";

const Portfolio = () => {
  const [projectData, setProjectData] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "project"]{
      title,
      description,
      projectType,
      mainImage{
        asset->{
          _id,
          url
        },
        alt
      },
      hostedSite,
      repo,
      tags
    }`
      )
      .then((data) => setProjectData(data))
      .catch(console.error);
  }, []);

  return (
    <main className="bg-indigo-100 min-h-screen p-12">
      <section className="container mx-auto">
        <h1 className="text-5xl flex justify-center font-bold font-font1 text-blue-800">
          My Projects
        </h1>
        <h2 className="text-lg text-gray-600 flex justify-center mb-12">
          Welcome to my projects page!
        </h2>
        <section className="grid md:grid-cols-2 ">
          { projectData && projectData.map((project) =>(
          <article className="grid grid-cols-1 rounded-lg shadow-xl bg-white mb-5 mr-5" key={project.title}>
            <div className="relative z-10 col-start-1 row-start-1 px-4 pt-40 pb-3 bg-gradient-to-t from-black">
              <h2 className="text-xl font-semibold text-white sm:text-2xl hover:text-green-800">
                <a
                  href={project.hostedSite}
                  alt={project.title}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {project.title}
                </a>
              </h2>
            </div>
            <div className="col-start-1 row-start-2 px-4">
              {/* project content */}
              <div className="text-gray-500 text-xs space-x-4">
                <span>
                  <strong className="font-bold">Type</strong>: {project.projectType}
                </span>
                <p className="my-6 text-lg text-gray-700 leading-relaxed">
                  {project.description}
                </p>
                <a
                  href={project.hostedSite}
                  rel="noopener noreferrer"
                  target="_blank"
                  className="text-green-600 font-bold hover:underline hover:text-green-300"
                >
                  View The Project {" "}
                  <span role="img" aria-label="right arrow">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-green-600 hover:text-green-300"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                </a>
                <a
                  href={project.repo}
                  rel="noopener noreferrer"
                  target="_blank"
                  className="text-green-600 font-bold hover:underline hover:text-green-300"
                >
                  View The Project Repo {" "}
                  <span role="img" aria-label="right arrow">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-green-600 hover:text-green-300"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                </a>
              </div>
            </div>
            <div className="col-start-1 row-start-1 flex">
              <div className="w-full grid grid-cols-3 grid-rows-2 gap-2">
                <div className="relative col-span-3 row-span-2">
                  <img
                    src={project.mainImage.asset.url}
                    alt={project.mainImage.alt}
                    className="absolute inset-0 w-full h-full object-cover bg-gray-100"
                  />
                </div>
              </div>
            </div>
          </article>
         ))}
        </section>
      </section>
    </main>
  );
};

export default Portfolio;
