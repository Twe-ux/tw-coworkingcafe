"use client";

import { faqData } from "@/db/faqData";
import SlideUp from "@/utils/animations/slideUp";
import React, { useState } from "react";

const FaqSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggleAccordion = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="faq py__130">
      <div className="container">
        <h2 className="title text-center">
          We will be there for you every time of the way 24/7! for customer
        </h2>
        <div className="faq__wapper">
          <div className="accordion" id="accordionExample">
            {faqData.map((item) => (
              <SlideUp
                key={item.id}
                className="accordion-item"
                delay={item.delay}
              >
                <h2 className="accordion-header" id={item.id}>
                  <button
                    className={`accordion-button ${
                      openId === item.id ? "" : "collapsed"
                    }`}
                    type="button"
                    onClick={() => toggleAccordion(item.id)}
                    aria-expanded={openId === item.id}
                    aria-controls={`collapse${item.id}`}
                  >
                    {item.question}
                  </button>
                </h2>
                <div
                  id={`collapse${item.id}`}
                  className={`accordion-collapse collapse ${
                    openId === item.id ? "show" : ""
                  }`}
                  aria-labelledby={item.id}
                >
                  <div className="accordion-body">
                    <p>{item.answer}</p>
                  </div>
                </div>
              </SlideUp>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
