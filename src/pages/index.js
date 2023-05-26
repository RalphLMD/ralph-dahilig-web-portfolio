import React, { useState } from 'react'

import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import HeroSection from '../components/HeroSection'
import AboutSection from '../components/AboutSection'
import ProjectSection from '../components/ProjectSection'
import ContactSection from '../components/ContactSection'
import Footer from '../components/Footer'

import { aboutContent } from '../components/AboutSection/Data'
import { projectContent } from '../components/ProjectSection/Data'


const Home = () => {

    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <> 
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />


            <HeroSection/>
            <AboutSection {...aboutContent}/>

            <ProjectSection {...projectContent}/>

            <ContactSection />
            <Footer/>
        </>
    )
}

export default Home