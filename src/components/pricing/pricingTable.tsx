import { pricingData } from "@/db/pricingData";
import SlideUp from "@/utils/animations/slideUp";
import Link from "next/link";
import React from "react";

const PricingTable: React.FC = () => {
  return (
    <div className="flex flex-wrap -mx-4 pt__50">
      {pricingData.map((plan, index) => (
        <SlideUp
          key={index}
          className="xl:w-3/12 md:w-6/12 px-4 mb-4 xl:mb-0"
          delay={index}
        >
          <div className="pricing__card">
            <div className="text-center pricing__card_title">
              <h6>{plan.title}</h6>
              <h1 className="t__54">{plan.price}</h1>
              <p>Per year</p>
            </div>
            <span className="border__full" />
            <ul>
              {plan.features.map((feature, i) => (
                <li key={i}>
                  <span />
                  <p>{feature}</p>
                </li>
              ))}
            </ul>
            <Link href={"/pricing"} className="common__btn">
              <span>Get Started</span>
              <i className="fa-solid fa-arrow-right"></i>
            </Link>
          </div>
        </SlideUp>
      ))}
    </div>
  );
};

export default PricingTable;
