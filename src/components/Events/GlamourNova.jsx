import React from "react";
import glamourImage from "./assets/Comp_Glamour_nova.png"; // Replace with the actual image for Glamour Nova
import { Link } from "react-router-dom";
import close from "./assets/cross.png";

const GlamourNova = () => {
    return (
        <div className="w-[80vw] h-[80vh] laptop:h-[90vh] mx-[10vw] overflow-x-hidden overflow-y-scroll hide-scrollbar rounded-3xl laptop:my-[5vh] mobile:my-[10vh] fixed top-0 z-10 bg-white-custom">
        <Link to="../">
            <button className="fixed top-[12vh] laptop:top-[8vh] right-[12vw] hover:scale-110 text-white text-lg self-center">
                <img src={close} alt="close" className="max-w-[10vw] h-7 z-50"/>
            </button>
        </Link>
        <div className="pt-[5vh] laptop:pt-[9vh] grid h-[75vh]">
            <div className="font-onejinja text-4xl text-center mb-2.5">
                Glamour Nova
            </div>
            <img className="object-contain mx-[15vw] max-h-[60vh] w-[50vw]" src={glamourImage} alt="" />
            <button className="min-w-[20vw] p-[1%] mx-auto my-2.5 justify-self-center bg-[#C47C74] hover:bg-[#B90827] rounded-md transition-all duration-300 shadow-lg hover:scale-105 hover:shadow-xl ">
                Register Now
            </button>
            <div className="flex justify-center">
                <div className="font-appetite mx-auto">
                    <div className="font-onejinja text-xl">Prize:</div>
                    Winner (Male): 14,000/- 
                    Runner Up (Male): 10,000/- <br />
                    Winner (Female): 14,000/- 
                    Runner Up (Female): 10,000/-
                </div>
                <div className="font-appetite mx-auto">
                    Entry Fees:
                    700/-
                </div>
            </div>
            <div className="w-[48vw] mx-auto mt-2.5">
                <div className="font-onejinja text-xl text-left mb-2.5">
                    Rules:
                </div>
                <div className="font-appetite text-left mx-auto mb-2.5">
                1. There will be two rounds for all the participants. <br />
                2. The time limit for performances including introduction is 5 minutes. <br />
                3. Kindly provide your body measurements for the outfit. <br />
                4. The participants must bring their make-up for their concerned
                safety. The participants must come to MIT-WPU campus on a
                given date and time for fitting purposes. <br />
                5. The organizers will not be responsible for any delays of the
                pageant. <br />
                6. Please maintain decency in every prospect
                </div>
            </div>
        </div>
    </div>
    );
};

export default GlamourNova;
