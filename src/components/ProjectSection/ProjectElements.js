import styled from "styled-components"

export const ProjectContainer = styled.div`
`

export const ProjectWrapper = styled.div`

`

export const ProjectH1 = styled.h1`
    font-weight: 800;
    font-size: 3rem;
    border-bottom: 3px solid #000000;
    text-align: center;
    transition: all 1s;

    @media screen and (max-width: 500px) {
        font-size: 1.5;
        transition: all ease;
    }
`

export const CardH2 = styled.h2`
    font-weight: 800;
    font-size: 2rem;
    color: #cccccc;
    text-align: center;
    transition: all 1s;

    @media screen and (max-width: 880px) {
        font-size: 1.5rem;
    }

    @media screen and (max-width: 500px) {
        font-size: 1rem;
    }
`
export const ProjectCard = styled.div`
    display: flex;
    flex-wrap: wrap;
    box-shadow: inset 0px 0px 10px rgba(0,0,0,0.9);
    margin: 8rem;
    padding: 2rem;
    transition: all 1s; 

    &:hover {
        transform: scale(1.030);
    }

    @media screen and (max-width: 900px) {
        flex-direction: column;
    }

    @media screen and (max-width: 410px) {
        box-shadow: inset 0px 0px 0px rgba(0,0,0,0.0);
    }

`

export const CardImgSection = styled.div`
    flex-basis: 50%;
`

export const CardImg = styled.img`
    /*     
    transition: all 1s;

    &:hover {
        transform: rotate(360deg);
    } 
    */
    width: 100%;
    padding: 5rem;
    margin-bottom: 1.5rem;

`

export const CardInfoSection = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1 1 50%;
`

export const CardDetailSection = styled.div`
`

export const CardTitle = styled.h1`
    margin-bottom: 1rem;
    text-align: center;
    font-size: 2.5rem;
    transition: all 1s;

    @media screen and (max-width: 1100px) {
        font-size: 2rem;
    }
    
    @media screen and (max-width: 880px) {
        font-size: 1.75rem;
    }

    @media screen and (max-width: 500px) {
        font-size: 1rem;
    }
`

export const CardSubTitle = styled.h2`
    margin-bottom: 1rem;
    text-align: center;
    font-size: 1.5rem;
    transition: all 1s;

    @media screen and (max-width: 1100px) {
        font-size: 1.25rem;
    }
    
    @media screen and (max-width: 880px) {
        font-size: 1rem;
    }

    @media screen and (max-width: 500px) {
        font-size: 0.9rem;
    }
`

export const CardPar = styled.p`
    text-align: justify;
    margin: 1rem;
    font-size: 1.25rem;
    transition: all 1s;

    @media screen and (max-width: 1100px) {
        font-size: 1rem;
    }
    
    @media screen and (max-width: 880px) {
        font-size: 0.90rem;
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
    margin: 0.5rem;
    width: 150px;
    text-align: center;
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

    @media screen and (max-width: 500px) {
        width: 120px;
        font-size: 0.80rem;
    }
`





