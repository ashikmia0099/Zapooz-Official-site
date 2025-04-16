import React from 'react'
import LastSectionNews from './LastSectionNews'

import image1 from '../../../../../../public/images/blogsimages/Container.png'
import image2 from '../../../../../../public/images/blogsimages/Container1.png'
import image3 from '../../../../../../public/images/blogsimages/Container2.png'
import image4 from '../../../../../../public/images/blogsimages/Container3.png'
import Image from 'next/image'
import { FaRegUserCircle } from 'react-icons/fa'
import { SlCalender } from 'react-icons/sl'
import { MdArrowOutward } from 'react-icons/md'

function LastSectionBanner() {
    return (
        <div >
            {/* border section */}
            <div className=' items-center gap-3 mt-12 mb-7'>
                <div>
                    <h5 className=' text-2xl font-semibold'>Blockchain</h5>
                </div>
                <div className=' flex gap-2 mt-5'>
                    <div >
                        <p className=' border-2 h-[7px] border-[#9EFF00] w-10 bg-[#9EFF00]'></p>
                    </div>
                    <div className=' w-full'>
                        <p className='  border-b-2 border-t-2 p-0.5 border-[#DFDFDF]  w-full'></p>
                    </div>
                </div>
            </div>
            <div className=' grid grid-cols-2   gap-10'>
                {/* image */}
                <div className=' w-full h-full'>
                    <Image src={image1} className=' h- w-full'></Image>
                </div>
                <div className=' flex items-center pr-20'>
                    <div className=' px-10'>

                        <h5 className=' text-[#8E8E8F] pt-2 text-sm font-[600]'>Business</h5>
                        <h4 className='text-[#ffffff] text-2xl font-semibold pr-3.5 leading-8 py-2.5'>How To Protect Your App With Threat
                        Model Based On JSONDiff</h4>
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
                        <p className=' text-[16px] leading-7 py-2.5'>Browned butter browa melly ness crispy edgend software centers puddles of chocolate.</p>
                        <button className=' btn border-none text-black shadow-2xs bg-[#9EFF00] my-5'>
                            <span className='font-bold'>Read More</span>
                            <span className=' text-xl text-[#292929] font-bold'><MdArrowOutward className=' ' /></span>
                        </button>
                    </div>
                </div>
            </div>
            <div>
                <LastSectionNews></LastSectionNews>
            </div>
        </div>
    )
}

export default LastSectionBanner