import React from "react";
import image1 from "./assets/Comp_Humming.png"; // Replace with the actual image for Humming
import { Link } from "react-router-dom";
import close from "./assets/cross.png";

const Humming = () => {
    return (
        <div className="w-[80vw] h-[80vh] laptop:h-[90vh] mx-[10vw] overflow-x-hidden overflow-y-scroll hide-scrollbar rounded-3xl laptop:my-[5vh] mobile:my-[10vh] fixed top-0 z-10 bg-white-custom ">
            <Link to="../">
                <button className="fixed top-[12vh] laptop:top-[8vh] right-[12vw] hover:scale-110 text-white text-lg self-center">
                    <img src={close} alt="close" className="max-w-[10vw] h-7 z-50"/>
                </button>
            </Link>
            <div className="pt-[5vh] laptop:pt-[9vh] grid h-[75vh]">
                <div className="font-onejinja text-4xl text-center mb-2.5">
                    Humming
                </div>
                <img className="object-contain mx-[15vw] max-h-[60vh] w-[50vw]" src={image1} alt="" />
                <button className="min-w-[20vw] p-[1%] mx-auto my-2.5 justify-self-center bg-[#C47C74] hover:bg-[#B90827] rounded-md transition-all duration-300 shadow-lg hover:scale-105 hover:shadow-xl ">
                    Register Now
                </button>
                <div className="flex justify-center">
                    <div className="font-appetite mx-auto">
                        <div className="font-onejinja text-xl">Prize:</div>
                        Winner: 14,00/-
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
                        Process
                    </div>
                    <div className="font-appetite text-left mx-auto mb-2.5">
                        The competition will be held in two rounds: <br />
                        1. Offline/Online Elimination Round <br />
                        2. Final Round
                    </div>
                    <div className="mx-auto">
                        <div className="font-appetite text-left mx-auto mb-2.5">
                            Online Elimination Round: <br />
                            1. Participating teams should submit a video of their performance without editing. <br />
                            2. The video must be 90 seconds long. <br />
                            3. The registration fee will only be refunded if you are eliminated.
                        </div>
                    </div>
                    <div className="font-onejinja text-xl text-left mb-2.5">
                        Final Round:
                    </div>
                    <div className="font-appetite text-left mx-auto mb-2.5">
                        1. The time limit for the performance from an empty stage to an empty stage is 3 minutes. <br />
                        2. A proper level of decency must be maintained in terms of costumes and apparel. <br />
                        3. Get a your sound track on a pen drive. <br />
                        4. It is advisable to keep a copy of your track on your phone andin the mail too. <br />
                        5. Any props or other materials that need to be used must be managed by the participants themselves. You will have to inform the organizers about the props beforehand. The organizers will not provide any props or materials. <br />
                        6. Powder/liquid props are not allowed. <br />
                        7. Performances exceeding 3 minutes will lose all the points allocated for the time criteria and any other points lost will be at the discretion of the judges.
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Humming;
