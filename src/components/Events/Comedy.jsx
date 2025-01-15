import React from "react";
import image1 from "./assets/You1.jpg";
import { Link } from "react-router-dom";
import close from "./assets/cross.png";

const Comedy = () => {
    return (
        <div className="w-[80vw] h-[80vh] laptop:h-[90vh] mx-[10vw] overflow-x-hidden overflow-y-scroll hide-scrollbar rounded-3xl laptop:my-[5vh] mobile:my-[10vh] fixed top-0 z-10 bg-white-custom">
            <Link to="../">
                <button className="fixed top-[12vh] laptop:top-[8vh] right-[12vw] hover:scale-110 text-white text-lg self-center">
                    <img src={close} alt="close" className="max-w-[10vw] h-7 z-50" />
                </button>
            </Link>
            <div className="pt-[5vh] laptop:pt-[9vh] grid h-[75vh]">
                <div className="font-onejinja text-4xl text-center mb-2.5">
                    Comedy Nite
                </div>
                <img className="object-contain mx-[15vw] max-h-[60vh] w-[50vw]" src={image1} alt="" />
                <button className="min-w-[20vw] p-[1%] mx-auto my-2.5 justify-self-center bg-[#C47C74] hover:bg-[#B90827] rounded-md transition-all duration-300 shadow-lg hover:scale-105 hover:shadow-xl">
                    Register Not open
                </button>    
            <div className="w-[48vw] mx-auto mt-2.5">
                <div className="font-appetite text-left mx-auto mb-2.5">
                MIT WPU Aarohan is back with Comedy Nite, an event where stand-up comedians have the crowd bawling in laughter. When the fest is at its peak, iconic comedians glamour the stage as they entertain the crowds. Comedians like Sapan Varma, Rahul Dua, Nishant Suri have performed on our stage previously. The event is a once-a-year opportunity for fans to watch live performances of their favourite artists.Join us to enjoy the 10th Edition of MIT Aarohan and get the chance to witness Comedy Nite in its full-fledged glory.
                </div>
            </div>
            </div>
        </div>
    );
};

export default Comedy;
