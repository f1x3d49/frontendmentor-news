import React from "react";
import { ReactComponent as Hamburger } from "../images/icon-menu.svg";
import { ReactComponent as Close } from "../images/icon-menu-close.svg";
import Logo from "../images/logo.svg";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center h-24">
      <img src={Logo} alt="logo-img" />
    </div>
  );
};

export default Navbar;
