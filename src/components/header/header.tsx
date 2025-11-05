"use client";

import React, { useState } from "react";
import TopHeader from "./topHeader";
import Navbar from "./navbar";
import Link from "next/link";

const Header: React.FC = () => {
  const [activeNavbar, setActiveNavebar] = useState(false);

  return (
    <header className="header header__1">
      <TopHeader />
      <div className="header__bottom bg-btn py-6 relative z-[1000]">
        <div className="container">
          <div className="flex items-center justify-between">
            <div>
              <Link
                href="/"
                className="flex items-center header__bottom_logo gap-2"
              >
                <img src="/images/logo.svg" alt="img" />
                <h5 className="text-[34px] text-secondary mb-0">Digiv</h5>
              </Link>
            </div>
            <Navbar activeNavbar={activeNavbar} />
            <div className="hidden xl:block">
              <Link href={"/contact"} className="common__btn">
                <span> Get Started Now</span>
                <img src="/icons/arrow-up-right.svg" alt="img" />
              </Link>
            </div>
            <div
              className="menu__icon block xl:hidden"
              onClick={() => setActiveNavebar(!activeNavbar)}
            >
              <i className="bi bi-list" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
