import styled from "styled-components"

export const ProjectContainer = styled.div`
    margin: 40px;
    padding: 25px;
`

export const ProjectWrapper = styled.div`

`

export const ProjectH1 = styled.h1`
    font-weight: 800;
    font-size: 4rem;
    border-bottom: 3px solid #000000;
    text-align: center;
    transition: all 1s;

    @media screen and (max-width: 780px) {
        font-size: 3.25rem;
    }
`
export const ProjectCard = styled.div`
    display: flex;
    flex-wrap: wrap;
    box-shadow: inset 0px 0px 10px rgba(0,0,0,0.9);
    margin: 25px;
    transition: all 1s;

    &:hover {
        transform: scale(1.030);
    }

    @media screen and (max-width: 890px) {
        flex-direction: column;
    }
`

export const CardImgSection = styled.div`
    flex-basis: 50%;
    text-align: center;
`

export const CardImg = styled.img`
    max-width: 100%;
    width: 400px;
    margin: 10px;
    transition: all 1s;

    @media screen and (max-width: 1010px) {
        width: 330px;
    }

    @media screen and (max-width: 700px) {
        width: 300px;
    }

    @media screen and (max-width: 490px) {
        width: 230px;
    }

    @media screen and (max-width: 420px) {
        width: 150px;
    }
`

export const CardInfoSection = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1 1 50%;
`

export const CardDetailSection = styled.div`
    margin: 25px;
`

export const CardTitle = styled.h1`
    margin-bottom: 15px;
    text-align: center;
    font-size: 2.4rem;
    transition: all 1s;
    
    @media screen and (max-width: 880px) {
        font-size: 2rem;
    }

    @media screen and (max-width: 500px) {
        font-size: 1.6rem;
    }
`

export const CardSubTitle = styled.h2`
    margin-bottom: 15px;
    text-align: center;
    font-size: 1.5rem;
    transition: all 1s;
    
    @media screen and (max-width: 880px) {
        font-size: 1.3rem;
    }

    @media screen and (max-width: 500px) {
        font-size: 1.15rem;
    }
`

export const CardPar = styled.p`
    text-align: justify;
    margin: 15px 5px;
    font-size: 1.2rem;
    transition: all 1s;
    
    @media screen and (max-width: 880px) {
        font-size: 1rem;
    }

    @media screen and (max-width: 500px) {
        font-size: 0.85rem;
    }
`

export const CardLinks = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
`

export const CardButton = styled.a`
    padding: 1rem;
    width: 150px;
    text-align: center;
    margin-top: 15px;
    margin-right: 20px;
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





