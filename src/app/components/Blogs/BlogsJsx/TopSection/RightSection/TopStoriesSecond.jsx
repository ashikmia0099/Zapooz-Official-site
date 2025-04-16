import React from 'react'

import image1 from '../../../../../../../public/images/blogsimages/Container.png'
import Image from 'next/image'
import { SlCalender } from 'react-icons/sl'

function TopStoriesSecond() {
    return (
        <div>
            {/* image */}
            <div className=' my-10 mt-32'>
                <Image src={image1} className=' w-full h-64'></Image>
            </div>

            {/* border section */}
            <div className=' items-center gap-3 mt-5 mb-7'>
                <div className=' flex gap-2 mt-3'>
                    <div >
                        <p className=' border-2 h-[7px] border-[#9EFF00] w-10 bg-[#9EFF00]'></p>
                    </div>
                    <div className=' w-full'>
                        <p className='  border-b-2 border-t-2 p-0.5 border-[#DFDFDF]  w-full'></p>
                    </div>
                </div>
                <div className=' mt-2'>
                    <h5 className=' text-2xl font-semibold'>Blockchain</h5>
                </div>

            </div>

            {/* grid data */}
            <div>
                <div className='  grid grid-rows-4 '>
                    <div className='  h-32 mt-3'>
                        <div className=' flex items-center gap-2  pb-4'>

                            {/* text */}
                            <div className=' flex items-center  '>
                                <div>
                                    <p className=' text-sm font-[600] text-[#8E8E8F] pb-2'>programming</p>
                                    <h6 className=' text-[17px] font-[600] leading-6 pb-2'>Using Instagram tawo your promote </h6>
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
                    <div className='  h-32 mt-3'>
                        <div className=' flex items-center gap-2  pb-4'>

                            {/* text */}
                            <div className=' flex items-center  '>
                                <div>
                                    <p className=' text-sm font-[600] text-[#8E8E8F] pb-2'>programming</p>
                                    <h6 className=' text-[17px] font-[600] leading-6 pb-2'>Using Instagram tawo your promote </h6>
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
                    <div className='  h-32 mt-3'>
                        <div className=' flex items-center gap-2  pb-4'>

                            {/* text */}
                            <div className=' flex items-center  '>
                                <div>
                                    <p className=' text-sm font-[600] text-[#8E8E8F] pb-2'>programming</p>
                                    <h6 className=' text-[17px] font-[600] leading-6 pb-2'>Using Instagram tawo your promote </h6>
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
                    <div className='  h-32 mt-3'>
                        <div className=' flex items-center gap-2  pb-4'>

                            {/* text */}
                            <div className=' flex items-center  '>
                                <div>
                                    <p className=' text-sm font-[600] text-[#8E8E8F] pb-2'>programming</p>
                                    <h6 className=' text-[17px] font-[600] leading-6 pb-2'>Using Instagram tawo your promote </h6>
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

            {/* image section */}

            <div className=' my-2 '>
                <Image src={image1} className=' w-full h-64'></Image>
            </div>

        </div>
    )
}

export default TopStoriesSecond