import React from "react";
import { Link } from "react-router-dom";
import Instagram from "../../assets/Social Icons (1).svg";
import Linkedin from "../../assets/Social Icons (2).svg";
import Twitter from "../../assets/Social Icons.svg";
import Facebook from "../../assets/Social Icons (3).svg";
import { BsStars } from "react-icons/bs";


export default function Main() {
  return (
    <>
      <div className="mt-20 flex flex-col">
      <div className="w-1/2  mx-auto mt-12 border flex justify-center items-center p-2 rounded-full  w-48 space-x-4 ">
                <BsStars className="text-red-500 rounded-lg text-3xl" />{" "}
                <span className="text-lg font-bold text-slate-700">AI Assisted</span>
              </div>
        <div className="w-3/5 text-center text-[#4D4D4D] flex flex-col h-80  mx-auto justify-center  gap-5  ">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none ">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fccb90] to-[#d57eeb]">Discover</span> what drives{" "}
            <span className="text-[#4C2CFF]">engagement </span>
            With Better Insights <span className="text-orange-500"> !</span>
          </h2>
          <div>
            <p className="text-[#6C6C6C] text-xl font-medium">Across</p>
          </div>

        <div className="flex  justify-center space-x-10 w-fit mx-auto mt-2 size-16">
            <img src={Twitter} alt="" />
            <img src={Instagram} alt="" />
            <img src={Linkedin} alt="" />
            <img src={Facebook} alt="" />
        </div>
        </div>
      </div>
      <div  className="mx-auto w-fit">
        <Link to="/bot">
        <button className="bg-[#434343] px-4 p-1 rounded-lg text-white  bg-zinc-800 hover:bg-zinc-800
          text-white 
          px-4 py-2 
          rounded-xl 
          transition-all duration-300 ease-in-out
          shadow-md hover:shadow-lg hover:scale-125 hover:shadow-lg hover:shadow-gradient transition-all duration-300 ">
            Get Started
        </button>
            </Link>
      </div>
    </>
  );
}
