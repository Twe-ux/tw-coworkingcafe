import { blogOneData } from "@/db/blogOneData";
import React from "react";
import BlogCard from "./blogCard";
import SlideDown from "@/utils/animations/slideDown";
import SlideUp from "@/utils/animations/slideUp";

interface HomeBlogProps {
  className?: string;
}

const HomeBlog: React.FC<HomeBlogProps> = ({ className = "" }) => {
  return (
    <section className={`blogs ${className}`}>
      <div className="container">
        {/* title Start */}
        <SlideDown className="blogs__title">
          <h1 className="title text-center">
            See our latest daily blog and news from us
          </h1>
        </SlideDown>
        {/* title End */}
        <div className="blogs__wapper">
          <div className="flex flex-wrap -mx-4">
            {blogOneData
              .slice(0, 3)
              .map(({ author, comments, id, imgSrc, title }) => (
                <SlideUp
                  key={id}
                  className="lg:w-4/12 md:w-6/12 px-4 mb-5 lg:mb-0"
                  delay={id}
                >
                  <BlogCard
                    author={author}
                    comments={comments}
                    imgSrc={imgSrc}
                    title={title}
                  />
                </SlideUp>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeBlog;
