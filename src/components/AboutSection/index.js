import React from 'react'

import Pulse from 'react-reveal/Pulse'
import Fade from 'react-reveal/Fade'

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
    TimeLineDate,
    TimeLineButtons,
    TimeLineAnchor
} from './AboutElements'


const AboutSection = ({
    aboutOne, aboutTwo, 
    aboutThree, aboutInfo, 
    descOne, descTwo, 
    descThree, descFour, 
    descFive, descSix, descSeven, descEight, descNine, descEnd,
    dateOne, dateTwo, 
    dateThree, dateFour, dateFive, dateSix,
    titleOne, titleTwo,
    titleThree, titleFour, titleFive, titleSix, titleEnd
}) => {
  return (
    <>
        <AboutContainer id='about'>
            <AboutH1>{aboutOne}</AboutH1>
            <Fade top distance="20%" duration={1000}>
            <AboutCol>
                <AboutRow>
                    <AboutP>{aboutInfo}</AboutP>
                    <AboutH1>{aboutTwo}</AboutH1>
    
                <Pulse distance="20%" duration={1500}>
                <AboutIconContainer>
                    <AboutIcon src={require("../../images/html-icon.png")} />
                    <AboutIcon src={require("../../images/css-icon.png")} />
                    <AboutIcon src={require("../../images/js-icon.png")} />
                    <AboutIcon src={require("../../images/react-icon.png")} />
                    <AboutIcon src={require("../../images/git-icon.png")} />
                    <AboutIcon src={require("../../images/bootstrap.png")} />
                    <AboutIcon src={require("../../images/sql.png")} />
                    <AboutIcon src={require("../../images/node.png")} />
                </AboutIconContainer>
                </Pulse>

                </AboutRow>

                <AboutRow>
                    <AboutImg src={require("../../images/dev-ralph.png")}/>
                </AboutRow>
            </AboutCol>
            </Fade>

            <AboutH1>{aboutThree}</AboutH1>
            <AboutCol>

            <TimeLineContainer>

                <TimeLineContent>
                    <AboutIcon src={require("../../images/csb.png")} />
                    <TimeLineTitle>{titleOne}</TimeLineTitle>
                    <TimeLineP>{descOne}</TimeLineP>                    
                    <TimeLineDate>{dateOne}</TimeLineDate>
                </TimeLineContent>
                
                <TimeLineContent>
                    <AboutIcon src={require("../../images/pj-link.png")} />
                    <AboutIcon src={require("../../images/accenture.png")} />
                    <TimeLineTitle>{titleTwo}</TimeLineTitle>
                    <TimeLineP>{descTwo}</TimeLineP>                    
                    <TimeLineP>{descThree}</TimeLineP>                    
                    <TimeLineDate>{dateTwo}</TimeLineDate>
                    <TimeLineButtons>
                        <TimeLineAnchor href={require("../../files/JLP-PJ_LINK-N5-Certificate.pdf")} target="_blank">View Certificate</TimeLineAnchor>
                    </TimeLineButtons>
                </TimeLineContent>

                <TimeLineContent>
                    <AboutIcon src={require("../../images/unionbank.png")} />
                    <TimeLineTitle>{titleThree}</TimeLineTitle>
                    <TimeLineP>{descFour}</TimeLineP>    
                    <TimeLineP>{descFive}</TimeLineP>                    
                    <TimeLineDate>{dateThree}</TimeLineDate>
                    <TimeLineButtons>
                        <TimeLineAnchor href={require("../../files/UB-Data_Science_Development_Program-Certificate.pdf")} target="_blank">View Certificate</TimeLineAnchor>
                        <TimeLineAnchor href={require("../../files/UB-Certified_Data_Science_Apprentice-Certificate.pdf")} target="_blank">View Certificate</TimeLineAnchor>
                        <TimeLineAnchor href={require("../../files/UB-Certificate.pdf")} target="_blank">View Certificate</TimeLineAnchor>
                    </TimeLineButtons>
                </TimeLineContent>

                <TimeLineContent>
                    <AboutIcon src={require("../../images/seminaut.png")} />
                    <TimeLineTitle>{titleFour}</TimeLineTitle>
                    <TimeLineP>{descSix}</TimeLineP>    
                    <TimeLineP>{descSeven}</TimeLineP>                   
                    <TimeLineDate>{dateFour}</TimeLineDate>
                    <TimeLineButtons>
                        <TimeLineAnchor href={require("../../files/Seminaut-Internship.pdf")} target="_blank">View Certificate</TimeLineAnchor>
                    </TimeLineButtons>
                </TimeLineContent>

                <TimeLineContent>
                    <AboutIcon src={require("../../images/monarch-landing.png")} />
                    <TimeLineTitle>{titleFive}</TimeLineTitle>
                    <TimeLineP>{descEight}</TimeLineP>                    
                    <TimeLineDate>{dateFive}</TimeLineDate>
                </TimeLineContent>

                <TimeLineContent>
                    <AboutIcon src={require("../../images/usmc.png")} />
                    <TimeLineTitle>{titleSix}</TimeLineTitle>
                    <TimeLineP>{descNine}</TimeLineP>                    
                    <TimeLineDate>{dateSix}</TimeLineDate>
                </TimeLineContent>

                <TimeLineContent>
                    <TimeLineTitle>{titleEnd}</TimeLineTitle>
                    <TimeLineP>{descEnd}</TimeLineP>                    
                </TimeLineContent>

            </TimeLineContainer>
            
            </AboutCol>
        </AboutContainer>
    </>
  )
}

export default AboutSection