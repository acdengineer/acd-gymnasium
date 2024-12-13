import React from "react";
import Buttton from "./Buttton";
const Hero = () => {
  return (
    <>
      <div
        className='h-screen bg-cover bg-fixed text-white bg-green-400
        bg-center bg-[url("https://wallpapercave.com/wp/wp80979.jpg")]'
      >
        <div className="p-4 text-4xl gap-10 flex min-h-screen flex-col justify-center items-center">
          <p>IT'S TIME TO GET</p>
          <h1
            className="uppercase font-bold text-4xl 
          sm:text-5xl md:text-6xl lg:text-7xl"
          >
            ACD<span className="text-blue-500">gymnasium</span>
          </h1>
          <p className="text-sm md:text-base font-light">
            Strength doesn’t come from what{" "}
            <span className="text-blue-300 font-medium"> you </span>can do it
            comes from overcoming the things
            <span className="text-blue-300 font-medium"> you </span>thought you couldn’t.
          </p>
          <Buttton
            func={() => {
              window.location.href = "#generate";
            }}
            text={"Accept & Begin"}
          />
        </div>
      </div>
    </>
  );
};
export default Hero;
