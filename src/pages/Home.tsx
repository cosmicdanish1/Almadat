
import Navbar from "../components/Navbar"
import HeroSection from "../components/HeroSection"
import GallerySection from "../components/GallerySection"
import Donation from "../components/Donation"
import Footer from "../components/Footer"
import AboutUs from "../components/AboutUs"
import Impact from "../components/Impact"
import Volunteers from "../components/Volunteers"
import Donors from "../components/Donors"
import QRDonation from "../components/QRDonation"
import OrganizationsSupport from "../components/OrganizationsSupport"
import OurWork from "../components/OurWork"
import Story from "../components/Story"
const Home = () => {
  return (

    <>
    <div className="">
    <Navbar />
    <HeroSection/>
    <GallerySection/>
    <AboutUs/>
    <Impact/>
    <Volunteers/>
    <Donors/>
    <QRDonation/>
    <Story/>
    <OrganizationsSupport/>
    <Donation />
    <Footer/>
    </div>
    </>
  )
}

export default Home