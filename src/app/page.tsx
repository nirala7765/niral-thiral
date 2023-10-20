
import Image from 'next/image'
import { IoIosArrowDown } from 'react-icons/io';
import Navbar from './_components/Navbar';
import { Tabs, TabsContent, TabsList, TabsTrigger  } from '@/components/ui/tabs';



export default function Home() {
  return <main>
    <Navbar/>
    
    <div className='w-screen h-[100svh]'>

<div className="bottom-[0svh] absolute flex justify-center w-full">
    <div className="flex">
     <IoIosArrowDown size={75}/>
    </div>
  </div>







  <div className=" absolute lg:top-[30%] lg:pl-24 flex-col top-[30%] pl-0">
    <div className='flex lg:space-x-5 lg:flex-row flex-col lg:pl-0 pl-10 '>
      <div className='lg:flex lg:space-x-5 '>
      <div className="text-7xl bg-gradient-to-r from-[#2854EC] to-[#45D5DB] text-transparent bg-clip-text font-bold">
      NIRAL -
    </div>
    <div className="text-7xl bg-gradient-to-r from-[#7F1FFD] to-[#C926EF] text-transparent bg-clip-text font-bold lg:ml ml-8 ">
      THIRAL 
    </div>
      </div>
    
    <div className='lg:flex flex flex-row lg:ml ml-20'>
    <div className="text-7xl bg-gradient-to-r from-[#7F1FFD] to-[#C926EF] text-transparent bg-clip-text font-bold">
     2
    </div>
    <div className="text-7xl bg-gradient-to-r from-[#2854EC] to-[#45D5DB] text-transparent bg-clip-text font-bold">
     K
    </div>
    <div className="text-7xl bg-gradient-to-r from-[#7F1FFD] to-[#C926EF] text-transparent bg-clip-text font-bold">
     23
    </div>
    </div>
    </div>
    

    <div className='lg:w-full w-screen lg:justify-start lg:text-start justify-center text-center'>
    <button className=" text-2xl my-14 bg-gradient-to-r from-[#279EFF] to-[#279EFF] p-4 rounded-2xl text-[#ffff] self-center text-center">
      REGISTER NOW
    </button>

    </div>

  </div>
  <div className='lg:absolute lg:flex lg:w-full lg:bottom-[15svh] lg:justify-center lg:block hidden'>
  <div className='text-3xl text-[#C926EF] font-bold flex space-x-5'>
  <div>
  02 . 11 . 2k23
  </div>
  <div>
  -
  </div>
  <div>
  04 . 11 . 2k23
  </div>
  </div>
  </div>
</div>
  {/* <div className='w-screen h-[100svh] flex columns-3'>
    <div className='bg-white w-full h-full'>
      
    </div>
    <div className='bg-red w-full h-full'>
    

    </div>
    <div className='bg-black w-full h-full'></div>

  </div> */}
  <div className='w-screen h-[100svh] lg:py-0 py-5'>
    
  <Tabs defaultValue="1" className="w-full lg:p-5 flex  justify-center h-full">
  <div className='lg:w-1/2 h-full flex flex-col w-full  lg:px-0 px-2'>
  <TabsList className='w-full flex justify-around mb-2'>
    <TabsTrigger value="1" className='w-full'>DAY 1</TabsTrigger>
    <TabsTrigger value="2" className='w-full'>DAY 2</TabsTrigger>
    <TabsTrigger value="3" className='w-full'>DAY 3</TabsTrigger>
  </TabsList>
  <TabsContent value="1" className='rounded-lg bg-[#c3dbfa] h-full'>Make changes to your account here.</TabsContent>
  <TabsContent value="2" className='rounded-lg bg-[#c3dbfa] h-full'>Change your password here.</TabsContent>
  <TabsContent value="3" className='rounded-lg bg-[#c3dbfa] h-full'>Change your password here.</TabsContent>
  </div>
  
  
</Tabs>

  </div>

  </main>;

}
