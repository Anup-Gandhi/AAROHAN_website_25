import React from "react";
import image1 from "./assets/Comp_Insync.png";
import { Link } from "react-router-dom";
import close from "./assets/cross.png";

const Insync = () => {
    return (
        <div className="w-[80vw] h-[80vh] laptop:h-[90vh] mx-[10vw] overflow-x-hidden overflow-y-scroll hide-scrollbar rounded-3xl laptop:my-[5vh] mobile:my-[10vh] fixed top-0 z-10 bg-white-custom ">
            <Link to="../">
                <button className="fixed top-[12vh] laptop:top-[8vh] right-[12vw] hover:scale-110 text-white text-lg self-center">
                    <img src={close} alt="close" className="max-w-[10vw] h-7 z-50" />
                </button>
            </Link>
            <div className="pt-[5vh] laptop:pt-[9vh] grid h-[75vh]">
                <div className="font-Uchiyama text-4xl text-center mb-2.5">
                    In Sync
                </div>
                <img className="object-contain mx-[15vw] max-h-[60vh] w-[50vw]" src={image1} alt="" />
                <button className="min-w-[20vw] p-[1%] mx-auto my-2.5 justify-self-center bg-[#C47C74] hover:bg-[#B90827] rounded-md transition-all duration-300 shadow-lg hover:scale-105 hover:shadow-xl">
                    Register Now
                </button>
                <div className="flex justify-center">
                    <div className="font-appetite mx-auto">
                        <div className="font-Uchiyama text-xl">Prize:</div>
                        Winner: 35,000/-
                        <br />
                        Runner Up: 20,000/-
                    </div>
                    <div className="font-appetite mx-auto">
                        Entry Fees:
                        2,500/-
                    </div>
                </div>
                <div className="w-[48vw] mx-auto mt-2.5">
                    <div className="font-Uchiyama text-xl text-left mb-2.5">Process</div>
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
                           2. It must be at most 4 minutes long. <br />
                            3. The registration fees will only be refunded if you are eliminated.
                        </div>
                    </div>
                    <div className="font-Uchiyama text-xl text-left mb-2.5">
                        Final Round:
                    </div>
                    <div className="font-appetite text-left mx-auto mb-2.5">
                    1. The time limit for performances, from an empty stage to an empty stage is 8 minutes. <br />
                    2. The maximum group limit is 16 and the minimum group limit is 6. <br /> 
                    3. Open flames and live animals are not allowed onstage for your performance. <br />
                    4. A proper level of decency should be maintained in terms of costumes and apparel. <br />
                    5. Teams need to get their costumes approved before the event. <br />
                    6. Bring your track on the pen drive. <br />
                    7. It is advisable to keep a copy of your track on your phone and in your email. <br />
                    8. Any props or other materials that need to be used must be managed by the participating team themselves. The organizers will not provide any props or materials. <br />
                    9. Powder/liquid props are not allowed. <br />
                    10.Teams exceeding 8 minutes will lose all the points allocated for the time criteria and any other points lost will be at the discretion of the judges. <br />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Insync;
