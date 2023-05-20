import styled from 'styled-components'

export const HeroContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    width: 95%;
    margin: 30px auto;
    height: 800px;
    z-index: 1;
    position: relative;
`   

export const HeroBgContainer = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right:0;
    bottom:0;
    width: 100%;
    height: 100%;
    background-color: #000000;
    z-index: -1;
`

export const HeroBg = styled.img`
    width: 100%;
    height: 100%;
    opacity: 0.3;
    max-width: 100%;
    max-height: 100%;
`

export const HeroProfile = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 2px solid #00ed2c;
    margin: 20px;
    padding: 40px;
`


export const HeroImage = styled.img`
   
`

export const HeroH1 = styled.h1`
    font-weight: 800;
    font-size: 4rem;
    color: #ffffff;

    @media screen and (max-width: 600px) {
        font-size: 3rem;
        transition: all 1s ease;
    }
`

export const HeroH2 = styled.h2`
    font-weight: 200;
    font-size: 3rem;
    color: #ffffff;

    @media screen and (max-width: 600px) {
        font-size: 2.25rem;
        transition: all 1s ease;
    }
    
`

export const HeroH3 = styled.h3`
    font-weight: 00;
    font-size: 3rem;
    color: #00ed2c;

    @media screen and (max-width: 600px) {
        font-size: 2.50rem;
        transition: all ease 1s;
    }
`

export const HeroButton = styled.a`
    margin: 25px;
    padding: 1rem;
    border-radius: 30px;
    background-color: #000000;
    color: #ffffff;
    text-decoration: none;
    font-weight: 800;
    transition: all ease 1s;
    border: 2px solid ;
    

    &:hover {
        transform: scale(1.2);
        background-color: #ffffff;
        color: #000000;
    }
`


