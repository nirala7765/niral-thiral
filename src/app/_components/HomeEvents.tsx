import React from 'react'
import { IoIosArrowDown } from 'react-icons/io';
import { Tabs, TabsContent, TabsList, TabsTrigger  } from '@/components/ui/tabs';

const HomeEvents = () => {
  return (
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
  )
}

export default HomeEvents