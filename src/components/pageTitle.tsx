import SlideUp from "@/utils/animations/slideUp";
import Link from "next/link";
import React from "react";

interface PageTitleProps {
  title: string;
  currentPage: string;
}

const PageTitle: React.FC<PageTitleProps> = ({ title, currentPage }) => {
  return (
    <section className="page__header relative">
      <div className="container">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full px-4 flex xl:justify-between justify-center items-center">
            <img
              src="/images/pageHeader/Group_78_3.svg"
              alt="img"
              className="object-contain left__pei"
            />
            <img
              src="/images/pageHeader/Group727.svg"
              alt="img"
              className="left__arrow object-contain"
            />
            <SlideUp className="text-center">
              <h2>{title}</h2>
              <div className="flex justify-center gap-2">
                <Link href="/">Home</Link>
                <span>/</span>
                <p>{currentPage}</p>
              </div>
            </SlideUp>
            <img
              src="/images/pageHeader/Group726.png"
              alt="img"
              className="object-contain right__arrow"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PageTitle;
