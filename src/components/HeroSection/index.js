import React from 'react'

/* Alternative way to import images */
import bg from '../../images/bg-image.jpg'


import { Typewriter } from 'react-simple-typewriter'

import { 
    HeroContainer,
    HeroProfile,
    HeroBgContainer,
    HeroH1,
    HeroH2,
    HeroH3,
    HeroButton,
    HeroBg
} from './HeroElements'

const HeroSection = () => {
  return (
    <HeroContainer>
        <HeroBgContainer>
            <HeroBg src={bg} />
        </HeroBgContainer>
        <HeroProfile>
            <HeroH2>Hello, I am</HeroH2>
            <HeroH1>Ralph Lance M. Dahilig</HeroH1>
            <HeroH3>
                <Typewriter
                words={['Jr. Front-End Web Developer', 'UI/UX Designer']}
                loop={0}
                cursor
                cursorStyle='|'
                typeSpeed={90}
                deleteSpeed={80}
                delaySpeed={1500}
                />
            </HeroH3>
            <HeroButton href={require("../../files/ralph-dahilig-cv.pdf")} target="_blank">View Resume</HeroButton>
        </HeroProfile>

    </HeroContainer>
  )
}

export default HeroSection