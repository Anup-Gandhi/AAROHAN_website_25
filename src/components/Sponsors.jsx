import React from "react";

function Sponsors() {
  const row1 = [
    "https://i.ibb.co/gm2B97d/Zee-24-taas.webp",
    "https://i.ibb.co/WHTz47L/sponsor-Radio-City.png",
    "https://i.ibb.co/qydGP0R/sponsor-wox.png",
    "https://i.ibb.co/wB6Kxs3/sponsor-VLCC.png",
    "https://i.ibb.co/QDB0Bq8/sponsor-T-I-M-E.png",
    "https://i.ibb.co/88hmVzB/sponsor-TFW.png",
  ];

  const row2 = [
    "https://i.ibb.co/0h0YT7g/image.png",
    "https://i.ibb.co/m464mLP/sponsor-ktm.png",
    "https://i.ibb.co/PTg7Pxf/sponsor-leonel.png",
    "https://i.ibb.co/Vv5tQhS/sponsor-Naturals-Ice-Cream.png",
    "https://i.ibb.co/6ybsTcs/Quick-Heal.png",
    "https://i.ibb.co/d0wkYN6/sponsor-orchid-hotel.png",
  ];

  return (
    <div className=" bg-sponsors bg-cover w-[100vw] bg-center h-screen flex items-center justify-center text-black relative">
      <div className="w-full flex flex-col items-center justify-center">
        <div className="text-4xl font-onejinja mb-2 mt-[10vh] bg-black bg-opacity-20 rounded-xl py-[0.5vh] px-[2%] text-white">Sponsors</div>
        <div className="text-lg font-appetite mb-[5vh] text-black">We’ve had many well-known and famous sponsors over the years, and here’s a glimpse of them. 
        </div>
        <div className="bg-black bg-opacity-20 shadow-xl rounded-3xl px-[5vw] py-[5vh]">
        {/* Marquee 1 */}
        <div className="flex w-[70vw]  overflow-hidden user-select-none">
          <div className="flex flex-nowrap animate-marquee">
            {row1.map((el, index) => (
              <div key={index} className="flex justify-center items-center w-[clamp(10rem,1rem+40vmin,30rem)] p-[calc(clamp(10rem,1rem+30vmin,30rem)/10)]">
                <img src={el} className="max-h-[18vh] object-contain w-full h-full rounded-lg bg-white bg-opacity-50 shadow-lg px-5 py-1" alt="" />
              </div>
            ))}
          </div>
          <div className="flex flex-nowrap animate-marquee">
            {row1.map((el, index) => (
              <div key={index} className="flex justify-center items-center w-[clamp(10rem,1rem+40vmin,30rem)] p-[calc(clamp(10rem,1rem+30vmin,30rem)/10)]">
                <img src={el} className="max-h-[18vh] object-contain w-full h-full rounded-lg bg-white bg-opacity-50 shadow-lg px-5 py-1" alt="" />
              </div>
            ))}
          </div>
        </div>

        {/* Marquee 2 */}
        <div className="flex w-[70vw] overflow-hidden user-select-none">
          <div className="flex flex-nowrap animate-marquee-reverse">
            {row2.map((el, index) => (
              <div key={index} className="flex justify-center items-center w-[clamp(10rem,1rem+40vmin,30rem)] p-[calc(clamp(10rem,1rem+30vmin,30rem)/10)]">
                <img src={el} className="max-h-[18vh] object-contain w-full h-full rounded-lg bg-white bg-opacity-50 shadow-lg px-5 py-1" alt="" />
              </div>
            ))}
          </div>
          <div className="flex flex-nowrap animate-marquee-reverse">
            {row2.map((el, index) => (
              <div key={index} className="flex justify-center items-center w-[clamp(10rem,1rem+40vmin,30rem)] p-[calc(clamp(10rem,1rem+30vmin,30rem)/10)]">
                <img src={el} className="max-h-[18vh] object-contain w-full h-full rounded-lg bg-white bg-opacity-50 shadow-lg px-5 py-1" alt="" />
              </div>
            ))}
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Sponsors;