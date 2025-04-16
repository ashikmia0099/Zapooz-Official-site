import React from 'react'
import LinkImage from '../../../../../../../public/images/blogsimages/Link.png'
import image1 from '../../../../../../../public/images/blogsimages/Container.png'
import image2 from '../../../../../../../public/images/blogsimages/Container1.png'
import image3 from '../../../../../../../public/images/blogsimages/Container2.png'
import { FaRegUserCircle } from 'react-icons/fa'
import Image from 'next/image'
import { SlCalender } from 'react-icons/sl'

function ProgrammingSection2() {
    return (
        <div className=' h-[450px] '>
            {/* border section */}
            <div className='flex items-center gap-3 mt-12 mb-7'>
                <div>
                    <h5 className=' text-2xl font-semibold'>Blockchain</h5>
                </div>
                <div className=' flex gap-2 '>
                    <div >
                        <p className=' border-2 h-[7px] border-[#9EFF00] w-10 bg-[#9EFF00]'></p>
                    </div>
                    <div className=' w-[100%]'>
                        <p className='  border-b-2 border-t-2 p-0.5 border-[#DFDFDF]  w-[1090px]'></p>
                    </div>
                </div>
            </div>
            <div className=' grid grid-cols-3 gap-7 h-80'>
                {/* left section */}
                <div className='   pb-2'>
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
                <div className='   pb-2 '>
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
                <div className='   pb-2 '>
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
               


            </div>
        </div>
    )
}

export default ProgrammingSection2