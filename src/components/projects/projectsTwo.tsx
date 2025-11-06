import React from "react";
import { projectsTwoData } from "@/db/projectsTwoData";
import ProjectCard from "./projectCard";
import SlideDown from "@/utils/animations/slideDown";
import SlideUp from "@/utils/animations/slideUp";
import Link from "next/link";

const ProjectsTwo: React.FC = () => {
  return (
    <section className="projects__2 py__130">
      <div className="container">
        <SlideDown className="lg:flex justify-between items-center">
          <h1 className="title">
            Digital marketing agencies create &amp; manage the advertising
            campaign across various
          </h1>
          <Link href="/projects" className="circle circle__black mt-4 lg:mt-0">
            <img src="/icons/arrow-up-rignt-black.svg" alt="img" />
            <span>View All Projects</span>
          </Link>
        </SlideDown>

        <div className="projects__2_wapper">
          <div className="flex flex-wrap -mx-4">
            {projectsTwoData
              .slice(0, 3)
              .map(({ categories, id, imgSrc, title }) => (
                <SlideUp
                  key={id}
                  className={`xl:w-4/12 md:w-6/12 px-4 mb-5 ${
                    id === 3 ? "" : "xl:mb-0"
                  }`}
                  delay={id}
                >
                  <ProjectCard
                    categories={categories}
                    imgSrc={imgSrc}
                    title={title}
                    className={id === 2 ? "two" : id === 3 ? "three" : ""}
                  />
                </SlideUp>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsTwo;
