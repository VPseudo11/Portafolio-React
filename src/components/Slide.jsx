import React from 'react'
import styled from 'styled-components'

const Slide = ({ image, description }) => {
  return (
    <SlideContainer>
      <img src={image} alt="" />
      <TextSection>
        <h1>{description.title}</h1>
        <p>{description.description}</p>
        <a href={description.link} target='_blank'>{description.link}</a>
      </TextSection>
    </SlideContainer>
  )
}


const SlideContainer = styled.div`
  min-width: 100%;
  overflow: hidden;
  transition: .3s ease all;
  display: flex;
  &>img{
    width: 65%;
    object-fit: contain;
    vertical-align: top;
  }

  @media (max-width: 768px){
    &>img{
      width: 100%;
    }
    flex-direction: column;
  }
`

const TextSection = styled.div`
  background: rgba(49, 121, 124);
  padding: 30px 60px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  &>a{
    text-decoration: none;
    color: white;
  }
`
export default Slide