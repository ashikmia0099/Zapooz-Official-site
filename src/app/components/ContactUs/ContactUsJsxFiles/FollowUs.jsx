import React from "react";
import { Barlow } from "next/font/google";
import { FaPaintBrush } from "react-icons/fa";
import { FaPuzzlePiece } from "react-icons/fa6";
import { FaBriefcase } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

const barlow = Barlow({
  weight: "600",
  subsets: ["latin"],
});

function FollowUs() {
  return (
    <div className="bg-[#191919] hidden lg:flex">
      <div className="max-w-[1596px] mx-auto  border-l border-r border-b border-[#222222] w-full  ">
        <div className=" py-12 px-12">
         <div className=" flex items-center justify-center gap-20">
             {/* first */}
          <div>
            <div className=" flex items-center justify-around gap-6">
              
              <div className=" border-r border-[#222222]">
                  <p className=" text-white text-2xl lg:text-[16px] xl:text-2xl font-[400]">Operating Days</p>
              </div>
              <div className="">
                <button className="btn text-2xl lg:text-[16px] xl:text-2xl font-[400] bg-[#262626] rounded-[12px]  border border-[#222222] text-white h-14 shadow-2xs">
                  
                  Monday to Friday
                </button>
              </div>
            </div>
          </div>
          {/* second */}
          <div>
            <div className=" lg:flex items-center justify-center gap-6 ">
              <div>
                <button className="btn text-2xl lg:text-[16px] xl:text-2xl font-[400] bg-[#262626] rounded-[12px]  border border-[#222222] text-white h-14 shadow-2xs ">
                    <span>Stay connected us</span>
                  <span className=" btn text-xl font-[400] bg-[#535353] rounded-[12px]  border border-[#222222] text-white  shadow-2xs flex justify-center items-center pl-7">
                    <FaFacebook className=" text-[#9EFF00] mr-3 flex justify-center items-center" />
                  </span>
                  <span className=" btn text-xl font-[400] bg-[#535353] rounded-[12px]  border border-[#222222] text-white  shadow-2xs flex justify-center items-center pl-7">
                    <FaXTwitter className=" text-[#9EFF00] mr-3" />
                  </span>
                  <span className=" btn text-xl font-[400] bg-[#535353] rounded-[12px]  border border-[#222222] text-white  shadow-2xs flex justify-center items-center pl-7">
                    <FaLinkedin className=" text-[#9EFF00] mr-3" />
                  </span>
                  
                </button>
              </div>
              
            </div>
          </div>
         </div>
        </div>
        
      </div>
    </div>
  );
}

export default FollowUs;
