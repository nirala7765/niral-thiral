import Navbar from './_components/Navbar';
import HomeSection from './_components/HomeSection';
import HomeEvents from './_components/HomeEvents';
import DaySchedule from './_components/DaySchedule';
import Footer from './_components/Footer';
import Footer2 from './_components/Footer2';
import ContactUs from './_components/ContactUs';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"



export default function Home() {
  return <main>
    <Navbar />
    <HomeSection />
    <DaySchedule/>
    <HomeEvents/>

    <ContactUs/>
    


    

  </main>;

 

}
