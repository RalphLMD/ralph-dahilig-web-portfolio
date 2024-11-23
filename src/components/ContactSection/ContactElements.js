import styled from "styled-components"

export const ContactContainer = styled.div`
    margin: 40px;
    padding: 25px;
`

export const ContactH1 = styled.h1`
    font-weight: 800;
    font-size: 3rem;
    border-bottom: 3px solid #000000;
    text-align: center;

    @media screen and (max-width: 500px) {
        font-size: 1.5rem;
        transition: 0.3s ease-in-out;
    }
` 

export const ContactWrapper = styled.div`
    margin-top: 10px;
`

export const ContactRow = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    margin: 25px;
`
export const ContactCol = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex: 1 1 50%;

    @media screen and (max-width: 990px) {
        flex-direction: column;
    }
`

export const ContactItem = styled.div`
    display: grid;
    text-align: center;
    align-items: center;
    max-width: 100%;
    width: 300px;
    height: 270px;
    box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
    transition: all 1s;

    &:hover {
        transform: scale(1.2);
        background-color: #ffffff;
        color: #000000;
    }
`

export const ContactIcon = styled.a`
    margin-top: 20px;
    font-size: 40px;
`

export const ContactTitle = styled.h1`

`

export const ContactInfo = styled.a`
    margin: 20px;
    text-decoration: none;
    color: #000000;
    cursor: pointer;
    font-size: 1.2rem;
    transition: all 1s;
    
    @media screen and (max-width: 880px) {
        font-size: 1rem;
    }

    @media screen and (max-width: 500px) {
        font-size: 0.85rem;
    }
`