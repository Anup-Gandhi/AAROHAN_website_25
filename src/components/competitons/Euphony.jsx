import React from "react";
import image1 from "./assets/Comp_Euphony.png";
import { Link } from "react-router-dom";
import close from "./assets/cross.png";

const Euphony = () => {
    return (
        <div className="w-[80vw] h-[80vh] laptop:h-[90vh] mx-[10vw] overflow-x-hidden overflow-y-scroll hide-scrollbar rounded-3xl laptop:my-[5vh] mobile:my-[10vh] fixed top-0 z-10 bg-white-custom">
            <Link to="../">
                <button className="fixed top-[12vh] laptop:top-[8vh] right-[12vw] hover:scale-110 text-white text-lg self-center">
                    <img src={close} alt="close" className="max-w-[10vw] h-7 z-50" />
                </button>
            </Link>
            <div className="pt-[5vh] laptop:pt-[9vh] grid h-[75vh]">
                <div className="font-Quintessential text-4xl text-center mb-2.5">
                    Euphony
                </div>
                <img className="object-contain mx-[15vw] max-h-[60vh] w-[50vw]" src={image1} alt="" />
                <button className="min-w-[20vw] p-[1%] mx-auto my-2.5 justify-self-center bg-[#C47C74] hover:bg-[#B90827] rounded-md transition-all duration-300 shadow-lg hover:scale-105 hover:shadow-xl">
                    Register Now
                </button>
                <div className="flex justify-center">
                    <div className="font-Akaya_Telivigala mx-auto">
                        <div className="font-Quintessential text-xl">Prize:</div>
                        Winner: 14,000/-
                        <br />
                        Runner Up: 10,000/-
                    </div>
                    <div className="font-Akaya_Telivigala mx-auto">
                        Entry Fees:
                        3,500/-
                    </div>
                </div>
                <div className="w-[48vw] mx-auto mt-2.5">
                <div className="font-Quintessential text-xl text-left mb-2.5">
                    Rules:
                </div>
                <div className="font-Akaya_Telivigala text-left mx-auto mb-2.5">
                1. The time limit for performances, from an empty stage to an empty stage is 5 minutes. <br />
                2. Organizers will provide a Drum kit and Sound System. Any other instruments or accessories must be brought by the participants. <br />
                3. Backing tracks in the performance, if used, must be sent for screening at least 5 days prior the event. <br />
                4. Get your track on a pen drive. <br />
                5.It is advisable to keep a copy of your track on your phone and in the mail too. <br />
                6.Performances exceeding 5 minutes will lose all the points allocated for the time criteria and any other points lost will be at the discretion of the judges.
                </div>
            </div>
            </div>
        </div>
    );
};

export default Euphony;
