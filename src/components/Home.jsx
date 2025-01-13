import React from "react";
import "./home.css"
import image2 from "../assets/Image2.png";
import image3 from "../assets/Image3.png";
import image4 from "../assets/Image4.png";
import image5 from "../assets/Image5.png";
import image6 from "../assets/Image6.png";
import image7 from "../assets/Image7.png";
import colleges from "../assets/stats_colleges.gif";
import footfall from "../assets/stats_footfall.gif";
import prizes from "../assets/stats_cashprize.gif";
import reach from "../assets/stats_reach.gif";

import instagram from "../assets/instagram.png"
import facebook from "../assets/facebook.png"
import twitter from "../assets/twitter.png"
import youtube from "../assets/youtube.png"
import video_lbg from "../assets/landscape_bg.mp4"
import video_mbg from "../assets/protait_bg.mp4"
import sc_01 from "../assets/sc_01.jpg";
import sc_02 from "../assets/sc_02.jpg";
import sc_03 from "../assets/sc_03.jpeg";
import sc_04 from "../assets/sc_04.png";
import Footer from "./footer";



function Home() {
  const row2 = [
    sc_01,
    sc_02,
    sc_03,
    sc_04,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
  ];

  return (
    <>
    <div className=" h-screen w-screen bg-no-repeat bg-cover bg-center inset-0 flex justify-center fixed">
    <video className="mobile:hidden w-[100vw] m-o object-cover" src={video_lbg} autoPlay loop muted />
    <video className="laptop:hidden w-[100vw] m-o object-cover" src={video_mbg} autoPlay loop muted />
        <div className="fixed bottom-[1.5vh] left-[1.5vw] inline-block ">
        <img className="h-[6vh] laptop:max-w-[6vw] laptop:max-h-[6vw] my-[1vh] bg-white-custom rounded-full hover:scale-110 transform transition-all" src={instagram} alt="" />
        <img className="h-[6vh] laptop:max-w-[6vw] laptop:max-h-[6vw] my-[1vh] bg-white-custom rounded-full hover:scale-110 transform transition-all" src={facebook} alt="" />
        <img className="h-[6vh] laptop:max-w-[6vw] laptop:max-h-[6vw] my-[1vh] bg-white-custom rounded-full hover:scale-110 transform transition-all" src={youtube} alt="" />
        <img className="h-[6vh] laptop:max-w-[6vw] laptop:max-h-[6vw] my-[1vh] bg-white-custom rounded-full hover:scale-110 transform transition-all" src={twitter} alt="" />
        </div>
    </div>
    <div className="about absolute left-0 bg-cover bg-no-repeat" style={{top: '100vh'}}>  
      <div id="aboutus" className="overflow-hidden justify-center h-auto bg-black bg-opacity-50 text-white w-[70vw] max-h-[75h] mx-[15vw] mt-[10vh] rounded-[20px] bg-center bg-no-repeat bg-local">
        <div className="title font-LaOriental text-4xl text-center justify-self-center m-0 mt-2.5 ">
            About Us
        </div>
        <div className="font-appetite text-xl pb-[5vh] m-[5vh] mx-[1.5vh]">
          Everything has its starting point, and its own story, and just like that the annual cultural fest of MIT World Peace University, Aarohan, has its own beginning and a unique story. Aarohan had its outset in the year 2014, founded by a group of passionate and spirited individuals at MIT College of Engineering. By the students, for the students is what Aarohan believes in and that's what makes it exceptional. We feel honored and privileged to host magnificent events such as Pronite, Comedy Nite, Theatre fest, and Youtuber fest along with various Cultural competitions for the young artists to provide them with a platform that is cultured, artistically inspired, and graceful. Throughout its legacy of 10 years, Aarohan has strived to set a new standard every year. Aarohan is a moment to live in, a time to remember, and a place to thrive in.        
        </div>
      </div> 
        <div id="Theme" className="overflow-hidden justify-center h-auto bg-black bg-opacity-50 text-white w-[70vw] max-h-[75h] mx-[15vw] mt-[10vh] rounded-[20px] bg-center bg-no-repeat bg-local">
          <div className="font-LaOriental title text-4xl text-center justify-self-center m-0 mt-2.5 ">
              Our theme
          </div>
          <div className="font-LaOriental title text-4xl text-center justify-self-center m-[3.5%]">
              Cascades Of The Oriental Mystique
          </div>
          <div className="font-appetite text-xl pb-[5vh] m-[5vh] mx-[1.5vh]">
                This theme explores Japan’s unique blend of ancient traditions and modern innovation. From Zen gardens to neon-lit cities, cherry blossoms to towering skyscrapers, Japan harmonizes the old and new. The elegance of the tea ceremony and calligraphy coexist with robotics, cyberpunk culture, and futuristic tech.
<br />
                This theme invites us to reimagine the balance between Japan’s rich heritage and its forward-thinking creativity, where history, spirituality, and innovation come together in an ever-evolving landscape.
          </div>
        </div>
        <div id="Stats" className="overflow-hidden justify-center h-auto bg-black bg-opacity-50 text-white w-[70vw] max-h-[75h] mx-[15vw] mt-[10vh] rounded-[20px] bg-center bg-no-repeat bg-local">
          <div className="font-LaOriental title text-4xl text-center justify-self-center m-0 mt-2.5 ">
              Statistics
          </div>
          <div className="grid grid-cols-4 gap-[2.5vw] text-center text- mb-[5vh] justify-center pb-[2%]">
            <div className="font-bold font-appetite col-span-2 lg:col-span-1 transition-transform duration-200 ease-in-out hover:scale-110"><img className="w-[15vw] h-[15vw] object-contain justify-center justify-self-center" src={colleges} alt="" /><p>150+</p><p>Colleges</p></div>
            <div className="font-bold font-appetite col-span-2 lg:col-span-1 transition-transform duration-200 ease-in-out hover:scale-110"><img className="w-[15vw] h-[15vw] object-contain justify-center justify-self-center" src={footfall} alt="" /><p>40K+</p><p>Footfall</p></div>
            <div className="font-bold font-appetite col-span-2 lg:col-span-1 transition-transform duration-200 ease-in-out hover:scale-110"><img className="w-[15vw] h-[15vw] object-contain justify-center justify-self-center" src={prizes} alt="" /><p>1M+</p><p>Cashprize</p></div>
            <div className="font-bold font-appetite col-span-2 lg:col-span-1 transition-transform duration-200 ease-in-out hover:scale-110"><img className="w-[15vw] h-[15vw] object-contain justify-center justify-self-center" src={reach} alt="" /><p>15000K+</p><p>Reach</p></div>
          </div>
        </div>
        <div id="vision" className="overflow-hidden justify-center h-auto bg-black bg-opacity-50 text-white w-[70vw] max-h-[75h] mx-[15vw] mt-[10vh] rounded-[20px] bg-center bg-no-repeat bg-local">
            <div className="font-LaOriental title text-4xl text-center justify-self-center m-0 mt-2.5 ">
            VISION AND MISSION
          </div>
          <div className="font-appetite text-xl pb-[5vh] m-[5vh] mx-[1.5vh]">
            The grandest fest of Pune, MIT WPU Aarohan marks a 11 years of culture and tradition with its most monumental rendition yet. 
                          Boasting multiple competitions and events with esteemed guests of honor as well as judges, Aarohan stays true to its name and 
                          raises the bar year after year. The youthful and enthusiastic crowd sets an scintillating atmosphere that encapsulates the true essence 
                          of college life. The fest is by the students, for the students as each and every aspect of the event from the financing, management, designing, 
                          and decoration is handled by the students themselves. This promotes holistic personality development of the students while inculcating productivity, 
                          time management, decision making and discipline in them. Meanwhile, the entire fest is a non profitable event, as all the funds are utilised to facilitate 
                          the participants and the audience with no intent of financial gain. With events like Run For A Cause (Marathon), MIT WPU Aarohan gives back to the society 
                          by utilising all of its proceedings to charity, in sponsoring the education of the underprivileged children. Blood Donation and Tree Plantation drives are 
                          some of the camps organised to spread awareness about social issues, widening the net positive social footprint of Aarohan. To an invigorating and vibrant 
                          fest, we cordially invite you.
            </div>
        </div>
        <div className="flex mx-[15vw] w-[70vw]  bg-black bg-opacity-50 overflow-hidden user-select-none mt-[10vh] mb-[10vh] rounded-[20px]">
          <div className="flex flex-nowrap animate-marquee">
            {row2.map((el, index) => (
              <div key={index} className="flex justify-center items-center w-[clamp(10rem,1rem+40vmin,30rem)] p-[calc(clamp(10rem,1rem+30vmin,30rem)/15)]">
                <img src={el} className="object-contain w-full max-h-[25vh] rounded-lg shadow-lg p-5 bg-white bg-opacity-25" alt="" />
              </div>
            ))}
          </div>
          <div className="flex flex-nowrap animate-marquee">
            {row2.map((el, index) => (
              <div key={index} className="flex justify-center items-center w-[clamp(10rem,1rem+40vmin,30rem)] p-[calc(clamp(10rem,1rem+30vmin,30rem)/15)]">
                <img src={el} className="object-contain w-full max-h-[25vh] rounded-lg shadow-xl p-5 bg-white bg-opacity-25" alt="" />
              </div>
            ))}
          </div>
        </div>
        <Footer />
      </div>

    </>
  );
};

export default Home;
