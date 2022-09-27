import React from 'react'
import styled from 'styled-components'

const Slide = ({ image, description }) => {
  return (
    <SlideContainer>
      <img src={image} alt="" />
      <TextSection>
        <h1>{description.title}</h1>
        <p>{description.description}</p>
        <MediaLinks>
          <label htmlFor="link"><i className="fa-regular fa-paper-plane"></i></label>
          <a href={description.link} target='_blank' id='link'>{description.link}</a>
        </MediaLinks>
        <MediaLinks>
          <label htmlFor="repository"><i className="fa-brands fa-github"></i></label>
          <a href={description.repository} target='_blank' id='repository'>{description.repository}</a>
        </MediaLinks>
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
`

const MediaLinks = styled.div`
  width: 100%;
  display: flex;
  margin: 5px 0;

  &>label{
    font-size: 1.2rem;
    margin-right: 1rem;
  }
  &>a{
    font-size: .9rem;
    text-decoration: none;
    color: white;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`
export default Slide