import React from "react";
import { Link } from "react-router-dom";
import Instagram from "../../assets/Social Icons (1).svg";
import Linkedin from "../../assets/Social Icons (2).svg";
import Twitter from "../../assets/Social Icons.svg";
import Facebook from "../../assets/Social Icons (3).svg";

export default function Main() {
  return (
    <>
      <div className="mt-10">
        <div className="w-1/2 text-center text-[#4D4D4D] flex flex-col h-80  mx-auto justify-center mt-10   ">
          <h2 className="text-5xl font-medium ">
            Discover what drives{" "}
            <span className="text-[#4C2CFF]">engagement </span>
            With Better Insights!
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
        <Link to={"/bot"}>
        <button className="bg-[#434343] px-4 p-1 rounded-lg text-white  bg-zinc-800 hover:bg-zinc-800
          text-white 
          px-4 py-2 
          rounded-xl 
          transition-all duration-300 ease-in-out
          shadow-md hover:shadow-lg	 ">
            Get Started
        </button>
            </Link>
      </div>
    </>
  );
}
