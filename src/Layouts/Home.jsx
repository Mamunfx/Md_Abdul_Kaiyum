import Navbar from '../Components/Navbar'
import { Footer } from '../Components/Footer'
import { Hero } from '../Components/Hero'
import { Facebook_Intro } from '../Components/Facebook_Intro'
import { Intro_Appoinment } from '../Components/Intro_Appoinment'

export const Home = () => {
  return (
    <div className='space-y-28'>
    <Navbar></Navbar>
    <Hero></Hero>
    <Facebook_Intro></Facebook_Intro>
    <Intro_Appoinment></Intro_Appoinment>
    <Footer></Footer>
    </div>
  )
}
