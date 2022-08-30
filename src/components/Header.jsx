import React from 'react'
import styled from 'styled-components'
import logo from './../assets/img/PseudoDeveloper.png'

const Header = () => {
    return (
        <HeaderContainer>
            <LogoContainer>
                <ImgLogo src={logo} alt="" />
            </LogoContainer>
            <ListSkills>
                <ItemContainer href="">Home</ItemContainer>
                <ItemContainer href="">About Me</ItemContainer>
                <ItemContainer href="">Briefcase</ItemContainer>
                <ItemContainer href="">My Abilities</ItemContainer>
            </ListSkills>
        </HeaderContainer>
    )
}

const HeaderContainer = styled.div`
    max-width: 1200px;
    width: 100%;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: var(--color-4);
`

const LogoContainer = styled.div`
    width: 100px;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 30px;
`

const ImgLogo = styled.img`
    max-width: 100%;
    max-height: 100%;
    object-fit: cover;
`
const ListSkills = styled.ul`
    margin: 0 30px;
    padding: 0;
`

const ItemContainer = styled.a`
    text-decoration: none;
    font-size: 1.2rem;
    padding: 0 15px;
    font-style: bold;
    font-weight: 600;
    color: var(--color-5);
`
export default Header