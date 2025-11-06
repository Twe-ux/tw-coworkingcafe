import BlogArticle from "@/components/blogs/blogArticle";
import BlogSidebar from "@/components/blogs/blogSidebar";
import Comments from "@/components/blogs/comments";
import LeaveReply from "@/components/blogs/leaveReply";
import PageTitle from "@/components/pageTitle";
import React from "react";

const BlogDetails: React.FC = () => {
  return (
    <>
      <PageTitle title={"Blog Details"} currentPage={"Blog Details"} />
      <section className="blog__details py__130">
        <div className="container">
          <div className="flex flex-wrap -mx-4">
            <div className="lg:w-8/12 px-4">
              <BlogArticle />
              <Comments />
              <LeaveReply />
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

export default BlogDetails;
