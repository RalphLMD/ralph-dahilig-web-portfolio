import React from 'react'

import {
  /* Projects */
  ProjectContainer,
  ProjectH1,
  ProjectWrapper,
  ProjectCard,
  CardImgSection,
  CardImg,
  CardInfoSection,
  CardDetailSection,
  CardTitle,
  CardSubTitle,
  CardPar,
  CardLinks,
  CardButton

} from './ProjectElements'

const ProjectSection = ({
  cardTitleOne, cardTitleTwo, 
  cardTitleThree, cardTitleFour, 
  cardTitleFive, 
  cardDateOne, cardDateTwo, 
  cardDateThree, cardDateFour,
  cardDateFive,
  cardParOne, cardParTwo, 
  cardParThree, cardParFour,
  cardParFive, cardParSix, cardParSeven,
  cardParEight, cardParNine,
  cardParTen, cardParEleven, cardParTwelve
}) => {
  return (
    <>
        <ProjectContainer id='projects'>
        <ProjectH1>Projects</ProjectH1>

        <ProjectWrapper> 
        
          <ProjectCard>
            <CardImgSection>
              <CardImg src={require("../../images/controller.png")}/>
            </CardImgSection>

            <CardInfoSection>
              <CardDetailSection>
                  <CardTitle>{cardTitleOne}</CardTitle>
                  <CardSubTitle>{cardDateOne}</CardSubTitle>
                  <CardPar>{cardParOne}</CardPar>
                  <CardPar>{cardParTwo}</CardPar>
                  <CardLinks>
                    <CardButton href="https://github.com/RalphLMD/webdevt-partner-assignment" target="_blank">Github</CardButton>
                    <CardButton href="https://ralphlmd.github.io/webdevt-partner-assignment/" target="_blank">Live Preview</CardButton>
                  </CardLinks>
              </CardDetailSection>
            </CardInfoSection>
          </ProjectCard>

          <ProjectCard>
            <CardInfoSection>
              <CardDetailSection>
                  <CardTitle>{cardTitleTwo}</CardTitle>
                  <CardSubTitle>{cardDateTwo}</CardSubTitle>
                  <CardPar>{cardParThree}</CardPar>
                  <CardPar>{cardParFour}</CardPar>
                  <CardPar>{cardParFive}</CardPar>
                  <CardLinks>
                    <CardButton href="https://youtu.be/D1kJOl2-1e4" target="_blank">Youtube</CardButton>
                    <CardButton href={require("../../files/2f-order-hi-fidelity.pdf")} target="_blank">PDF</CardButton>
                  </CardLinks>
              </CardDetailSection>
            </CardInfoSection>

            <CardImgSection>
              <CardImg src={require("../../images/2f-go.png")}/>
            </CardImgSection>
          </ProjectCard>

          <ProjectCard>
            <CardImgSection>
              <CardImg src={require("../../images/mentalit-e.png")}/>
            </CardImgSection>

            <CardInfoSection>
              <CardDetailSection>
                  <CardTitle>{cardTitleThree}</CardTitle>
                  <CardSubTitle>{cardDateThree}</CardSubTitle>
                  <CardPar>{cardParSix}</CardPar>
                  <CardPar>{cardParSeven}</CardPar>
                  <CardLinks>
                    <CardButton href="https://github.com/RalphLMD/Mentalit-E" target="_blank">Github</CardButton>
                    <CardButton href={require("../../files/mentalit-e.pdf")} target="_blank">PDF</CardButton>
                    <CardButton href="https://mentalite.isproj.org/" target="_blank">Live Preview</CardButton>
                  </CardLinks>
              </CardDetailSection>
            </CardInfoSection>
          </ProjectCard>

          <ProjectCard>
            <CardInfoSection>
              <CardDetailSection>
                  <CardTitle>{cardTitleFour}</CardTitle>
                  <CardSubTitle>{cardDateFour}</CardSubTitle>
                  <CardPar>{cardParEight}</CardPar>
                  <CardPar>{cardParNine}</CardPar>
                  <CardLinks>
                    <CardButton href="https://github.com/RalphLMD/coursera-meta-portofolio-project" target="_blank">Github</CardButton>
                    <CardButton href="https://ralphlmd.github.io/coursera-meta-portofolio-project/" target="_blank">Live Preview</CardButton>
                  </CardLinks>
              </CardDetailSection>
            </CardInfoSection>

            <CardImgSection>
              <CardImg src={require("../../images/little-lemon.png")}/>
            </CardImgSection>
          </ProjectCard>

          <ProjectCard>
            <CardImgSection>
              <CardImg src={require("../../images/logo.png")}/>
            </CardImgSection>

            <CardInfoSection>
              <CardDetailSection>
                  <CardTitle>{cardTitleFive}</CardTitle>
                  <CardSubTitle>{cardDateFive}</CardSubTitle>
                  <CardPar>{cardParTen}</CardPar>
                  <CardPar>{cardParEleven}</CardPar>
                  <CardPar>{cardParTwelve}</CardPar>
                  <CardLinks>
                    <CardButton href="" target="_blank">Github</CardButton>
                    <CardButton href="" target="_blank">Live Preview</CardButton>
                  </CardLinks>
              </CardDetailSection>
            </CardInfoSection>
          </ProjectCard>

        </ProjectWrapper>

        </ProjectContainer>
    </>
  )
}

export default ProjectSection