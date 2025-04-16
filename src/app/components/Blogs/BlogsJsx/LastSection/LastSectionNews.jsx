import React from 'react'
import image1 from '../../../../../../public/images/blogsimages/Container.png'
import image2 from '../../../../../../public/images/blogsimages/Container1.png'
import image3 from '../../../../../../public/images/blogsimages/Container2.png'
import image4 from '../../../../../../public/images/blogsimages/Container3.png'
import Image from 'next/image'
import { SlCalender } from 'react-icons/sl'

function LastSectionNews() {
    return (
        <div>
            <div className=' grid grid-cols-3  h-28 gap-5 mt-10'>
                <div className='  '>
                    <div className=' flex items-center gap-5'>
                        {/* text */}
                        <div className=' flex items-center'>
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
                        {/* image */}
                        <div>
                            <Image src={image1} className=' h-28 w-28'></Image>
                        </div>
                    </div>
                </div>
                <div className='  '>
                    <div className=' flex items-center gap-5'>
                        {/* text */}
                        <div className=' flex items-center'>
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
                        {/* image */}
                        <div>
                            <Image src={image1} className=' h-28 w-28'></Image>
                        </div>
                    </div>
                </div>
                <div className='  '>
                    <div className=' flex items-center gap-5'>
                        {/* text */}
                        <div className=' flex items-center'>
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
                        {/* image */}
                        <div>
                            <Image src={image1} className=' h-28 w-28'></Image>
                        </div>
                    </div>
                </div>
               
                
            </div>
        </div>
    )
}

export default LastSectionNews