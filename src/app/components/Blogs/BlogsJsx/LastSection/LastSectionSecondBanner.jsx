import React from 'react'
import image1 from '../../../../../../public/images/blogsimages/Container.png'
import image2 from '../../../../../../public/images/blogsimages/Container1.png'
import image3 from '../../../../../../public/images/blogsimages/Container2.png'
import image4 from '../../../../../../public/images/blogsimages/Container3.png'
import Image from 'next/image'
import { SlCalender } from 'react-icons/sl'



function LastSectionSecondBanner() {
    return (
        <div>
            {/* line section */}
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

            {/* banner section */}

            <div className=' grid grid-cols-3  gap-3 h-[550]'>
                <div className=' col-span-2 '>
                    <div>
                        <Image src={image1} className=' w-full h-96'></Image>
                    </div>
                    <div>
                        <p className=' text-sm font-[600] text-[#8E8E8F] pb-2 pt-4'>programming</p>
                        <h6 className=' text-2xl font-[600] leading-8 pb-2 pr-10'>How To Protect Your App With Threat Model Based On
                            w To Protect Your App With Based</h6>
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
                <div className=' col-span-1 grid grid-rows-4 mt-3'>
                    <div className='  h-28 gap-y-6'>
                        <div className=' flex items-center gap-5'>
                            {/* image */}
                            <div>
                                <Image src={image1} className=' h-28 w-28'></Image>
                            </div>
                            {/* text */}
                            <div className=' flex items-center pr-2'>
                                <div>
                                    <p className=' text-sm font-[600] text-[#8E8E8F] pb-2'>programming</p>
                                    <h6 className=' text-[17px] font-[600] leading-6 pb-2'>Using Instagram tawo promote your</h6>
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
                    </div>
                    <div className='  h-28 gap-y-6'>
                        <div className=' flex items-center gap-5'>
                            {/* image */}
                            <div>
                                <Image src={image1} className=' h-28 w-28'></Image>
                            </div>
                            {/* text */}
                            <div className=' flex items-center pr-2'>
                                <div>
                                    <p className=' text-sm font-[600] text-[#8E8E8F] pb-2'>programming</p>
                                    <h6 className=' text-[17px] font-[600] leading-6 pb-2'>Using Instagram tawo promote your</h6>
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
                    </div>
                    <div className='  h-28 gap-y-6'>
                        <div className=' flex items-center gap-5'>
                            {/* image */}
                            <div>
                                <Image src={image1} className=' h-28 w-28'></Image>
                            </div>
                            {/* text */}
                            <div className=' flex items-center pr-2'>
                                <div>
                                    <p className=' text-sm font-[600] text-[#8E8E8F] pb-2'>programming</p>
                                    <h6 className=' text-[17px] font-[600] leading-6 pb-2'>Using Instagram tawo promote your</h6>
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
                    </div>
                    <div className='  h-28 gap-y-6'>
                        <div className=' flex items-center gap-5'>
                            {/* image */}
                            <div>
                                <Image src={image1} className=' h-28 w-28'></Image>
                            </div>
                            {/* text */}
                            <div className=' flex items-center pr-2'>
                                <div>
                                    <p className=' text-sm font-[600] text-[#8E8E8F] pb-2'>programming</p>
                                    <h6 className=' text-[17px] font-[600] leading-6 pb-2'>Using Instagram tawo promote your</h6>
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
                    </div>
                   
                </div>
            </div>
        </div>
    )
}

export default LastSectionSecondBanner