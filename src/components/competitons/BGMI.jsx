import React from "react";
import image1 from "./assets/Comp_BGMI.jpg"; // Replace with the actual image for Humming
import { Link } from "react-router-dom";
import close from "./assets/cross.png";

const BGMI = () => {
    return (
        <div className="w-[80vw] h-[80vh] laptop:h-[90vh] mx-[10vw] overflow-x-hidden overflow-y-scroll hide-scrollbar rounded-3xl laptop:my-[5vh] mobile:my-[10vh] fixed top-0 z-10 bg-white-custom ">
            <Link to="../">
                <button className="fixed top-[12vh] laptop:top-[8vh] right-[12vw] hover:scale-110 text-white text-lg self-center">
                    <img src={close} alt="close" className="max-w-[10vw] h-7 z-50"/>
                </button>
            </Link>
            <div className="pt-[5vh] laptop:pt-[9vh] grid h-[75vh]">
                <div className="font-Uchiyama text-4xl text-center mb-2.5">
                    BGMI
                </div>
                <img className="object-contain mx-[15vw] max-h-[60vh] w-[50vw]" src={image1} alt="" />
                <button className="min-w-[20vw] p-[1%] mx-auto my-2.5 justify-self-center bg-[#C47C74] hover:bg-[#B90827] rounded-md transition-all duration-300 shadow-lg hover:scale-105 hover:shadow-xl ">
                    Register Now
                </button>
                <div className="flex justify-center">
                    <div className="font-appetite mx-auto">
                        <div className="font-Uchiyama text-xl">Prize:</div>
                        Winner: 25,00/-
                        <br />
                        Runner Up: 15,000/-
                        <br />
                        MVP: 5,000/-
                    </div>
                    <div className="font-appetite mx-auto">
                        Entry Fees:
                        500/-
                    </div>
                </div>
                <div className="w-[48vw] mx-auto mt-2.5">
                    <div className="font-Uchiyama text-xl text-left mb-2.5">
                        Guidlines:
                    </div>
                    <div className="font-appetite text-left mx-auto mb-2.5">
                        1. Game will be in battle royale mode , all players must have latest version of BGMI installed on their device with all classic maps downloaded. <br />
                        2. Players can play on Android / iOS phones only.<br />
                        3. Any game modifying tools except ‘GFX tool’ is not allowed. <br />
                        4. Only in-game voice chat should be used after the game is started till its competition. <br />
                        5. Hacking , Cheating , Use of unauthorized softwares are strictly prohabited. Players found violating these rules will be disquilified. <br />
                        6. Waiting time is atmost 15-20 minutes between games. If a team / player fails to join the room in time  we will not be responsible. <br />
                        7. Finals will be conducted offline<br />
                        8. By participating in the BGMI tournament organized by MIT AAROHAN players agree to abide by all tournament rules and regulations. The organizers reserve the right to modify rules, disqualify participants for misconduct, and resolve disputes at their discretion. Unauthorized third-party software is strictly prohibited. Prizes will be distributed according to the announced structure, and participants must provide accurate details for prize delivery.
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BGMI;
