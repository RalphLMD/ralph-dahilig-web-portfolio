import React, {useEffect, useState} from 'react'

/* Alternative way to import images */
import bg from '../../images/bg-image.jpg'

import Fade from "react-reveal/Fade"
import { Typewriter } from 'react-simple-typewriter'

import { 
    HeroContainer,
    HeroProfile,
    HeroBgContainer,
    HeroH1,
    HeroH2,
    HeroH3,
    HeroButton,
    HeroBg, HeroTime
} from './HeroElements'

const HeroSection = () => {
    const [date, setDate] = useState(new Date());
    const timeText = date.toLocaleTimeString();

    function refreshClock(){
        setDate(new Date());
    }

    useEffect(() => {
        const timerId = setInterval(refreshClock, 1000);
        
        return function cleanup(){
          clearInterval(timerId);
        }
    })

    return (
    <Fade top distance="20%" duration={1500}>
        <HeroContainer>
        <HeroTime>{timeText}</HeroTime>
            <HeroBgContainer>
                <HeroBg src={bg} />
            </HeroBgContainer>
            <HeroProfile>
                <HeroH2>Hello, I am</HeroH2>
                <HeroH1>Ralph Lance M. Dahilig</HeroH1>
                <HeroH3>
                    <Typewriter
                    words={['Jr. Web Developer', 'UI/UX Designer', 'Utilities Systems Technician']}
                    loop={0}
                    cursor
                    cursorStyle='|'
                    typeSpeed={90}
                    deleteSpeed={80}
                    delaySpeed={1000}
                    />
                </HeroH3>
                
                <HeroButton href={require("../../files/resume-dahilig_ralph_lance_martin.pdf")} target="_blank">View Resume</HeroButton>
            </HeroProfile>

        </HeroContainer>
    </Fade>
  )
}

export default HeroSection