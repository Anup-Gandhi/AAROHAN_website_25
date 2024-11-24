import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo aarohan 2.png"; // Ensure the path is correct

const Navbar = () => {
  return (
    <div className="navbar1 fixed top-[5vh] left-1/2 transform -translate-x-1/2 flex items-center z-[100] justify-center w-full laptop:h-[8vh] mobile:h-[7vw]">
      <Link to="/" className="laptop:h-[8vh] laptop:w-[8vh] mobile:h-[12vw] mobile:w-[12vw]  backdrop-blur-[10px] bg-black bg-opacity-50 rounded-[50%] items-center justify-center">
        <img src={logo} className="h-[12vw] flex laptop:h-[7.5vh] justify-self-center  self-center" alt="Logo" />
      </Link>
      
      {/* Navigation Links */}
      <div className="content flex laptop:ml-[5vh] laptop:h-[8vh] mobile:ml-[5vw] mobile:h-[7vw] bg-black bg-opacity-50 backdrop-blur-[10px] px-[15px] rounded-[3.5vh]">
        <Link to="/competitions" className="text-white no-underline px-[16px] flex items-center h-[100%] text-[1.5vw] font-sans laptop:font-medium">
          Competitions
        </Link>
        <Link to="/events" className="text-white no-underline px-[16px] flex items-center h-[100%] text-[1.5vw] font-sans laptop:font-medium">
          Events
        </Link>
        <Link to="/photos" className="text-white no-underline px-[16px] flex items-center h-[100%] text-[1.5vw] font-sans laptop:font-medium">
          Photos
        </Link>
        <Link to="/sponsors" className="text-white no-underline px-[16px] flex items-center h-[100%] text-[1.5vw]  font-sans laptop:font-medium">
          Sponsors
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
