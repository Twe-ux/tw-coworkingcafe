import { projectsTwoData } from "@/db/projectsTwoData";
import React from "react";
import ProjectCard from "./projectCard";
import SlideUp from "@/utils/animations/slideUp";

const ProjectsThree: React.FC = () => {
  return (
    <section className="all__project py__130">
      <div className="container">
        <div className="flex flex-wrap -mx-4">
          <div className="flex flex-wrap -mx-4">
            {projectsTwoData.map(({ categories, id, imgSrc, title }) => (
              <SlideUp
                key={id}
                className={`xl:w-4/12 md:w-6/12 px-4 mb-5 xl:mb-0`}
                delay={id}
              >
                <ProjectCard
                  categories={categories}
                  imgSrc={imgSrc}
                  title={title}
                />
              </SlideUp>
            ))}
          </div>
        </div>
        <SlideUp className="custom__pagination">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full px-4">
              <ul className="flex justify-center">
                <li>
                  <i className="fa-solid fa-arrow-left" />
                </li>
                <li>01</li>
                <li>02</li>
                <li>03</li>
                <li>
                  <i className="fa-solid fa-arrow-right" />
                </li>
              </ul>
            </div>
          </div>
        </SlideUp>
      </div>
    </section>
  );
};

export default ProjectsThree;
