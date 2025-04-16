import React from "react";
import { BsCopy } from "react-icons/bs";
import { FaClipboardList } from "react-icons/fa";
import { LuSquareDashedMousePointer } from "react-icons/lu";
import { GiStarsStack } from "react-icons/gi";
import Image from "next/image"; 
import { MdOutlineArrowOutward } from "react-icons/md";

import projectimg1 from "../../../../../public/images/workpageimage/Image.png";
import projectimg2 from "../../../../../public/images/workpageimage/Image1.png";
import projectimg3 from "../../../../../public/images/workpageimage/Image2.png";
import projectimg4 from "../../../../../public/images/workpageimage/Image3.png";

function AllWorks() {
  return (
    <div className="bg-[#191919]">
      <div className="max-w-[1596px] mx-auto  pt-10 lg:pt-20 xl:pt-32 border border-[#222222]  ">
        <div className="border-b border-[#222222] pb-10 lg:pb-12 px-4 lg:px-12">
          <h3 className=" text-3xl lg:text-4xl xl:text-5xl font-semibold text-white pb-3.5">
            At SquareUp
          </h3>
          <p className=" text-[14px] lg:text-[16px] xl:text-lg font-normal pb-12 text-[#E6E6E6]">
            We have had the privilege of working with a diverse range of clients
            and delivering exceptional digital products that drive success.{" "}
          </p>
          <button className="btn text-[14px] lg:text-xl font-normal bg-[#262626] rounded-[12px]  border border-[#222222] text-white h-14 shadow-2xs">
            Here are ten examples of our notable works :
          </button>
        </div>
        {/* ux design */}
        <div className=" grid lg:grid-cols-2">
          <div className=" border border-[#222222]  h-full lg:h-[800px] xl:h-[908px]">
            <div>
              <h3 className=" text-xl xl:text-2xl font-medium text-[#98989A] border-b border-[#222222] py-7 px-4 lg:px-12 ">
                E-Commerce Platform for Fashion Hub
              </h3>
            </div>
            <div className=" py-7 px-4 lg:px-12">
              <Image
                src={projectimg1}
                alt="Project image one"
                className=" w-full rounded-xl h-[340px] xl:h-[423px]"
              ></Image>
              <div>
                <h3 className=" text-lg xl:text-2xl font-medium text-white pt-7">
                  Chic Boutique
                </h3>
                <div className="pt-7 flex items-center justify-between">
                  <div>
                    <button className="btn text-sm xl:text-xl font-normal bg-[#262626] rounded-[12px]  border border-[#222222] text-white h-14 shadow-2xs">
                      htttps:/www.chicboutique.com
                    </button>
                  </div>

                  <div>
                    <button className=" btn  font-normal bg-[#262626] rounded-[12px]  border border-[#222222]   h-14  text-3xl shadow-2xs ">
                      {" "}
                      <MdOutlineArrowOutward className=" text-[#9EFF00]" />
                    </button>
                  </div>
                </div>
                <div className=" ">
                  <p className=" xl:text-lg font-normal text-sm text-[#98989A] pt-7">We developed a visually stunning and user-friendly e-commerce platform for Chic Boutique, a renowned fashion retailer. The platform featured seamless product browsing, secure payment integration, and personalized recommendations, resulting in increased online sales and customer satisfaction.</p>
                </div>
              </div>
            </div>
          </div>
          <div className=" border border-[#222222]  h-full lg:h-[800px] xl:h-[908px]">
            <div>
              <h3 className=" text-xl xl:text-2xl font-medium text-[#98989A] border-b border-[#222222] py-7 px-4 lg:px-12 ">
                E-Commerce Platform for Fashion Hub
              </h3>
            </div>
            <div className=" py-7 px-4 lg:px-12">
              <Image
                src={projectimg1}
                alt="Project image one"
                className=" w-full rounded-xl h-[340px] xl:h-[423px]"
              ></Image>
              <div>
                <h3 className=" text-lg xl:text-2xl font-medium text-white pt-7">
                  Chic Boutique
                </h3>
                <div className="pt-7 flex items-center justify-between">
                  <div>
                    <button className="btn text-sm xl:text-xl font-normal bg-[#262626] rounded-[12px]  border border-[#222222] text-white h-14 shadow-2xs">
                      htttps:/www.chicboutique.com
                    </button>
                  </div>

                  <div>
                    <button className=" btn  font-normal bg-[#262626] rounded-[12px]  border border-[#222222]   h-14  text-3xl shadow-2xs ">
                      {" "}
                      <MdOutlineArrowOutward className=" text-[#9EFF00]" />
                    </button>
                  </div>
                </div>
                <div className=" ">
                  <p className=" xl:text-lg font-normal text-sm text-[#98989A] pt-7">We developed a visually stunning and user-friendly e-commerce platform for Chic Boutique, a renowned fashion retailer. The platform featured seamless product browsing, secure payment integration, and personalized recommendations, resulting in increased online sales and customer satisfaction.</p>
                </div>
              </div>
            </div>
          </div>
          <div className=" border border-[#222222]  h-full lg:h-[800px] xl:h-[908px]">
            <div>
              <h3 className=" text-xl xl:text-2xl font-medium text-[#98989A] border-b border-[#222222] py-7 px-4 lg:px-12 ">
                E-Commerce Platform for Fashion Hub
              </h3>
            </div>
            <div className=" py-7 px-4 lg:px-12">
              <Image
                src={projectimg1}
                alt="Project image one"
                className=" w-full rounded-xl h-[340px] xl:h-[423px]"
              ></Image>
              <div>
                <h3 className=" text-lg xl:text-2xl font-medium text-white pt-7">
                  Chic Boutique
                </h3>
                <div className="pt-7 flex items-center justify-between">
                  <div>
                    <button className="btn text-sm xl:text-xl font-normal bg-[#262626] rounded-[12px]  border border-[#222222] text-white h-14 shadow-2xs">
                      htttps:/www.chicboutique.com
                    </button>
                  </div>

                  <div>
                    <button className=" btn  font-normal bg-[#262626] rounded-[12px]  border border-[#222222]   h-14  text-3xl shadow-2xs ">
                      {" "}
                      <MdOutlineArrowOutward className=" text-[#9EFF00]" />
                    </button>
                  </div>
                </div>
                <div className=" ">
                  <p className=" xl:text-lg font-normal text-sm text-[#98989A] pt-7">We developed a visually stunning and user-friendly e-commerce platform for Chic Boutique, a renowned fashion retailer. The platform featured seamless product browsing, secure payment integration, and personalized recommendations, resulting in increased online sales and customer satisfaction.</p>
                </div>
              </div>
            </div>
          </div>
          <div className=" border border-[#222222]  h-full lg:h-[800px] xl:h-[908px]">
            <div>
              <h3 className=" text-xl xl:text-2xl font-medium text-[#98989A] border-b border-[#222222] py-7 px-4 lg:px-12 ">
                E-Commerce Platform for Fashion Hub
              </h3>
            </div>
            <div className=" py-7 px-4 lg:px-12">
              <Image
                src={projectimg1}
                alt="Project image one"
                className=" w-full rounded-xl h-[340px] xl:h-[423px]"
              ></Image>
              <div>
                <h3 className=" text-lg xl:text-2xl font-medium text-white pt-7">
                  Chic Boutique
                </h3>
                <div className="pt-7 flex items-center justify-between">
                  <div>
                    <button className="btn text-sm xl:text-xl font-normal bg-[#262626] rounded-[12px]  border border-[#222222] text-white h-14 shadow-2xs">
                      htttps:/www.chicboutique.com
                    </button>
                  </div>

                  <div>
                    <button className=" btn  font-normal bg-[#262626] rounded-[12px]  border border-[#222222]   h-14  text-3xl shadow-2xs ">
                      {" "}
                      <MdOutlineArrowOutward className=" text-[#9EFF00]" />
                    </button>
                  </div>
                </div>
                <div className=" ">
                  <p className=" xl:text-lg font-normal text-sm text-[#98989A] pt-7">We developed a visually stunning and user-friendly e-commerce platform for Chic Boutique, a renowned fashion retailer. The platform featured seamless product browsing, secure payment integration, and personalized recommendations, resulting in increased online sales and customer satisfaction.</p>
                </div>
              </div>
            </div>
          </div>
          
          
        </div>
      </div>
    </div>
  );
}

export default AllWorks;
