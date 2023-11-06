import React from "react";
import { Link } from "react-router-dom";


import Logo from "../../../media/logo.png";
import Profile from "../../../media/eminem.jpg";
const NavBar = () => {
   
  return (
    <div className="m-0 bg-card w-full">
      <div className="flex px-12 py-4 justify-between text-primary items-center">
        <div className="w-8">
          <img src={Logo} />
        </div>
        <div>hey</div>
        <div className="gap-2 flex">
          <img src={Profile} className="rounded-full w-10" />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
