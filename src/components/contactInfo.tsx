"use client";
import SlideUp from "@/utils/animations/slideUp";
import React from "react";
import CustomDropdown from "./customDropdown";

const ContactInfo: React.FC = () => {
  const handleSelect = (option: string) => {
    console.log("Selected:", option);
  };
  return (
    <section className="contact">
      <div className="container">
        <div className="flex flex-wrap -mx-4 justify-between items-center">
          <SlideUp className="lg:w-4/12 px-4">
            <div className="location">
              <h3 className="t__54">Contact Us</h3>
              <p className="location__disc">
                Get in touch to discuss your employee well-being needs today.
              </p>
              <ul>
                <li>
                  <img src="/icons/location.svg" alt="img" />
                  <div>
                    <b>Location:</b>
                    <p>Los Angles CA, 300, New York USA</p>
                  </div>
                </li>
                <li>
                  <img src="/icons/phone.svg" alt="img" />
                  <div>
                    <b>Call US:</b>
                    <p>+589 939 939 99</p>
                  </div>
                </li>
                <li>
                  <img src="/icons/email1.svg" alt="img" />
                  <div>
                    <b>Send Message:</b>
                    <p>hellodigiv@gmail.com</p>
                  </div>
                </li>
              </ul>
            </div>
          </SlideUp>
          <SlideUp className="lg:w-8/12 px-4 mt-5 lg:mt-0">
            <div className="contact__form">
              <h5 className="t__28">Get In Touch Here</h5>
              <form>
                <div className="flex flex-wrap -mx-4">
                  <div className="md:w-6/12 px-4">
                    <input type="text" placeholder="Your Name" />
                  </div>
                  <div className="md:w-6/12 px-4">
                    <input type="email" placeholder="Your Email" />
                  </div>
                  <div className="w-full px-4">
                    <CustomDropdown
                      options={["Option 1", "Option 2", "Option 3"]}
                      onSelect={handleSelect}
                    />
                  </div>
                  <div className="w-full px-4">
                    <textarea placeholder="Your Message" />
                  </div>
                  <div className="px-4">
                    <button className="common__btn">
                      Send Your Message
                      <img src="/icons/arrow-up-right.svg" alt="img" />
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </SlideUp>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
