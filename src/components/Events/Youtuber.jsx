import React from "react";
import image1 from "./assets/You1.jpg";
import { Link } from "react-router-dom";
import close from "./assets/cross.png";

const Youtuber = () => {
    return (
        <div className="w-[80vw] h-[80vh] laptop:h-[90vh] mx-[10vw] overflow-x-hidden overflow-y-scroll hide-scrollbar rounded-3xl laptop:my-[5vh] mobile:my-[10vh] fixed top-0 z-10 bg-white-custom">
            <Link to="../">
                <button className="fixed top-[12vh] laptop:top-[8vh] right-[12vw] hover:scale-110 text-white text-lg self-center">
                    <img src={close} alt="close" className="max-w-[10vw] h-7 z-50" />
                </button>
            </Link>
            <div className="pt-[5vh] laptop:pt-[9vh] grid h-[75vh]">
                <div className="font-onejinja text-4xl text-center mb-2.5">
                    Youtuber's Fest
                </div>
                <img className="object-contain mx-[15vw] max-h-[60vh] w-[50vw]" src={image1} alt="" />
                <button className="min-w-[20vw] p-[1%] mx-auto my-2.5 justify-self-center bg-[#C47C74] hover:bg-[#B90827] rounded-md transition-all duration-300 shadow-lg hover:scale-105 hover:shadow-xl">
                    Register not open yet
                </button>    
            <div className="w-[48vw] mx-auto mt-2.5">
                <div className="font-Akaya_Telivigala text-left mx-auto mb-2.5">
                The YouTubers, in particular, enjoyed a major chunk of the limelight, as they propelled their way up the audience's hearts. The 10th edition of MIT Aarohan offers you the chance to interact with and be enthralled by the YouTubers.Creators like Viraj Ghelani, Suhani Shah, and MC Altaf have already interacted with our audiences in our previous fests.The event breaks the wall between the artist and the viewer turning reel-life moments into experiences.Join us and chill with your friends at MIT Aarohan and experience the fever dream known as YouTuber Fest.               
                </div>
            </div>
            </div>
        </div>
    );
};

export default Youtuber;
