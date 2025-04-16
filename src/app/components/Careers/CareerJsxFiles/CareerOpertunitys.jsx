import React from "react";
import { BsCopy } from "react-icons/bs";
import { FaClipboardList } from "react-icons/fa";
import { LuSquareDashedMousePointer } from "react-icons/lu";
import { GiStarsStack } from "react-icons/gi";
import Image from "next/image";
import { Barlow } from "next/font/google";

const barlow = Barlow({
  weight: "600",
  subsets: ["latin"],
});


function CareerOpertunitys() {
  return (
    <div className="bg-[#191919]">
      <div className="max-w-[1596px] mx-auto pt-10 lg:pt-32 border border-[#222222]  ">
        <div className="border-b border-[#222222] pb-12 px-4 lg:px-10 xl:px-12">
          <h3 className=" text-[27px] lg:text-4xl xl:text-5xl font-semibold text-white pb-3.5 ">
          Welcome to SquareUp, where talent meets opportunity!
          </h3> 
          <p className="text-[14px] lg:text-[16px] xl:text-lg font-normal pb-5 lg:pb-12 text-[#E6E6E6]">
          At SquareUp, we believe that the success of our agency lies in the talent, passion, and dedication of our team members. We are a digital product agency that thrives on innovation, creativity, and collaboration. If you're ready to make a difference and contribute to cutting-edge projects, we invite you to explore career opportunities with us.{" "}
          </p>
          <button className="btn text-[14px] lg:text-lg font-normal bg-[#262626] rounded-[12px]  border border-[#222222] text-white h-14 shadow-2xs">
          Why Work at SquareUp?
          </button>
        </div>
        {/* ux design */}
        <div className=" grid lg:grid-cols-2 ">
          <div className=" border border-[#222222]  h-full lg:h-[374px] xl:h-[468px] py-10 lg:py-10 xl:py-24 px-4 lg:px-10 xl:px-12">
            <div>
              <div className=" flex gap-6">
                  <div className="  border-b-2 border-[#222222]  w-full">
                  <h4 className=" text-[#D8FF99] text-3xl  xl:text-[40px] font-medium pb-12 lg:pb-5 xl:pb-12">
                  Innovative and Impactful Projects
                  </h4>
                  </div>
              </div>
              <div className=" ">
                <div className=" ">
                  <p className=" text-[14px] lg:text-[16px] xl:text-lg font-normal text-[#98989A] pt-7">
                    We developed a visually stunning and user-friendly
                    e-commerce platform for Chic Boutique, a renowned fashion
                    retailer. The platform featured seamless product browsing,
                    secure payment integration, and personalized
                    recommendations, resulting in increased online sales and
                    customer satisfaction.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className=" border border-[#222222]  h-full lg:h-[374px] xl:h-[468px] py-10 lg:py-10 xl:py-24 px-4 lg:px-10 xl:px-12">
            <div>
              <div className=" flex gap-6">
                  <div className="  border-b-2 border-[#222222]  w-full">
                  <h4 className=" text-[#D8FF99] text-3xl  xl:text-[40px] font-medium pb-12 lg:pb-5 xl:pb-12">
                  Innovative and Impactful Projects
                  </h4>
                  </div>
              </div>
              <div className=" ">
                <div className=" ">
                  <p className=" text-[14px] lg:text-[16px] xl:text-lg font-normal text-[#98989A] pt-7">
                    We developed a visually stunning and user-friendly
                    e-commerce platform for Chic Boutique, a renowned fashion
                    retailer. The platform featured seamless product browsing,
                    secure payment integration, and personalized
                    recommendations, resulting in increased online sales and
                    customer satisfaction.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className=" border border-[#222222]  h-full lg:h-[374px] xl:h-[468px] py-10 lg:py-10 xl:py-24 px-4 lg:px-10 xl:px-12">
            <div>
              <div className=" flex gap-6">
                  <div className="  border-b-2 border-[#222222]  w-full">
                  <h4 className=" text-[#D8FF99] text-3xl  xl:text-[40px] font-medium pb-12 lg:pb-5 xl:pb-12">
                  Innovative and Impactful Projects
                  </h4>
                  </div>
              </div>
              <div className=" ">
                <div className=" ">
                  <p className=" text-[14px] lg:text-[16px] xl:text-lg font-normal text-[#98989A] pt-7">
                    We developed a visually stunning and user-friendly
                    e-commerce platform for Chic Boutique, a renowned fashion
                    retailer. The platform featured seamless product browsing,
                    secure payment integration, and personalized
                    recommendations, resulting in increased online sales and
                    customer satisfaction.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className=" border border-[#222222]  h-full lg:h-[374px] xl:h-[468px] py-10 lg:py-10 xl:py-24 px-4 lg:px-10 xl:px-12">
            <div>
              <div className=" flex gap-6">
                  <div className="  border-b-2 border-[#222222]  w-full">
                  <h4 className=" text-[#D8FF99] text-3xl  xl:text-[40px] font-medium pb-12 lg:pb-5 xl:pb-12">
                  Innovative and Impactful Projects
                  </h4>
                  </div>
              </div>
              <div className=" ">
                <div className=" ">
                  <p className=" text-[14px] lg:text-[16px] xl:text-lg font-normal text-[#98989A] pt-7">
                    We developed a visually stunning and user-friendly
                    e-commerce platform for Chic Boutique, a renowned fashion
                    retailer. The platform featured seamless product browsing,
                    secure payment integration, and personalized
                    recommendations, resulting in increased online sales and
                    customer satisfaction.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default CareerOpertunitys