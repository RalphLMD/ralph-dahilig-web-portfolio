import React from 'react'

import {
    /* About Me */
    AboutContainer,
    AboutCol,
    AboutRow,    
    AboutH1,
    AboutP,
    AboutImg,
    AboutIconContainer,
    AboutIcon,

    /* Experiences */
    TimeLineContainer,
    TimeLineContent,
    TimeLineTitle,
    TimeLineP,
    TimeLineDate
} from './AboutElements'


const AboutSection = ({
    aboutOne, aboutTwo, 
    aboutThree, aboutInfo, 
    descOne, descTwo, 
    descThree, descFour, 
    descFive, descSix, 
    dateOne, dateTwo, 
    dateThree, dateFour,
    titleOne, titleTwo,
    titleThree, titleFour
}) => {
  return (
    <>
        <AboutContainer id='about'>
            <AboutH1>{aboutOne}</AboutH1>
            <AboutCol>
                <AboutRow>
                    <AboutP>{aboutInfo}</AboutP>
                    <AboutH1>{aboutTwo}</AboutH1>
                <AboutIconContainer>
                    <AboutIcon src={require("../../images/html-icon.png")} />
                    <AboutIcon src={require("../../images/css-icon.png")} />
                    <AboutIcon src={require("../../images/js-icon.png")} />
                    <AboutIcon src={require("../../images/react-icon.png")} />
                    <AboutIcon src={require("../../images/git-icon.png")} />
                </AboutIconContainer>
                </AboutRow>

                <AboutRow>
                    <AboutImg src={require("../../images/dev-ralph.png")}/>
                </AboutRow>
            </AboutCol>

            <AboutH1>{aboutThree}</AboutH1>
            <AboutCol>

            <TimeLineContainer>
            
                <TimeLineContent>
                    <TimeLineTitle>{titleOne}</TimeLineTitle>
                    <TimeLineP>{descOne}</TimeLineP>                    
                    <TimeLineDate>{dateOne}</TimeLineDate>
                </TimeLineContent>
                
                <TimeLineContent>
                    <TimeLineTitle>{titleTwo}</TimeLineTitle>
                    <TimeLineP>{descTwo}</TimeLineP>                    
                    <TimeLineP>{descThree}</TimeLineP>                    
                    <TimeLineDate>{dateTwo}</TimeLineDate>
                </TimeLineContent>

                <TimeLineContent>
                <TimeLineTitle>{titleThree}</TimeLineTitle>
                    <TimeLineP>{descFour}</TimeLineP>    
                    <TimeLineP>{descFive}</TimeLineP>                    
                    <TimeLineDate>{dateThree}</TimeLineDate>
                </TimeLineContent>

                <TimeLineContent>
                    <TimeLineTitle>{titleFour}</TimeLineTitle>
                    <TimeLineP>{descSix}</TimeLineP>                    
                    <TimeLineDate>{dateFour}</TimeLineDate>
                </TimeLineContent>

            </TimeLineContainer>

            </AboutCol>
        </AboutContainer>
    </>
  )
}

export default AboutSection