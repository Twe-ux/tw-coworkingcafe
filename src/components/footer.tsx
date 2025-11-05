import Link from "next/link";
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="footer bg-secondary">
      <div className="container">
        {/* Subscribe Form */}
        <div className="subscribe">
          <div className="flex flex-wrap -mx-4">
            <div className="lg:w-8/12 px-4">
              <h2 className="text-grayWhite text-[54px] xl:text-[45px] lg:text-[40px] sm:text-[32px] font-medium leading-[62px] xl:leading-[50px] lg:leading-[45px] sm:leading-[35px] max-w-[690px]">
                Subscribe to our newsletter &amp; get more information
              </h2>
            </div>
            <div className="lg:w-4/12 px-4 mt-5 lg:mt-0">
              <div>
                <input
                  type="text"
                  placeholder="Your Email"
                />
                <button className="common__btn">
                  <span>Subscribe Now</span>
                  <i className="fa-solid fa-arrow-right"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Subscribe Form */}

        {/* Logo and social icon */}
        <div className="footer__lo_co flex flex-wrap -mx-4">
          <div className="w-full px-4">
            <div className="flex justify-center">
              <Link
                href={"#"}
                className="flex items-center footer__logo mb-[50px]"
              >
                <img src="/images/logo_white.svg" alt="img" />
                <h5 className="text-[34px] font-semibold mb-0 text-primary">
                  Digiv
                </h5>
              </Link>
            </div>
            <ul className="flex justify-center gap-3 footer__socal pb-10">
              <li>
                <Link
                  href={"#"}
                  className="w-[42px] h-[42px] rounded-full border border-grayWhite flex items-center justify-center"
                >
                  <i className="fa-brands fa-facebook-f" />
                </Link>
              </li>
              <li>
                <Link
                  href={"#"}
                  className="w-[42px] h-[42px] rounded-full border border-grayWhite flex items-center justify-center"
                >
                  <i className="fa-brands fa-pinterest-p" />
                </Link>
              </li>
              <li>
                <Link
                  href={"#"}
                  className="w-[42px] h-[42px] rounded-full border border-grayWhite flex items-center justify-center"
                >
                  <i className="fa-brands fa-instagram" />
                </Link>
              </li>
              <li>
                <Link
                  href={"#"}
                  className="w-[42px] h-[42px] rounded-full border border-grayWhite flex items-center justify-center"
                >
                  <i className="fa-brands fa-twitter" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
        {/* Logo and social icon */}

        <hr className="footer__border bg-grayWhite w-full h-[1px] text-grayWhite m-0 border-0" />

        {/* Info */}
        <div className="footer__info flex flex-wrap -mx-4 pt-10">
          <div className="lg:w-4/12 md:w-6/12 px-4 mb-5 lg:mb-0">
            <div className="footer__info_address max-w-[312px]">
              <h3 className="footer__info_group text-[28px] text-grayWhite font-medium leading-[38px] mb-[29px]">
                Address
              </h3>
              <p>2096 New Market, New Road North West Bengal, NY, USA</p>
            </div>
          </div>
          <div className="lg:w-3/12 md:w-6/12 px-4 mb-5 lg:mb-0">
            <div>
              <h3 className="footer__info_group text-[28px] text-grayWhite font-medium leading-[38px] mb-[29px]">
                Our Contact
              </h3>
              <ul className="footer__info_contact">
                <li className="flex items-center gap-[7px] mb-[25px]">
                  <img src="/icons/Frame5.svg" alt="img" />
                  <p>hellodigiv@gmail.com</p>
                </li>
                <li className="flex items-center gap-[7px] mb-[25px]">
                  <img src="/icons/Frame6.svg" alt="img" />
                  <p>+48 93939 0239</p>
                </li>
                <li className="flex items-center gap-[7px]">
                  <img src="/icons/Frame7.svg" alt="img" />
                  <p>Mon - Fri 10:00 - 18:00</p>
                </li>
              </ul>
            </div>
          </div>
          <div className="lg:w-3/12 md:w-6/12 px-4 mb-5 lg:mb-0">
            <div>
              <h3 className="footer__info_group text-[28px] text-grayWhite font-medium leading-[38px] mb-[29px]">
                Quick Links
              </h3>
              <ul>
                <li className="mb-[22px]">
                  <Link href={"#"} className="text-pra inline-block">
                    Home
                  </Link>
                </li>
                <li className="mb-[22px]">
                  <Link href={"#"} className="text-pra inline-block">
                    Our All Services
                  </Link>
                </li>
                <li>
                  <Link href={"#"} className="text-pra inline-block">
                    About Digiv
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="lg:w-2/12 md:w-6/12 px-4 mb-5 lg:mb-0">
            <div>
              <h3 className="footer__info_group text-[28px] text-grayWhite font-medium leading-[38px] mb-[29px]">
                Help
              </h3>
              <ul>
                <li className="mb-[22px]">
                  <Link href={"#"} className="text-pra inline-block">
                    Contact Us
                  </Link>
                </li>
                <li className="mb-[22px]">
                  <Link href={"#"} className="text-pra inline-block">
                    FAQ's
                  </Link>
                </li>
                <li>
                  <Link href={"#"} className="text-pra inline-block">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* Info */}

        <div className="footer__copyright flex flex-wrap -mx-4 mt-[133px]">
          <div className="w-full px-4">
            <hr className="footer__border bg-grayWhite w-full h-[1px] text-grayWhite m-0 border-0" />
            <p className="text-center py-[25px]">
              © Copyright 2025 All Rights Reserved by{" "}
              <Link href={"#"} className="text-btn font-semibold">
                digiv
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
