import styled from 'styled-components'

export const AboutContainer = styled.div`
    margin: 40px;
    padding: 25px;
    text-align: center;
`

export const AboutCol = styled.div`
    display: flex;
    justify-content: center;
    align-content: center;
    margin: 25px;
    
    @media screen and (max-width: 900px) {
        flex-direction: column;
        font-size: 0.80rem;
    }
`

export const AboutRow = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    flex-basis: 100%;
    margin: 0;
`

export const AboutH1 = styled.h1`
    font-weight: 800;
    font-size: 4rem;
    border-bottom: 3px solid #000000;
    @media screen and (max-width: 780px) {
        font-size: 3.25rem;
        transition: all ease;
    }
`

export const AboutP = styled.p`
    margin: 25px;
    text-align: justify;
    line-height: 1.5rem;
    font-size: 1.2rem;
    transition: all 1s;
    
    @media screen and (max-width: 880px) {
        font-size: 1rem;
    }

    @media screen and (max-width: 500px) {
        font-size: 0.85rem;
    }
`

export const AboutImg = styled.img`
    max-width: 100%;
    height: auto;
    border-bottom: 3px solid #000000;
`

export const AboutIconContainer = styled.div`
`

export const AboutIcon = styled.img`
    max-width: 100%;
    height: 160px;
    margin: 10px;
    transition: all 1s;

    &:hover {
        transform: scale(1.2);
        background-color: #ffffff;
        color: #000000;
    }
`

export const TimeLineContainer = styled.div`
    max-width: 800px;
    margin: auto;
`

export const TimeLineContent = styled.div`
    line-height: 1.75em;
    border-top: 3px solid;
    border-image: linear-gradient(to right, #000000 0%, #00ed2c 100%);
    border-image-slice: 1;
    border-width: 3px;
    margin: 0 25px;
    text-align: center;
    padding: 40px;
    position: relative;
    color: #000000;
    transition: all 1s;

&:nth-child(odd) {
    border-right: 3px solid;
    padding-left: 0;
}

&:nth-child(even) {
    border-left: 3px solid;
    padding-right: 0;
}

&:first-child {
    border-top: 0;
    border-top-right-radius:0;
    border-top-left-radius:0;
}

&:last-child {
    border-bottom-right-radius:0;
    border-bottom-left-radius:0;
}

&:hover {
    transform: scale(1.1);
}
`

export const TimeLineTitle = styled.h1`
    margin-bottom: 25px;
    font-size: 2.4rem;
    transition: all 1s;
    
    @media screen and (max-width: 880px) {
        font-size: 2rem;
    }

    @media screen and (max-width: 500px) {
        font-size: 1.6rem;
    }
`

export const TimeLineP = styled.p`
    margin-top: 10px;
    font-size: 1.2rem;
    transition: all 1s;
    text-align: justify;
    
    @media screen and (max-width: 880px) {
        font-size: 1rem;
    }

    @media screen and (max-width: 500px) {
        font-size: 0.85rem;
    }
`


export const TimeLineDate = styled.h3`
    margin-top: 25px;
    margin-top: 25px;
    font-size: 1.3rem;
    transition: all 1s;
    
    @media screen and (max-width: 880px) {
        font-size: 1.1rem;
    }

    @media screen and (max-width: 500px) {
        font-size: 0.95rem;
    }
`

export const TimeLineButtons = styled.div`
    margin: 3rem;
`

export const TimeLineAnchor = styled.a`
    padding: 1rem;
    width: 160px;
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
        cursor:pointer;
    }
`