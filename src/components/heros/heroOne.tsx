import SlideUp from "@/utils/animations/slideUp";
import Link from "next/link";
import React from "react";

const HeroOne: React.FC = () => {
  return (
    <section className="banner overflow-hidden bg-[#0f1b19] pt-[107px] pb-[108px]">
      <div className="container relative">
        <div className="flex flex-wrap -mx-4">
          <div className="lg:w-8/12 px-4">
            <div className="banner__content relative z-10">
              <div className="banner__content_title">
                <SlideUp>
                  <h1 className="text-primary text-[100px] xl:text-[80px] lg:text-[60px] sm:text-[50px] leading-[100px] xl:leading-[80px] lg:leading-[60px] sm:leading-[53px] font-semibold">
                    We Are A Creative Digital Agency
                  </h1>
                </SlideUp>
                <SlideUp delay={2}>
                  <p className="max-w-[700px] text-[22px] md:text-lg leading-[32px] md:leading-7 text-pra mt-[73px] xl:mt-[50px] lg:mt-10">
                    High-quality, relevant content is essential for engaging
                    &amp; retaining online audiences.
                  </p>
                </SlideUp>
              </div>
              <SlideUp
                delay={3}
                className="buttons flex sm:flex-row flex-col sm:items-center gap-6 mt-[59px] xl:mt-[50px] lg:mt-10"
              >
                <Link
                  href={"/services"}
                  className="common__btn buttons_file bg-main border-main"
                >
                  <span>View Our Service</span>
                  <i className="fa-solid fa-arrow-right"></i>
                </Link>
                <Link
                  href={"/about"}
                  className="common__btn buttons_outline text-btn mt-4 sm:mt-0"
                >
                  <span>More About Us</span>
                  <i className="fa-solid fa-arrow-right"></i>
                </Link>
              </SlideUp>
              <SlideUp
                delay={4}
                className="banner__content_number flex justify-between max-w-[745px] xl:max-w-full bg-[#e7fece] rounded-[10px] px-[45px] py-[45px] xl:px-10 xl:py-10 lg:px-5 lg:py-5 md:px-[15px] md:py-[15px] mt-[107px] xl:mt-[90px] lg:mt-[70px] md:mt-[50px]"
              >
                <div>
                  <h4 className="text-grayBlack text-[44px] xl:text-[35px] lg:text-[30px] md:text-[25px] sm:text-[22px] font-bold mb-0">
                    45+
                  </h4>
                  <p className="text-gry text-lg mb-0">Years Experience</p>
                </div>
                <div>
                  <h4 className="text-grayBlack text-[44px] xl:text-[35px] lg:text-[30px] md:text-[25px] sm:text-[22px] font-bold mb-0">
                    99%
                  </h4>
                  <p className="text-gry text-lg mb-0">Satisfaction Rate</p>
                </div>
                <div>
                  <h4 className="text-grayBlack text-[44px] xl:text-[35px] lg:text-[30px] md:text-[25px] sm:text-[22px] font-bold mb-0">
                    393k
                  </h4>
                  <p className="text-gry text-lg mb-0">Our Global Clients</p>
                </div>
              </SlideUp>
            </div>
          </div>
          <div className="lg:w-4/12 px-4">
            <div className="banner__right">
              <img
                src="/images/banner/Shape.svg"
                alt="img"
                className="bg__shap"
              />
              <img
                src="/images/banner/Video.svg"
                alt="img"
                className="bg__video"
              />
              <div>
                <img
                  src="/images/banner/Rectangle96.png"
                  alt="img"
                  className="bg__img"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-0 h-full w-full">
          <div className="banner__shap_1 banner__shap" />
          <div className="banner__shap_2 banner__shap" />
          <div className="banner__shap_3 banner__shap" />
          <div className="banner__shap_4 banner__shap" />
        </div>
      </div>
    </section>
  );
};

export default HeroOne;
