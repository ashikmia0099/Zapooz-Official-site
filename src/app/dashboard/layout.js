import React from 'react'
import Sidebar from './Sidebar/Sidebar'


function DeshboardLayouts({ children }) {
  return (
    <div className=' grid grid-cols-12 max-w-[1596px] mx-auto bg-[#191919]'>
      <div className=' col-span-3 '>
        <Sidebar></Sidebar>
      </div>
      <div className=' col-span-9 '>
        <main>
          {children}
        </main>
      </div>
    </div>
  )
}

export default DeshboardLayouts