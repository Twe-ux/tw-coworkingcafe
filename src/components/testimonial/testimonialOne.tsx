"use client";

import { testimonialsOneData } from "@/db/testimonialsOneData";
import SlideDown from "@/utils/animations/slideDown";
import SlideUp from "@/utils/animations/slideUp";
import React from "react";
import "swiper/css";
import "swiper/css/navigation";
// import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import VideoTestimonial from "./videoTestimonial";

const TestimonialOne: React.FC = () => {
  return (
    <section className="testimonial py__130">
      <div className="container relative">
        {/* title Start */}
        <SlideDown className="testimonial__title">
          <h1 className="title text-center">
            What customer say's about Digiv to take their service
          </h1>
        </SlideDown>
        {/* title End */}
        <SlideUp className="testimonial__wapper">
          <Swiper
            spaceBetween={25}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
            }}
            navigation={{
              nextEl: ".next-slide",
              prevEl: ".prev-slide",
            }}
            pagination={{
              renderBullet: function (index, className) {
                return `<span class='${className}'>0${index + 1}</span>`;
              },
              clickable: true,
              bulletClass: "slide-dots",
              bulletActiveClass: "slide-dots-active",
              el: ".testimonial-pagination",
            }}
            loop
            modules={[Navigation, Pagination]}
          >
            {testimonialsOneData.map((testimonial, index) => (
              <SwiperSlide key={index} className="slide">
                <div className="flex gap-2 star">
                  {Array.from({ length: testimonial.stars }).map((_, i) => (
                    <i key={i} className="bi bi-star-fill" />
                  ))}
                </div>
                <p className="review">{testimonial.review}</p>
                <div className="flex justify-between">
                  <div className="flex gap-4 reviewer__info">
                    <img
                      src={testimonial.reviewer.image}
                      alt={testimonial.reviewer.name}
                    />
                    <div>
                      <p>{testimonial.reviewer.name}</p>
                      <small>{testimonial.reviewer.position}</small>
                    </div>
                  </div>
                  <div>
                    <img src={testimonial.quoteImage} alt="quote" />
                  </div>
                </div>
              </SwiperSlide>
            ))}
            <div className="flex justify-center gap-3 mt-4">
              <div className="prev-slide slide__nav">
                <i className="fa-solid fa-arrow-left"></i>
              </div>
              <div className="testimonial-pagination flex gap-3"></div>
              <div className="next-slide slide__nav">
                <i className="fa-solid fa-arrow-right"></i>
              </div>
            </div>
          </Swiper>
        </SlideUp>
        <VideoTestimonial />
      </div>
    </section>
  );
};

export default TestimonialOne;
