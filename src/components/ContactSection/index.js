import React from 'react'

import Fade from "react-reveal/Fade"

import { 
    FaPhone,
    FaMailBulk,
    FaMapMarked
} from 'react-icons/fa'


import { 
    ContactContainer, 
    ContactH1, 
    ContactWrapper, 
    ContactCol, 
    ContactRow, 
    ContactItem,
    ContactIcon,
    ContactTitle, 
    ContactInfo
} from './ContactElements'

const ContactSection = () => {
  return (
    <>
        <ContactContainer id='contacts'>
            <ContactH1>Contacts</ContactH1>

            <Fade top distance="20%" duration={1500}>
            <ContactWrapper>
                <ContactRow>
                    <ContactCol>
                        <ContactRow>
                            <ContactItem>
                                <ContactIcon><FaPhone/></ContactIcon>
                                <ContactTitle>Phone</ContactTitle>
                                <ContactInfo>+1 (657)-527-5421</ContactInfo>
                            </ContactItem>
                        </ContactRow>

                        <ContactRow>
                            <ContactItem>
                                <ContactIcon><FaMailBulk/></ContactIcon>
                                <ContactTitle>Email</ContactTitle>
                                <ContactInfo href='mailto:Ralphlance11@gmail.com'>Ralphlance11@gmail.com</ContactInfo>
                            </ContactItem>
                        </ContactRow>

                        <ContactRow>
                            <ContactItem>
                                <ContactIcon><FaMapMarked/></ContactIcon>
                                <ContactTitle>Location</ContactTitle>
                                <ContactInfo href='https://www.google.com/maps/place/Naperville,+IL/@41.7460695,-88.1618829,12z/data=!3m1!4b1!4m6!3m5!1s0x880e5761e216cd07:0x87df9c2c7f203052!8m2!3d41.7508391!4d-88.1535352!16zL20vMHM2ZzQ?entry=ttu' target='_blank'>Naperville, Illinois</ContactInfo>
                            </ContactItem>
                        </ContactRow>
                    </ContactCol>
                </ContactRow>

            </ContactWrapper>
            </Fade>

        </ContactContainer>
    </>
  )
}

export default ContactSection