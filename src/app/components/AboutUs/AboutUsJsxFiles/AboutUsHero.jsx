import React from "react";
import { BsCopy } from "react-icons/bs";
import { FaClipboardList } from "react-icons/fa";
import { LuSquareDashedMousePointer } from "react-icons/lu";
import { GiStarsStack } from "react-icons/gi";
import Image from "next/image";
import { Barlow } from "next/font/google";

import aboutusImage from '../../../../../public/images/workpageimage/Image.png'

const barlow = Barlow({
  weight: "600",
  subsets: ["latin"],
});

function AboutUsHero() {
  return (
    <div className="bg-[#191919]">
      <div className="max-w-[1596px] mx-auto    ">
        <div className=" h-full lg:h-[650px] xl:h-[770px] px-4 lg:px-24 xl:px-36 py-10 lg:py-20 xl:py-24 grid lg:grid-cols-2 justify-center items-center gap-10 lg:gap-24 border border-[#222222]">
            {/* text site */}
            <div>
                <h2  className={`text-[${barlow.className}] text-3xl  lg:text-4xl xl:text-5xl font-semibold text-white`}>About SquareUp</h2>
                <p  className={`text-[${barlow.className}]  text-[14px] lg:text-[16px] xl:text-[20px] font-normal  text-[#E6E6E6] pt-5 leading-8`}>SquareUp is a digital product agency that is passionate about crafting exceptional digital experiences. We specialize in design, engineering, and project management, helping businesses thrive in the digital landscape. At SquareUp, we follow a structured and collaborative process to ensure the successful delivery of exceptional digital products. Our process combines industry best practices, creative thinking, and a client-centric approach.</p>
            </div>
            {/* image site */}
            <div>
                <Image src={aboutusImage} className=" w-full lg:w-[490px] xl:w-full h-[300px] lg:h-[480px] xl:h-[571px] rounded-2xl"></Image>
            </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUsHero