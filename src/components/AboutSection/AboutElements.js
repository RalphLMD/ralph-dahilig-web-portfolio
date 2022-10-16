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
    font-size: 0.8rem;
    
    @media screen and (min-width: 780px) {
        font-size: 1.1rem;
        transition: all ease;
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
    max-width: 700px;
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
    transition: 0.3s ease-in-out;
    font-size: 0.8rem;
    
    @media screen and (min-width: 780px) {
        font-size: 1.1rem;
        transition: all ease;
    }
  

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
`

export const TimeLineP = styled.p`
    margin-top: 10px;
`


export const TimeLineDate = styled.h3`
    margin-top: 25px;
`