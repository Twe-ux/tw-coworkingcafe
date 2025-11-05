import BlogCard from "@/components/blogs/blogCard";
import BlogSidebar from "@/components/blogs/blogSidebar";
import PageTitle from "@/components/pageTitle";
import { blogOneData } from "@/db/blogOneData";
import SlideDown from "@/utils/animations/slideDown";
import React from "react";

const Blog: React.FC = () => {
  return (
    <>
      <PageTitle title={"Blog"} currentPage={"Blog"} />
      <section className="all__blog py__130">
        <div className="container">
          <div className="flex flex-wrap -mx-4">
            <div className="lg:w-8/12 px-4">
              <div className="flex flex-wrap -mx-4">
                {blogOneData.map(({ author, comments, id, imgSrc, title }) => (
                  <SlideDown key={id} className="md:w-6/12 px-4" delay={id}>
                    <BlogCard
                      author={author}
                      comments={comments}
                      imgSrc={imgSrc}
                      title={title}
                    />
                  </SlideDown>
                ))}
              </div>
            </div>
            <div className="lg:w-4/12 px-4 mt-5 lg:mt-0">
              <BlogSidebar />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
