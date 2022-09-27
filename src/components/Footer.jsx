import React from 'react'
import styled from 'styled-components'
import ContactForm from './ContactForm'

const Footer = () => {
  return (
    <FooterContainer>
      <FooterSection>
        <ContactUsSection id='left'>
          <h1>Social Media</h1>
          <DivContainer>
            <a href="https://github.com/VPseudo11" target="_blank">
              <i className="fa-brands fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/javier-calva-a150ab233/" target="_blank">
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a href="https://api.whatsapp.com/send?phone=593958791418&text=Hola,%20revise%20tu%20portafolio%20y%20estoy%20interesado%20en%20informacion" target="_blank">
              <i className="fa-brands fa-whatsapp"></i>
            </a>
          </DivContainer>
        </ContactUsSection>
        <ServicesSection id='center'>
          <h1>My Services</h1>
          <ul>
            <li>Front-End Development</li>
            <li>Back-End Development</li>
            <li>Flutter App Development</li>
            <li>database designer</li>
            <li>mobile app development</li>
          </ul>
        </ServicesSection>
        <ContactForm />
      </FooterSection>
      <p>&copy; 2022 Copyright | Designed by Pseudo Dev</p>
    </FooterContainer>
  )
}

const FooterContainer = styled.footer`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: rgba(49, 121, 124, 1);
    &>p{
      width: 100%;
      background: rgba(0, 0, 0, .1);
      text-align: center;
      color: var(--color-1);
      margin: 0;
    }
`

const FooterSection = styled.div`
  display: flex;
  flex-flow: row nowrap;
  padding: 5px;
  align-content: space-between;
  justify-content: space-between;
  max-width: 1200px;
  width: 100%;

  &>div{
    width: 33.33%;
  }

  @media (max-width: 768px){
    flex-flow: row wrap;

    &>div{
      width: 33.33% !important;
    }

    #left{
      order: 1;
      flex: 0.5;
    }

    #center{
      order: 2;
      flex: 0.5;
    }

    #right{
      order: 3;
      flex: 100%;
    }
  }
`

const ContactUsSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  &>h1{
    color: rgba(92, 4, 13, 1);
    font-size: 1.5rem;
    font-weight: bold;
    width: 100%;
  }
`

const DivContainer = styled.div`
  width: 60%;
  display: flex;
  justify-content: space-around;
  margin-top: 15px;
  &>a{
    color: white;
    font-size: 2.1rem;
    transition: all .5s ease;

    &:hover{
      transform: scale(1.1);
      color: rgba(92, 4, 13, 1)
    }
  }

  @media (max-width: 768px){
    width: 100%;
    justify-content: space-around;
  }
`

const ServicesSection = styled(ContactUsSection)`
  &>ul{
    margin-top: 15px;
    width: 90%;
    list-style: none;
    padding: 0;
    &>li{
      margin: 5px 0;
      color: white;
      font-size: 1rem;
    }
  }
`


export default Footer