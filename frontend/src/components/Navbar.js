/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { ReactComponent as Hamburger } from "../images/icon-menu.svg";
import { ReactComponent as Close } from "../images/icon-menu-close.svg";
import Logo from "../images/logo.svg";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="flex justify-between items-center h-24 max-w-[1440px] md:col-span-3">
      <img src={Logo} alt="logo-img" />
      <ul className=" text-[#5d5f79] hidden md:flex">
        <li className="p-6">Home</li>
        <li className="p-6">New</li>
        <li className="p-6">Popular</li>
        <li className="p-6">Trending</li>
        <li className="p-6">Categories</li>
      </ul>
      <div onClick={handleNav} className="block md:hidden">
        <Hamburger className="ease-out duration-500" />
      </div>
      <div
        className={
          !nav
            ? "fixed flex flex-col justify-start pt-[25%] right-0 top-0 w-[60%] h-screen border-l border-l-[#c5c6ce] bg-[#fffdfa] ease-in-out duration-500"
            : "fixed left-[-100%] "
        }
      >
        <Close
          onClick={handleNav}
          className={
            !nav
              ? "fixed top-8 right-8 ease-in-out duration-500"
              : "fixed right-[-100%] "
          }
        />
        <ul>
          <li className="p-4">Home</li>
          <li className="p-4">New</li>
          <li className="p-4">Popular</li>
          <li className="p-4">Trending</li>
          <li className="p-4">Categories</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
