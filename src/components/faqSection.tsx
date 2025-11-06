"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqData } from "@/db/faqData";
import SlideUp from "@/utils/animations/slideUp";
import React from "react";

const FaqSection: React.FC = () => {
  return (
    <section className="faq py__130">
      <div className="container">
        <h2 className="title text-center">
          We will be there for you every time of the way 24/7! for customer
        </h2>
        <div className="faq__wapper">
          <Accordion type="single" collapsible className="w-full">
            {faqData.map((item) => (
              <SlideUp key={item.id}>
                <AccordionItem value={item.id} className="faq-item">
                  <AccordionTrigger className="faq-trigger">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="faq-content">
                    <p>{item.answer}</p>
                  </AccordionContent>
                </AccordionItem>
              </SlideUp>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
