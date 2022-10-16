import styled from "styled-components";
import { Link as LinkScroll } from 'react-scroll'

export const FooterContainer = styled.footer`
    background-color: #000000;
`

export const FooterWrapper = styled.div`
    padding: 45px 25px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 1100px;
    margin: 0 auto;
`
export const FooterLinkContainer = styled.div`
    display: flex;
    justify-content: center;

    @media screen and (max-width: 820px){
        padding-top: 30px;
    }
`

export const FooterLinkWrapper = styled.div`
    display: flex;

    @media screen and (max-width: 820px){
        flex-direction: column;
    }
`

export const FooterLinkItems = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 20px;
    text-align: left;
    width: 160px;
    box-sizing: border-box;
    color: #ffffff;

    @media screen and (max-width: 420px){
        margin: 0;
        padding: 10px;
        width: 100%;
    }
`
export const FooterLinkTitle = styled.div`
    font-size: 1.5rem;
    font-weight: 800;
    margin-bottom: 16px;
    padding: 4px;
    color: #00ed2c;
`

export const FooterLink = styled(LinkScroll)`
    color: #ffffff;
    text-decoration: none;
    margin-bottom: 16px;
    font-size: 1rem;
    cursor: pointer;

    &:hover {
        color: #00ed2c;
        transition: 0.3s ease-in-out;
    }
`

export const FooterLink2 = styled.a`
    color: #ffffff;
    text-decoration: none;
    margin-bottom: 16px;
    font-size: 1rem;
    cursor: pointer;

    &:hover {
        color: #00ed2c;
        transition: 0.3s ease-in-out;
    }
`

export const SocialMedia = styled.section`
    max-width: 1000px;
    width: 100%;
`

export const SocialMediaWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1100px;
    margin: 40ppx auto 0 auto;

    @media screen and (max-width: 820px) {
        flex-direction: column;
    }
`

export const SocialLogo = styled(LinkScroll)`
    color: #ffffff;
    display: flex;
    justify-self: start;
    align-items: center;
    margin-bottom: 16px;
    font-weight: bold;
    text-decoration: none;
    cursor: pointer;
    font-size: 1.5rem;
`

export const WebsiteRights = styled.small`
    color: #ffffff;
    font-size: 1rem;
    font-weight: 800;
    margin-bottom: 16px;
`

export const SocialIcons = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 240px;
`

export const SocialIconsLink = styled.a`
    color: #ffffff;
    font-size: 50px;
    transition: 0.3s ease-in-out;
    &:hover {
        color: #00ed2c;
        transform: scale(1.2);
    }
`
