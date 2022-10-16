import React from 'react'
import { 
    FaLinkedin, 
    FaGithubSquare,
    FaFacebookSquare
} from 'react-icons/fa'
import logo from '../../images/logo.png'

import {
    FooterContainer,
    FooterWrapper,
    FooterLinkContainer,
    FooterLinkWrapper,
    FooterLinkItems,
    FooterLinkTitle,
    FooterLink,
    FooterLink2,
    SocialMedia,
    SocialMediaWrapper,
    SocialLogo,
    WebsiteRights,
    SocialIcons,
    SocialIconsLink
} from './FooterElements'

const Footer = () => {
  return (
    <FooterContainer>
        <FooterWrapper>
            <FooterLinkContainer>
                <FooterLinkWrapper>

                    <FooterLinkItems>
                        <FooterLinkTitle>Portfolio</FooterLinkTitle>
                            <FooterLink to="about"
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact="true"
                            offset={-80}>About</FooterLink>
                            <FooterLink to="projects"
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact="true"
                            offset={-80}>Projects</FooterLink>
                            <FooterLink to="contacts"
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact="true"
                            offset={-80}>Contacts</FooterLink>
                    </FooterLinkItems>

                    <FooterLinkItems>
                        <FooterLinkTitle>Social Media</FooterLinkTitle>
                            <FooterLink2 href="https://www.linkedin.com/in/ralph-dahilig/" target="_blank" aria-label="LinkedIn">LinkedIn</FooterLink2>
                            <FooterLink2 href="https://github.com/RalphLMD" target="_blank" aria-label="Github">Github</FooterLink2>
                            <FooterLink2 href="https://www.facebook.com/ralph.dahilig/" target="_blank" aria-label="Facebook">Facebook</FooterLink2>
                    </FooterLinkItems>

                </FooterLinkWrapper>
            </FooterLinkContainer>

            <SocialMedia>
                <SocialMediaWrapper>
                    <SocialLogo src={logo} alt="logo" to=""/>
                    <WebsiteRights>RD © {new Date().getFullYear()} All rights reserved.</WebsiteRights>
                    <SocialIcons>
                        <SocialIconsLink href="https://www.linkedin.com/in/ralph-dahilig/" target="_blank" aria-label="LinkedIn">
                            <FaLinkedin />
                        </SocialIconsLink>
                        <SocialIconsLink href="https://github.com/RalphLMD" target="_blank" aria-label="Github">
                            <FaGithubSquare/>
                        </SocialIconsLink>
                        <SocialIconsLink href="https://www.facebook.com/ralph.dahilig/" target="_blank" aria-label="Facebook">
                            <FaFacebookSquare />
                        </SocialIconsLink>
                    </SocialIcons>
                </SocialMediaWrapper>
            </SocialMedia>
        </FooterWrapper>
    </FooterContainer>
  )
}

export default Footer