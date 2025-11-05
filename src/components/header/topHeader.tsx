import Link from "next/link";
import React from "react";

const TopHeader: React.FC = () => {
  return (
    <div className="header__top hidden lg:block bg-main text-primary py-[18px]">
      <div className="container">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-[13px]">
            <p className="flex items-center mb-0 text-primary font-semibold">
              <i className="bi bi-clock" />
              <span> &nbsp; Working Hours :</span>
            </p>
            <p className="mb-0 text-primary">
              <span>Monday - Friday,</span>
              <span>10am - 05pm</span>
            </p>
          </div>
          <div className="flex items-center gap-[18px]">
            <p className="mb-0 text-primary font-semibold text-lg">
              digiv@gmail.com
            </p>
            <span className="w-[1px] h-[18px] bg-primary" />
            <p className="mb-0 text-primary font-semibold text-lg">
              +3929 299 999
            </p>
            <span className="w-[1px] h-[18px] bg-primary" />
            <ul className="flex items-center gap-4">
              <li>
                <Link href="#" className="transition-all duration-500 hover:text-btn">
                  <i className="fa-brands fa-facebook-f" />
                </Link>
              </li>
              <li>
                <Link href="#" className="transition-all duration-500 hover:text-btn">
                  <i className="fa-brands fa-twitter" />
                </Link>
              </li>
              <li>
                <Link href="#" className="transition-all duration-500 hover:text-btn">
                  <i className="fa-brands fa-instagram" />
                </Link>
              </li>
              <li>
                <Link href="#" className="transition-all duration-500 hover:text-btn">
                  <i className="fa-brands fa-youtube" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
