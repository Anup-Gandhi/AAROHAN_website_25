import React from "react";
import image1 from "./assets/Comp_Headbang.png";
import { Link } from "react-router-dom";
import close from "./assets/cross.png";

const HeadBang = () => {
    return (
        <div className="w-[80vw] h-[80vh] laptop:h-[90vh] mx-[10vw] overflow-x-hidden overflow-y-scroll hide-scrollbar rounded-3xl laptop:my-[5vh] mobile:my-[10vh] fixed top-0 z-10 bg-white-custom">
            <Link to="../">
                <button className="fixed top-[12vh] laptop:top-[8vh] right-[12vw] hover:scale-110 text-white text-lg self-center">
                    <img src={close} alt="close" className="max-w-[10vw] h-7 z-50" />
                </button>
            </Link>
            <div className="pt-[5vh] laptop:pt-[9vh] grid h-[75vh]">
                <div className="font-onejinja text-4xl text-center mb-2.5">
                    Head Bang final
                </div>
                <img className="object-contain mx-[15vw] max-h-[60vh] w-[50vw]" src={image1} alt="" />
                <button className="min-w-[20vw] p-[1%] mx-auto my-2.5 justify-self-center bg-[#C47C74] hover:bg-[#B90827] rounded-md transition-all duration-300 shadow-lg hover:scale-105 hover:shadow-xl">
                    Register Now
                </button>
                <div className="flex justify-center">
                    <div className="font-appetite mx-auto">
                        <div className="font-onejinja text-xl">Prize:</div>
                        Winner: 40,000/-
                        <br />
                        Runner Up: 25,000/-
                    </div>
                    <div className="font-appetite mx-auto">
                        Entry Fees:
                        3,000/-
                    </div>
                </div>
                <div className="w-[48vw] mx-auto mt-2.5">
                    <div className="font-onejinja text-xl text-left mb-2.5">Process</div>
                    <div className="font-appetite text-left mx-auto mb-2.5">
                        The competition will be held in two rounds: <br />
                        1. Offline/Online Elimination Round <br />
                        2. Final Round
                    </div>
                    <div className="mx-auto">
                        <div className="font-appetite text-left mx-auto mb-2.5">
                            Offline Elimination Round: <br />
                            1. Same as the rules of Final Round. <br />
                            2. The registration fee will only be refunded if you are eliminated.
                        </div>
                        <div className="font-appetite text-left mx-auto mb-2.5">
                            Online Elimination Round: <br />
                            1. Participating teams should submit a video of their previous or recent performance without editing. <br />
                            2.  It must be at most 8 minutes long.. <br />
                            3. The registration fee will only be refunded if you are eliminated.
                        </div>
                    </div>
                    <div className="font-onejinja text-xl text-left mb-2.5">
                        Final Round:
                    </div>
                    <div className="font-appetite text-left mx-auto mb-2.5">
                        1. The time limit for the performance, from an empty space to an empty space is 15 minutes. <br />
                        2. The maximum group limit is 16 and the minimum is 4. <br />
                        3. Metal music is prohibited in the competition. <br />
                        4.The organizers will provide teams with a drum set and sound
                        system. <br />
                        5.Any other instruments that need to be used will have to be
                        managed by the participating team itself. <br />
                        6. Teams exceeding 15 minutes will lose all the points allocated for the time criteria and any other points lost will be at the discretion of the judges
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeadBang;
