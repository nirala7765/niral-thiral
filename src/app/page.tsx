
import Image from 'next/image'
import { IoIosArrowDown } from 'react-icons/io';
import Navbar from './_components/Navbar';
import { Tabs, TabsContent, TabsList, TabsTrigger  } from '@/components/ui/tabs';



export default function Home() {
  return <main>
    <Navbar/>
    
  <div className='w-full h-[100svh]'>

  <div className="bottom-[0svh] absolute flex justify-center w-full">
      <div className="flex">
       <IoIosArrowDown size={75}/>
      </div>
    </div>






    <div className=" absolute top-[30%] pl-24 flex-col">
      <div className='flex space-x-5'>
      <div className="text-7xl bg-gradient-to-r from-[#2854EC] to-[#45D5DB] text-transparent bg-clip-text font-bold">
        NIRAL
      </div>
      <div className="text-7xl bg-gradient-to-r from-[#7F1FFD] to-[#C926EF] text-transparent bg-clip-text font-bold">
        THIRAL 
      </div>
      <div className='flex '>
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
      

      <button className=" text-2xl my-14 bg-gradient-to-r from-[#279EFF] to-[#279EFF] p-4 rounded-2xl text-[#ffff]">
        REGISTER NOW
      </button>

    </div>
    <div className='absolute flex w-full bottom-[15svh] justify-center'>
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
  <div className='w-full h-[100svh] flex columns-3'>
    <div className='bg-white w-full h-full'>
      
    </div>
    <div className='bg-red w-full h-full'>
    <Tabs defaultValue="account" className="w-[400px]">
  <TabsList>
    <TabsTrigger value="account">Account</TabsTrigger>
    <TabsTrigger value="password">Password</TabsTrigger>
  </TabsList>
  <TabsContent value="account">Make changes to your account here.</TabsContent>
  <TabsContent value="password">Change your password here.</TabsContent>
</Tabs>

    </div>
    <div className='bg-black w-full h-full'></div>

  </div>

  </main>;

}
