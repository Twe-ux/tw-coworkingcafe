import React from "react";
import ServiceCard from "./serviceCard";
import { servicesTwoData } from "@/db/servicesTwoData";
import SlideUp from "@/utils/animations/slideUp";

const ServiceThree: React.FC = () => {
  return (
    <section className="services all__services py__130">
      <div className="container">
        <div className="flex flex-wrap -mx-4">
          {servicesTwoData.map(({ description, id, imgSrc, title }) => (
            <SlideUp key={id} className="xl:w-4/12 md:w-6/12 px-4 mb-5" delay={id}>
              <ServiceCard
                description={description}
                title={title}
                imgSrc={imgSrc}
              />
            </SlideUp>
          ))}
        </div>

        <SlideUp className="custom__pagination">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full px-4">
              <ul className="flex justify-center">
                <li>
                  <i className="fa-solid fa-arrow-left"></i>
                </li>
                <li>01</li>
                <li>02</li>
                <li>03</li>
                <li>
                  <i className="fa-solid fa-arrow-right"></i>
                </li>
              </ul>
            </div>
          </div>
        </SlideUp>
      </div>
    </section>
  );
};

export default ServiceThree;
