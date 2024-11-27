import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo aarohan 2.png";

const Navbar = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  const showSidebar = () => setIsSidebarVisible(true);
  const hideSidebar = () => setIsSidebarVisible(false);

  return (
    <>
      {/* Navbar */}
      <nav className="fixed top-[5vh] left-1/2 transform -translate-x-1/2 z-30  flex">
                {/* Logo */}
                <div className=" laptop:h-[8vh] laptop:w-[8vh] mx-[2vh] mobile:hidden  bg-black bg-opacity-10 backdrop-blur-lg shadow-md rounded-[50%]">
                <Link to="/">
                  <img
                    src={logo}
                    alt="aarohan-logo"
                    className=" transform transition-all hover:scale-110 laptop:h-[7.5vh] justify-self-center self-center hidden laptop:flex"
                  />
                </Link>
              </div>
        <ul className="flex font-onejinja justify-end items-center list-none px-[15px] rounded-[4vh] bg-black bg-opacity-10 backdrop-blur-lg shadow-md">

          {/* Navigation Links */}
          <li className="hidden laptop:flex h-[60px]">
            <Link
              to="/sponsors"
              className="text-white text-center flex items-center px-6 text-sm hover:scale-110 transform transition-all"
            >
              Sponsors
            </Link>
          </li>
          <li className="hidden laptop:flex h-[60px]">
            <Link
              to="/competitions"
              className="text-white text-center flex items-center px-6 text-sm hover:scale-110 transform transition-all"
            >
              Competitions
            </Link>
          </li>
          <li className="hidden laptop:flex h-[60px]">
            <Link
              to="/photos"
              className="text-white text-center flex items-center px-6 text-sm hover:scale-110 transform transition-all"
            >
              Photos
            </Link>
          </li>
          <li className="hidden laptop:flex h-[60px]">
            <Link
              to="/events"
              className="text-white text-center flex items-center px-6 text-sm hover:scale-110 transform transition-all"
            >
              Events
            </Link>
          </li>

          {/* Mobile Menu Toggle laptop:h-[8vh] laptop:w-[8vh] mx-[2vh] mobile:hidden  bg-black bg-opacity-10 backdrop-blur-lg shadow-md rounded-[50%]*/}
          <li className="laptop:hidden  hover:scale-110 min-w-[8vh] h-[8vh] mobile:flex mobile:fixed top-[0vh] left-1/2 transform -translate-x-1/2  bg-black bg-opacity-10 backdrop-blur-lg shadow-md rounded-[50%]">
            <button onClick={showSidebar} className="self-center m-auto min-w-[8vh] h-[8vh]  bg-black bg-opacity-80 backdrop-blur shadow-lg rounded-[50%] ">
              <img
                src={logo}
                alt=""
                className="max-w-[7.5vh] h-[7.5vh] z-30 justify-self-center "
              />
            </button>
          </li>
        </ul>
      </nav>

      {/* Sidebar */}
      {isSidebarVisible && (
        <div className="fixed top-0 right-0 h-full w-[100vw] font-onejinja z-40 text-center bg-black bg-opacity-80 backdrop-blur-lg shadow-md flex flex-col p-4">
          <button
            onClick={hideSidebar}
            className=" hover:scale-110 text-white text-lg mb-4 self-center mt-[7vh] "
          >
          <img
          src="assets/icons8-menu-24.png"
          alt="close"
          className="max-w-[10vw] h-auto z-50"
        />
          </button>
          <Link
            to="/aboutus"
            className=" hover:scale-110 text-white text-lg py-2 px-4 w-full hover:bg-white hover:bg-opacity-10"
          >
            About Us
          </Link>
          <Link
            to="/sponsors"
            className=" hover:scale-110 text-white text-lg py-2 px-4 w-full hover:bg-white hover:bg-opacity-10"
          >
            Sponsors
          </Link>
          <Link
            to="/competitions"
            className=" hover:scale-110 text-white text-lg py-2 px-4 w-full hover:bg-white hover:bg-opacity-10"
          >
            Competitions
          </Link>
          <Link
            to="/photos"
            className=" hover:scale-110 text-white text-lg py-2 px-4 w-full hover:bg-white hover:bg-opacity-10"
          >
            Photos
          </Link>
          <Link
            to="/events"
            className=" hover:scale-110 text-white text-lg py-2 px-4 w-full hover:bg-white hover:bg-opacity-10"
          >
            Events
          </Link>
        </div>
      )}
    </>
  );
};

export default Navbar;