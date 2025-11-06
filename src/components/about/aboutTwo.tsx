import React from "react";
import Partner from "../partner";
import { partnerTwoLogos } from "@/db/partnerOneLogos";
import SlideDown from "@/utils/animations/slideDown";
import SlideUp from "@/utils/animations/slideUp";
import Link from "next/link";

const AboutTwo: React.FC = () => {
  return (
    <section className="about about__2 py__130">
      <div className="container">
        <SlideDown>
          <div className="flex flex-wrap -mx-4 justify-between about__title">
            <div className="lg:w-10/12 px-4">
              <div>
                <h1 className="title about__2_title">
                  Agencies use various analytics tools to track and measure
                  performance of online marketing efforts.
                </h1>
              </div>
            </div>
            <div className="lg:w-2/12 px-4">
              <div
                className="about__title_shap w-full h-full relative"
              >
                <img
                  src="/images/banner/Shape.svg"
                  alt="img"
                  className="w-full"
                />
              </div>
            </div>
          </div>
        </SlideDown>
        <div className="flex flex-wrap -mx-4 justify-between about__wapper about__2_wapper">
          <div className="lg:w-6/12 px-4">
            <SlideUp>
              <div className="about__wapper_center">
                <img src="/images/about/OBJECTS1.png" alt="img" />
              </div>
            </SlideUp>
          </div>
          <div className="lg:w-6/12 px-4">
            <SlideUp delay={2}>
              <div className="about__wapper_left about__2_left">
                <Link
                  href="/about"
                  className="circle circle__black about__2_circle"
                >
                  <img src="/icons/arrow-up-rignt-black.svg" alt="img" />
                  <span>More About Us</span>
                </Link>
                <p className="one">
                  High-quality, relevant content is essential for engaging and
                  retaining online audiences. Digital marketing agencies often
                  create content strategies, produce blog posts, articles,
                  videos
                </p>
                <p>
                  And infographics, &amp; distribute them across different
                  online channel to attract and engage customers.
                </p>
              </div>
            </SlideUp>
          </div>
        </div>
        <Partner data={partnerTwoLogos} className={"bg-white"} />
      </div>
    </section>
  );
};

export default AboutTwo;
