import React from 'react'

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

            <ContactWrapper>
                <ContactRow>
                    <ContactCol>
                        <ContactRow>
                            <ContactItem>
                                <ContactIcon><FaPhone/></ContactIcon>
                                <ContactTitle>Phone</ContactTitle>
                                <ContactInfo>+1 (714)-452-7355</ContactInfo>
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
                                <ContactInfo href='https://www.google.com/maps/place/1551+Fairway+Dr+%23201,+Naperville,+IL+60563/@41.7924399,-88.2204695,17z/data=!3m1!4b1!4m5!3m4!1s0x880ef90f390222c1:0xcc41d15cd149a698!8m2!3d41.7924399!4d-88.2182808' target='_blank'>1551 Fairway Drive Apartment 201, Naperville, IL 60563</ContactInfo>
                            </ContactItem>
                        </ContactRow>
                    </ContactCol>
                </ContactRow>

            </ContactWrapper>

        </ContactContainer>
    </>
  )
}

export default ContactSection