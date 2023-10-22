import React from 'react'
import { IoIosArrowDown } from 'react-icons/io';
import { Tabs, TabsContent, TabsList, TabsTrigger  } from '@/components/ui/tabs';
import { PiDotOutlineBold } from "react-icons/pi";
const HomeEvents = () => {
  return (
    <div className='w-screen h-[100svh] lg:py-0 py-5'>
    
  <Tabs defaultValue="1" className="w-full lg:p-5 flex  justify-center h-full">
  <div className='lg:w-1/2 h-full flex flex-col w-full  lg:px-0 px-2'>
  <TabsList className='w-full flex justify-around mb-2 bg-[#279EFF]'>
    
    <TabsTrigger value="1" className='w-full text-white'>DAY 1</TabsTrigger>
    <TabsTrigger value="2" className='w-full  text-white'>DAY 2</TabsTrigger>
    <TabsTrigger value="3" className='w-full  text-white'>DAY 3</TabsTrigger>
  </TabsList>
  <TabsContent value="1" className=' rounded-lg ring-1  h-full shadow-inner bg-[#279EFF] text-white  justify-center p-8 overflow-y-auto'>
    <div className='flex flex-col '>
      <div className='flex flex-col'> 
        <div className='flex'>
        <div><PiDotOutlineBold size={32}/></div>
        <div className='text-xl'>NAAN MUDHALVAN'IN TECH WAR</div>
        </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo neque laborum corrupti est odio incidunt eos quae dicta, consequatur excepturi delectus voluptas, facilis doloribus velit dolorum harum minus deleniti nemo.</p>
      </div>
      <div className='flex flex-col'> 
        <div className='flex'>
        <div><PiDotOutlineBold size={32}/></div>
        <div className='text-xl'>IDEA KICK</div>
        </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo neque laborum corrupti est odio incidunt eos quae dicta, consequatur excepturi delectus voluptas, facilis doloribus velit dolorum harum minus deleniti nemo.</p>
      </div>
      <div className='flex flex-col'> 
        <div className='flex'>
        <div><PiDotOutlineBold size={32}/></div>
        <div className='text-xl'>BUG HUNT</div>
        </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo neque laborum corrupti est odio incidunt eos quae dicta, consequatur excepturi delectus voluptas, facilis doloribus velit dolorum harum minus deleniti nemo.</p>
      </div>
      <div className='flex flex-col'> 
        <div className='flex'>
        <div><PiDotOutlineBold size={32}/></div>
        <div className='text-xl'>CODE BUZZ</div>
        </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo neque laborum corrupti est odio incidunt eos quae dicta, consequatur excepturi delectus voluptas, facilis doloribus velit dolorum harum minus deleniti nemo.</p>
      </div>
    </div>
  </TabsContent>
  <TabsContent value="2" className='rounded-lg ring-1  h-full shadow-inner bg-[#279EFF] text-white'>school events</TabsContent>
  <TabsContent value="3" className='rounded-lg ring-1  h-full shadow-inner bg-[#279EFF] text-white'>college events</TabsContent>
  </div>
  
  
</Tabs>

  </div>
  )
}

export default HomeEvents