import React from "react";

function Sponsors() {
  const row1 = [
    "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/7ae42bac3b34999c0db3.png",
    "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/b2bd91d7b87b2181ca45.png",
    "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/6591cdc0702b32310306.png",
    "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/3b7d9f4b073deb6a9b74.png",
    "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/3cd767dea94a85078ca4.png",
    "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/a2b3c3709ffedce2a22a.png",
  ];

  const row2 = [
    "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/6c585c33ca6c71c79bb7.png",
    "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/9dd55e54b5a28658bf4e.png",
    "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/0384060dcbf73b6a707c.png",
    "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/35e044b3354aaa0caed5.png",
    "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/f50ae7cbf6cc805bdadc.png",
    "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/6c585c33ca6c71c79bb7.png",
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
                <img src={el} className="object-contain w-full h-full rounded-lg bg-white bg-opacity-50 shadow-lg p-5" alt="" />
              </div>
            ))}
          </div>
          <div className="flex flex-nowrap animate-marquee">
            {row1.map((el, index) => (
              <div key={index} className="flex justify-center items-center w-[clamp(10rem,1rem+40vmin,30rem)] p-[calc(clamp(10rem,1rem+30vmin,30rem)/10)]">
                <img src={el} className="object-contain w-full h-full rounded-lg bg-white bg-opacity-50 shadow-lg p-5" alt="" />
              </div>
            ))}
          </div>
        </div>

        {/* Marquee 2 */}
        <div className="flex w-[70vw] overflow-hidden user-select-none">
          <div className="flex flex-nowrap animate-marquee-reverse">
            {row2.map((el, index) => (
              <div key={index} className="flex justify-center items-center w-[clamp(10rem,1rem+40vmin,30rem)] p-[calc(clamp(10rem,1rem+30vmin,30rem)/10)]">
                <img src={el} className="object-contain w-full h-full rounded-lg bg-white bg-opacity-50 shadow-lg p-5" alt="" />
              </div>
            ))}
          </div>
          <div className="flex flex-nowrap animate-marquee-reverse">
            {row2.map((el, index) => (
              <div key={index} className="flex justify-center items-center w-[clamp(10rem,1rem+40vmin,30rem)] p-[calc(clamp(10rem,1rem+30vmin,30rem)/10)]">
                <img src={el} className="object-contain w-full h-full rounded-lg bg-white bg-opacity-50 shadow-lg p-5" alt="" />
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