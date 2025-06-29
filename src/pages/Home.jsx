import { Hero } from '../Components/Hero'
import { Facebook_Intro } from '../Components/Facebook_Intro'
import { Intro_Appoinment } from '../Components/Intro_Appoinment'
import { Services } from '../Components/Services'
import { Youtube_vid_section } from '../Components/Youtube_vid_section'
import { Customer_fedback } from '../Components/Customer_fedback'
import { About_us } from '../Components/About_us'
import { Second_appoinment_banner } from '../Components/Second_appoinment_banner'
import { Message_us } from '../Components/Message_us'
import Map_section from '../Components/Map_section'
import Navbar from '../Components/Navbar'        
import { Footer } from '../Components/Footer'         

export const Home = () => {
  return (
    <div className='space-y-28 dark:bg-gray-900 dark:text-white'>
      <Navbar />
      <Hero />
      <Facebook_Intro />
      <Intro_Appoinment />
      <Services />
      <Youtube_vid_section />
      <Customer_fedback />
      <About_us />
      <Second_appoinment_banner />
      <Message_us />
      <Map_section />
      <Footer />
    </div>
  )
}