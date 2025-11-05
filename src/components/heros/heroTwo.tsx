import SlideUp from "@/utils/animations/slideUp";
import Link from "next/link";
import React from "react";

const HeroTwo: React.FC = () => {
  return (
    <section className="banner2 overflow-hidden">
      <div className="container relative">
        <div className="flex flex-wrap -mx-4">
          <div className="lg:w-7/12 px-4">
            <div className="banner__content">
              <SlideUp className="banner__content_title banner2__title">
                <h1 className="text-secondary text-[100px] xl:text-[80px] lg:text-[60px] sm:text-[50px] leading-[100px] xl:leading-[80px] lg:leading-[60px] sm:leading-[53px] font-semibold mb-0">
                  Digital agency
                </h1>
                <h1 className="text-secondary text-[100px] xl:text-[80px] lg:text-[60px] sm:text-[50px] leading-[100px] xl:leading-[80px] lg:leading-[60px] sm:leading-[53px] font-semibold mb-0">
                  For your global business.
                </h1>
                <p className="max-w-[700px] text-[22px] md:text-lg leading-[32px] md:leading-7 text-secondary mt-[73px] xl:mt-[50px] lg:mt-10">
                  Learn about how them you went down prying the wedding ring off
                  his cold, dead finger. I don't know what you did, Fry, but
                  once again,
                </p>
              </SlideUp>
              <SlideUp className="buttons flex sm:flex-row flex-col sm:items-center gap-6 mt-[59px] xl:mt-[50px] lg:mt-10">
                <Link
                  href={"/services"}
                  className="common__btn buttons_file bg-btn text-secondary border-btn"
                >
                  <span>View Our Service</span>
                  <img src="/icons/arrow-up-rignt-black.svg" alt="img" />
                </Link>
              </SlideUp>
              <SlideUp className="banner__content_number banner2__number flex justify-between">
                <div>
                  <h4 className="text-primary text-[44px] xl:text-[35px] lg:text-[30px] md:text-[25px] sm:text-[22px] font-bold mb-0">
                    45+
                  </h4>
                  <p className="text-gry text-lg mb-0">Years Experience</p>
                </div>
                <div>
                  <h4 className="text-primary text-[44px] xl:text-[35px] lg:text-[30px] md:text-[25px] sm:text-[22px] font-bold mb-0">
                    99%
                  </h4>
                  <p className="text-gry text-lg mb-0">Satisfaction Rate</p>
                </div>
                <div>
                  <h4 className="text-primary text-[44px] xl:text-[35px] lg:text-[30px] md:text-[25px] sm:text-[22px] font-bold mb-0">
                    393k
                  </h4>
                  <p className="text-gry text-lg mb-0">Our Global Clients</p>
                </div>
              </SlideUp>
            </div>
          </div>
          <div className="lg:w-5/12 px-4">
            <div className="banner__right" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroTwo;
