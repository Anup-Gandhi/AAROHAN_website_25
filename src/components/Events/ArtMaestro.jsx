import React from "react";
import image1 from "./assets/Comp_ArtMaestro.png";
import { Link } from "react-router-dom";
import close from "./assets/cross.png";

const ArtMaestro = () => {
    return (
        <div className="w-[80vw] h-[80vh] laptop:h-[90vh] mx-[10vw] overflow-x-hidden overflow-y-scroll hide-scrollbar rounded-3xl laptop:my-[5vh] mobile:my-[10vh] fixed top-0 z-10 bg-white-custom ">
            <Link to="../">
                <button className="fixed top-[12vh] laptop:top-[8vh] right-[12vw] hover:scale-110 text-white text-lg self-center">
                    <img src={close} alt="close" className="max-w-[10vw] h-7 z-50" />
                </button>
            </Link>
            <div className="pt-[5vh] laptop:pt-[9vh] grid h-[75vh]">
                <div className="font-onejinja text-4xl text-center mb-2.5">
                    Art Maestro
                </div>
                <img className="object-contain mx-[15vw] max-h-[60vh] w-[50vw]" src={image1} alt="" />
                <button className="min-w-[20vw] p-[1%] mx-auto my-2.5 justify-self-center bg-[#C47C74] hover:bg-[#B90827] rounded-md transition-all duration-300 shadow-lg hover:scale-105 hover:shadow-xl">
                    Register Now
                </button>
                <div className="flex justify-center">
                    <div className="font-appetite mx-auto">
                        <div className="font-onejinja text-xl">Prize:</div>
                        Winner: 14,000/-
                        <br />
                        Runner Up: 10,000/-
                    </div>
                    <div className="font-appetite mx-auto">
                        Entry Fees:
                        500/-
                    </div>
                </div>
                <div className="w-[48vw] mx-auto mt-2.5">
                    <div className="font-onejinja text-xl text-left mb-2.5">
                        Rules:
                    </div>
                    <div className="font-appetite text-left mx-auto mb-2.5">
                    1. The time limit for completing the artwork is 90 minutes. <br />
                    2. For the artwork all mediums are allowed except those that are disruptive, toxic, or cause a mess, such as spray paint,
                    solvents, ink, glitter, etc. to ensure safety and cleanliness. <br />
                    3. Organizers will provide the drawing sheet (140gsm A3 cartridge), poster colors, shading pencils (HB, 2B, 4B), eraser,
                    sharpener, and water. <br />
                    4. Participants are required to bring any additional tools or
                    materials they wish to use, that are not mentioned in the list
                    above. <br />
                    5. The themes will be announced and conveyed soon by the
                    organizing team. <br />
                    6.Performers exceeding 90 minutes will lose all the
                    points allocated for the time criteria and any other points lost
                    will be at the discretion of the judges
                       
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ArtMaestro;
