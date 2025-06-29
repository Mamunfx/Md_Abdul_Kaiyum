import Navbar from '../Components/Navbar'
import { Footer } from '../Components/Footer'
import { Hero } from '../Components/Hero'
import { Facebook_Intro } from '../Components/Facebook_Intro'
import { Intro_Appoinment } from '../Components/Intro_Appoinment'
import { Services } from '../Components/Services'
import { Youtube_vid_section } from '../Components/Youtube_vid_section'
import { Customer_fedback } from '../Components/Customer_fedback'
import { About_us } from '../Components/About_us'
import { Second_appoinment_banner } from '../Components/Second_appoinment_banner'

export const Home = () => {
  return (
    <div className='space-y-28'>
    <Navbar></Navbar>
    <Hero></Hero>
    <Facebook_Intro></Facebook_Intro>
    <Intro_Appoinment></Intro_Appoinment>
    <Services></Services>
    <Youtube_vid_section></Youtube_vid_section>
    <Customer_fedback></Customer_fedback>
    <About_us></About_us>
    <Second_appoinment_banner></Second_appoinment_banner>
    <Footer></Footer>
    </div>
  )
}
