import React from "react";
import instagram from "../assets/instagram.png"
import facebook from "../assets/facebook.png"
import twitter from "../assets/twitter.png"
import youtube from "../assets/youtube.png"

const footer = () => {
  return (
    <div className="laptop:w-[70vw] mobile:w-[90vw] mobile:mx-[5vw] laptop:mx-[15vw] laptop:h-[50vh] font-appetite laptop:bg-footer mobile:bg-mob_footer justify-center bg-contain bg-bottom pb-[5vh] pt-[18vh] text-center bg-no-repeat  ">
        <div>Phone Number:-</div>
        <div className="hover:scale-110 transform transition-all"><a href="Tel: +917666589065">+917666589065</a></div>
        <div className="hover:scale-110 transform transition-all"><a href="Tel: +917666589065">+917666589065</a></div>
        <div>Email Id:-</div>
        <div className="hover:scale-110 transform transition-all"><a href="mailto:aarohan.mitwpu@gmail.com">aarohan.mitwpu@gmail.com</a></div>
        <div className="w-[50vw] laptop:mx-[10vw] mobile:mx-[20vw] flex justify-center ">
        <div className="w-[25vw] flex justify-center ">
        <img className="h-[4vh] laptop:max-w-[4vw] laptop:max-h-[4vw] mx-[1vh] hover:scale-110 transform transition-all" src={instagram} alt="" />
        <img className="h-[4vh] laptop:max-w-[4vw] laptop:max-h-[4vw] mx-[1vh] hover:scale-110 transform transition-all" src={facebook} alt="" />
        <img className="h-[4vh] laptop:max-w-[4vw] laptop:max-h-[4vw] mx-[1vh] hover:scale-110 transform transition-all" src={youtube} alt="" />
        <img className="h-[4vh] laptop:max-w-[4vw] laptop:max-h-[4vw] mx-[1vh] hover:scale-110 transform transition-all" src={twitter} alt="" />
        </div>
        </div>
    </div>
    );
};

export default footer;