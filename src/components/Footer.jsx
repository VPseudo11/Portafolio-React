import React from 'react'
import styled from 'styled-components'

const Footer = () => {
  return (
    <FooterContainer>
        <p>&copy; 2022 Copyright | Designed by Pseudo Dev</p>
    </FooterContainer>
  )
}

const FooterContainer = styled.footer`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(49, 121, 124, 1);
    &>p{
        color: var(--color-1)
    }
`

export default Footer