import React from "react";
import "./home.css"
import { Link } from "react-router-dom";
import image7 from "../assets/Image7.png";
import colleges from "../assets/stats_colleges.gif";
import footfall from "../assets/stats_footfall.gif";
import prizes from "../assets/stats_cashprize.gif";
import reach from "../assets/stats_reach.gif";

import instagram from "../assets/instagram.png"
import facebook from "../assets/facebook.png"
import twitter from "../assets/twitter.png"
import youtube from "../assets/youtube.png"
import video_lbg from "../assets/landscape_bg.mp4"
import video_mbg from "../assets/protait_bg.mp4"
import sc_01 from "../assets/sc_01.jpg";
import sc_02 from "../assets/sc_02.jpg";
import sc_03 from "../assets/sc_03.jpeg";
import sc_04 from "../assets/sc_04.png";
import Footer from "./footer";
import Youtube from "../assets/Youtube_Video.png"


function Propasses() {
  
  return (
    <>
    <div className=" font-Quintessential laptop:inline-flex mobile:text-3xl laptop:text-6xl text-white bg-purple-custom w-[100vw] laptop:h-[75vh] mobile:h-[85vh]  ">
      <div className=" grid mobile:w-[100vw] mt-[18vh] bg-purple-custom w-[50vw] h-[15vh] ">
        <div className="  mx-[5%]  mobile:text-3xl laptop:text-6xl font-Quintessential font-bold ">
          Get your passes Now
        </div>
        <div className=" mt-[2.5%] mx-[5%]  mobile:text-3xl laptop:text-6xl font-Quintessential font-bold ">
          Don't forget the refferal code
        </div>
        <div className=" mt-[2.5%] px-[1.5%] w-auto bg-white text-purple-custom  md:text-5xl text-center rounded-full mx-auto mobile:text-3xl laptop:text-6xl font-Quintessential font-bold ">
          MITWPU
        </div>
        <div className=" my-auto mt-[2.5%] inline-flex bg-purple-custom ">
        <a className=" mx-[5%] "><img className=" rounded-lg w-auto " src={Youtube} alt="" /></a>
        <a className=" mx-[5%] "><img className=" rounded-lg w-auto " src={Youtube} alt="" /></a>
        </div>
      </div>
      <div className=" pt-[8vh] mobile:hidden mx-auto ">
        <iframe className=" mx-auto rounded-xl " width="341" height="606" src="https://www.youtube.com/embed/vnZslHxWb-s" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>
    </div>
    <div className=" laptop:hidden w-full py-[5%] bg-green-custom mx-auto ">
      <iframe className=" mx-auto rounded-xl " width="341" height="606" src="https://www.youtube.com/embed/vnZslHxWb-s" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>
    <div className="bg-yellow-custom font-Quintessential font-bold mobile:text-3xl laptop:text-6xl my-0 px-[1.5%] py-[2.5%] w-full ">
      <div className="w-[65vw]">
        <div className="text-center font-bold ">
          Steps to download
        </div>
        <div className=" my-[2.5%] px-[1.5%] py-[1%] w-[25%] bg-white text-yellow-custom text-center rounded-full mobile:text-3xl laptop:mobile:text-3xl laptop:text-6xl font-Quintessential font-bold ">
          Step 1:
        </div>
      </div>
        <div className="text-3xl inline-flex font-Akaya_Telivigala mobile:text-base laptop:text-3xl ">
          <div> Install the app</div>
          <img src="" alt="" />
        </div>
    </div>
    </>
  );
};

export default Propasses;