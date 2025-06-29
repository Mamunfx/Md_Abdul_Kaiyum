
import { Hero } from '../src/Components/Hero'
import { Facebook_Intro } from '../src/Components/Facebook_Intro'
import { Intro_Appoinment } from '../src/Components/Intro_Appoinment'
import { Services } from '../src/Components/Services'
import { Youtube_vid_section } from '../src/Components/Youtube_vid_section'
import { Customer_fedback } from '../src/Components/Customer_fedback'
import { About_us } from '../src/Components/About_us'
import { Second_appoinment_banner } from '../src/Components/Second_appoinment_banner'
import { Message_us } from '../src/Components/Message_us'
import Map_section from '../src/Components/Map_section'
import Navbar from '../src/Components/Navbar'
import {Footer}  from '../src/Components/Footer'


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
    <Message_us></Message_us>
    <Map_section></Map_section>
    <Footer></Footer>
    </div>
  )
}
