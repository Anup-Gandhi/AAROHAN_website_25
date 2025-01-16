import React from "react";
import image1 from "./assets/pro1.png"; // Replace with the actual image for Humming
import { Link } from "react-router-dom";
import close from "./assets/cross.png";

const Pronite = () => {
    return (
        <div className="w-[80vw] h-[80vh] laptop:h-[90vh] mx-[10vw] overflow-x-hidden overflow-y-scroll hide-scrollbar rounded-3xl laptop:my-[5vh] mobile:my-[10vh] fixed top-0 z-10 bg-white-custom ">
            <Link to="../">
                <button className="fixed top-[12vh] laptop:top-[8vh] right-[12vw] hover:scale-110 text-white text-lg self-center">
                    <img src={close} alt="close" className="max-w-[10vw] h-7 z-50"/>
                </button>
            </Link>
            <div className="pt-[5vh] laptop:pt-[9vh] grid h-[75vh]">
                <div className="font-Uchiyama text-4xl text-center mb-2.5">
                    Pronite
                </div>
                <img className="object-contain mx-[15vw] max-h-[60vh] w-[50vw]" src={image1} alt="" />
                <button className="min-w-[20vw] p-[1%] mx-auto my-2.5 justify-self-center bg-[#C47C74] hover:bg-[#B90827] rounded-md transition-all duration-300 shadow-lg hover:scale-105 hover:shadow-xl ">
                    Register not open yet
                </button>
                <div className="w-[48vw] mx-auto mt-2.5">
                    <div className="font-Akaya_Telivigala text-left mx-auto mb-2.5">
                    An evening full of euphoria, the Pronite is back again in the 12th version of MIT WPU Aarohan. It is the conclusion and the crescendo to the fest's three days. It captures the essence and the passion of the fest invested in by the students for the last six months nearing its end. We have had Mithoon, Asees Kaur Papon, Ash King, The Local Train and much more grace our stages with their performances.Entry is open to all, but you better hurry as the venue is packed with enthusiastic fans. So buckle up for the last destination on the roller coaster of Aarohan, Pronite.
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Pronite;
