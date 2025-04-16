'use client'

import React from 'react'
import Lottie from "lottie-react";
import signimsignpuLotty from '../../../../public/images/LottyJson/SignInAndSignUpLotty.json'


function Authfiles() {
  return (
    <div className="">
      <div className=" h-[600px]">
        <Lottie animationData={signimsignpuLotty} loop={true} className=' h-[550px]'  />
      </div>
    </div>
  )
}

export default Authfiles