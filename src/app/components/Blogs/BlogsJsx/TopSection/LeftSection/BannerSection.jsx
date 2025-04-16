import Image from 'next/image'
import React from 'react'

import LinkImage from '../../../../../../../public/images/blogsimages/Link.png'
import image1 from '../../../../../../../public/images/blogsimages/Container.png'
import image2 from '../../../../../../../public/images/blogsimages/Container1.png'
import image3 from '../../../../../../../public/images/blogsimages/Container2.png'
import { FaRegUserCircle } from 'react-icons/fa'
import { SlCalender } from "react-icons/sl";
import { CiClock2 } from "react-icons/ci";



function BannerSection() {
    return (
        <div className='bg-[#191919]'>
            {/* top section */}
            <div className='   grid grid-cols-3 gap-4'>
                {/* left section */}
                <div className=' col-span-1 grid grid-rows-2 '>
                    {/* top section second */}
                    <div className=' col-span-1 border-b-[1px] border-[#D8D8D8] pb-2 '>
                        <Image src={image1} className=' h-56  w-full'></Image>
                        <h5 className=' text-[#8E8E8F] pt-2 text-sm font-bold'>Business</h5>
                        <h4 className='text-[#ffffff] text-xl font-semibold pr-3.5 leading-6 py-2.5'>A Pragmatist’s Guide To Theire Lean User Research</h4>
                        <div className=' flex items-center justify-between'>
                            <div className=' flex items-center gap-1.5 text-[#8E8E8F] text-sm font-bold'>
                                <span>
                                    <FaRegUserCircle />
                                </span>
                                <span>
                                    By Admin
                                </span>
                            </div>
                            <div className=' flex items-center gap-1.5 text-[#8E8E8F] text-sm font-bold'>
                                <span>
                                    <SlCalender />
                                </span>
                                <span>
                                    27 August, 2024
                                </span>
                            </div>
                        </div>
                    </div>
                    {/* bottom section  */}
                    <div className=' col-span-1 mt-4 pb-4'>
                        <Image src={image2} className=' h-56 w-full'></Image>
                        <h5 className=' text-[#8E8E8F] pt-2 text-sm font-bold'>Business</h5>
                        <h4 className='text-[#ffffff] text-xl font-semibold pr-3.5 leading-6 py-2.5'>A Pragmatist’s Guide To Theire Lean User Research</h4>
                        <div className=' flex items-center justify-between'>
                            <div className=' flex items-center gap-1.5 text-[#8E8E8F] text-sm font-bold'>
                                <span>
                                    <FaRegUserCircle />
                                </span>
                                <span>
                                    By Admin
                                </span>
                            </div>
                            <div className=' flex items-center gap-1.5 text-[#8E8E8F] text-sm font-bold'>
                                <span>
                                    <SlCalender />
                                </span>
                                <span>
                                    27 August, 2024
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                {/* right section */}
                <div className=' col-span-2 '>
                    <Image src={image3} className=' h-[450px] w-full'></Image>
                    <button className=' btn bg-none text-[#000000] shadow-2xs bg-[#9EFF00] font-bold w-32 rounded-full my-5 mx-auto flex'>BlockChain</button>
                    <h4 className=' text-4xl font-semibold text-white leading-12  text-center my-3'>Beyond Algorithms Skills Of Designers That AI Can’t Replicate</h4>
                    <div className=' flex items-center justify-between px-40 pb-5'>
                        <div className=' flex items-center gap-1.5 text-[#8E8E8F] text-sm font-bold'>
                            <span>
                                <FaRegUserCircle />
                            </span>
                            <span>
                                By Admin
                            </span>
                        </div>
                        <div className=' flex items-center gap-1.5 text-[#8E8E8F] text-sm font-bold'>
                            <span>
                                <SlCalender />
                            </span>
                            <span>
                                27 August, 2024
                            </span>
                        </div>
                        <div className=' flex items-center gap-1.5 text-[#8E8E8F] text-sm font-bold'>
                            <span>
                                <CiClock2 />
                            </span>
                            <span>
                                20 Mins
                            </span>
                        </div>
                    </div>
                    <p className=' text-[16px] leading-7 font-[400] text-[#8E8E8F]'>Browned butter and brown sugar caramelly goodness, crispy edgend software
                    centers and melty little puddles of chocolate first favorite.</p>
                </div>
            </div>
            {/* link section */}
            <div className=' mt-3'>
                <Image src={LinkImage} className=' h-32 w-full'></Image>
            </div>
        </div>
    )
}

export default BannerSection