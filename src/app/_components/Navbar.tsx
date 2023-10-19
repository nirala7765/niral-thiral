import React from 'react'
import Image from 'next/image'

const Navbar = () => {
  return (
    <div className='absolute top-0 flex text-center justify-between w-full py-6 px-10'>
      <div className="flex space-x-7">
        <div className='flex '>
          <Image src="/NEWlogo.png" alt="Picture of the author" width={100} height={100} />
        </div>

        <div className="flex flex-row space-x-5 text-[#0C356A] font-bold text-xs pt-2">
          <div>ANAND INSTITUTE OF HIGHER TECHNOLOGY </div>
          <div>-</div>
          <div> DEPARTMENT OF COMPUTER SCIENCE</div>
        </div>
      </div>



      <div className='flex  space-x-10'>
        <div className="text-[#279EFF]">
          HOME
        </div>
        <div className="text-[#279EFF]">
          EVENTS
        </div >
        <div className="text-[#279EFF]">
          DATES
        </div>
        <div className="text-[#279EFF]">
          ABOUT
        </div>
        <div className="text-[#279EFF]">
          DETAILS
        </div>
      </div>
    </div>
  )
}

export default Navbar