import React from "react";
import { BsCopy } from "react-icons/bs";
import { FaClipboardList } from "react-icons/fa";
import { LuSquareDashedMousePointer } from "react-icons/lu";
import { GiStarsStack } from "react-icons/gi";
import Image from "next/image";
import { Barlow } from "next/font/google";

import logoimage from "../../../../public/images/workpageimage/Image.png";

const barlow = Barlow({
  weight: "600",
  subsets: ["latin"],
});

function FooterHero() {
  return (
   <div className="bg-[#191919]">
         <div className="max-w-[1596px] mx-auto pt-10 lg:pt-32 border border-[#222222]  ">
           <div className="border-b border-[#222222] pb-12 px-4 lg:px-12 h-full lg:h-[350px] xl:h-[471px] p-2 lg:p-20">
             <div className=" block lg:flex items-center justify-center gap-10 ">
               {/* image  */}
               <div className=" flex justify-center mx-auto">
                 <Image
                   src={logoimage}
                   className=" h-36 w-40 lg:h-24 lg:w-24 xl:h-36 xl:w-40 lg:rounded-sm rounded-[20px] xl:rounded-[20px] "
                 ></Image>
               </div>
               {/* text */}
               <div className=" pt-6 lg:pt-0">
                 <h2
                   className={`text-[${barlow.className}] text-xl lg:text-2xl xl:text-3xl font-medium text-[#E6E6E6] text-center lg:text-left pb-2`}
                 >
                   Today, SquareUp Continues to Thrive as a Leading Digital Product
                   Agency.....
                 </h2>
                 <p
                   className={`text-[${barlow.className}] text-[14px] lg:text-[16px] xl:text-[20px] font-normal  text-[#E6E6E6] text-center lg:text-left pt-6 lg:pt-0`}
                 >
                   Combining the power of design, engineering, and project
                   management to create transformative digital experiences. They
                   invite you to join them on their journey and discover how they
                   can help bring your digital ideas to life.
                 </p>
               </div>
             </div>
             <div className=" h-full lg:h-28 w-full bg-[#242424] rounded-xl mt-12 block lg:flex  items-center justify-around p-5 px-0 lg:px-4 xl:px-10" >
               <div>
                 <p
                   className={`text-[${barlow.className}] text-[20px] lg:text-[16px] xl:text-[20px] font-normal  text-[#aaaaaa] lg:text-left text-center`}
                 >
                   Welcome to SquareUp
                 </p>
               </div>
               <div className=" m-2 lg:m-0 my-5 lg:my-0">
                 <button className="btn text-[14px] lg:text-[12px] xl:text-[20px] font-normal bg-[#333333] rounded-[12px] border border-[#222222] text-white h-full lg:h-14 shadow-2xs px-4 py-5 lg:px-0 lg:py-0">
                 Where collaboration, Expertise, and Client-Centricity Intersect to Shape the Future of Digital Innovation.
                 </button>
               </div>
               <div className=' flex items-center justify-center'>
                   <button className=' h-16 w-44 lg:w-28 lg:h-12 xl:h-16 xl:w-44 bg-[#9EFF00] rounded-[8px] shadow-2xs border-none text-lg lg:text-[14px] lg:text-lg font-medium'>Start Project</button>
                 </div>
             </div>
           </div>
         </div>
       </div>
  )
}

export default FooterHero