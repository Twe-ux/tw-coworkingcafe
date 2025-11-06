import React from "react";
import Link from "next/link";
import { servicesTwoData } from "@/db/servicesTwoData";
import ServiceCard from "./serviceCard";
import SlideDown from "@/utils/animations/slideDown";
import SlideUp from "@/utils/animations/slideUp";
import VideoTestimonial from "../testimonial/videoTestimonial";

const ServicesTwo: React.FC = () => {
  return (
    <section className="services services__2 py__130">
      <div className="container relative">
        <SlideDown className="lg:flex justify-between items-center services__title services__2_title">
          <h1 className="title text-white">
            Our service solve your any business problem
          </h1>
          <p className="mt-4 lg:mt-0">
            In order to scale new customer acquisition and retention for
            e-commerce brands, we work across the entire customer journey. Our
            team has a successful.
          </p>
        </SlideDown>

        <div className="services__wapper services__2_wapper">
          <div className="flex flex-wrap -mx-4">
            {servicesTwoData
              .slice(0, 3)
              .map(({ description, id, imgSrc, title }) => (
                <SlideUp
                  key={id}
                  className="xl:w-4/12 md:w-6/12 px-4 mb-5 xl:mb-0"
                  delay={id}
                >
                  <ServiceCard
                    description={description}
                    title={title}
                    imgSrc={imgSrc}
                    className={id === 2 ? "two" : id === 3 ? "three" : ""}
                  />
                </SlideUp>
              ))}
          </div>
          <div className="flex flex-wrap -mx-4 services__2_row">
            <div className="w-full px-4">
              <p>
                Do you want to see our all services? Just
                <Link href="/services"> click here</Link>
              </p>
            </div>
          </div>
          <VideoTestimonial />
        </div>
      </div>
    </section>
  );
};

export default ServicesTwo;
