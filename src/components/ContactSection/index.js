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
                                <ContactInfo>+63 (995)-790-2177</ContactInfo>
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
                                <ContactInfo href='https://www.google.com/maps/place/EZR+Motocycle+Repair+Shop+(Specialized+on+Honda+Cb400sf+Parts,+Repair+%26+Custom+Modifications)/@14.6501637,120.9678906,20z/data=!4m20!1m13!4m12!1m4!2m2!1d120.9679795!2d14.6503399!4e1!1m6!1m2!1s0x3397b5c3021fdf31:0x4b9af86f8d80b2ce!2sEZR+Motocycle+Repair+Shop+(Specialized+on+Honda+Cb400sf+Parts,+Repair+%26+Custom+Modifications),+Tulingan+st,+corner+Dagat-Dagatan+Ave,+Caloocan,+1400+Metro+Manila,+Philippines!2m2!1d120.9679751!2d14.650349!3m5!1s0x3397b5c3021fdf31:0x4b9af86f8d80b2ce!8m2!3d14.6503399!4d120.9679795!16s%2Fg%2F11c1prgkbc' target='_blank'>Lot 34 Blk 28 PH3 F1 Tulingan St. Kaunlaran Village, Caloocan City</ContactInfo>
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