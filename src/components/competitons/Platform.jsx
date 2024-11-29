import React from "react";
import image1 from "./assets/Comp_Platform.png";
import { Link } from "react-router-dom";
import close from "./assets/cross.png";

const Platform = () => {
    return (
        <div className="w-[80vw] h-[80vh] laptop:h-[90vh] mx-[10vw] overflow-x-hidden overflow-y-scroll hide-scrollbar rounded-3xl laptop:my-[5vh] mobile:my-[10vh] fixed top-0 z-10 bg-white-custom">
            <Link to="../">
                <button className="fixed top-[12vh] laptop:top-[8vh] right-[12vw] hover:scale-110 text-white text-lg self-center">
                    <img src={close} alt="close" className="max-w-[10vw] h-7 z-50" />
                </button>
            </Link>
            <div className="pt-[5vh] laptop:pt-[9vh] grid h-[75vh]">
                <div className="font-onejinja text-4xl text-center mb-2.5">
                    Platform
                </div>
                <img className="object-contain mx-[15vw] max-h-[60vh] w-[50vw]" src={image1} alt="" />
                <button className="min-w-[20vw] p-[1%] mx-auto my-2.5 justify-self-center bg-[#C47C74] hover:bg-[#B90827] rounded-md transition-all duration-300 shadow-lg hover:scale-105 hover:shadow-xl">
                    Register Now
                </button>
                <div className="flex justify-center">
                    <div className="font-appetite mx-auto">
                        <div className="font-onejinja text-xl">Prize:</div>
                        Winner: 25,000/-
                        <br />
                        Runner Up: 15,000/-
                    </div>
                    <div className="font-appetite mx-auto">
                        Entry Fees:
                        2,000/-
                    </div>
                </div>
                <div className="w-[48vw] mx-auto mt-2.5">
                <div className="font-onejinja text-xl text-left mb-2.5">
                    Rules:
                </div>
                <div className="font-appetite text-left mx-auto mb-2.5">
                1. The time limit for performances, from an empty stage to an empty stage is 5 minutes. <br />
                2. Open flames and live animals are not allowed onstage for your
                performance. <br />
                3. A proper level of decency must be maintained in terms of costumes and apparel. <br />
                4. You can perform any Open Mic acts, such as Stand-Up Comedy, Slam Poetry, Story Telling, Shayari, Beatboxing, Rapping, or Mono Acting. <br />
                5. The script for Platform should be submitted for censoring at least 10 days prior the event at aarohan.competitions2025@gmail.com with the subject "Platform". <br />
                6.The act should be in English, Hindi or Marathi. <br />
               7.Performances exceeding 5 minutes will lose all the points allocated for the time criteria and any other points lost will be at the discretion of the judges               
                </div>
            </div>
            </div>
        </div>
    );
};

export default Platform;
