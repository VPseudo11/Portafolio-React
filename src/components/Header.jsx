import React from 'react'
import styled from 'styled-components'
import logo from './../assets/img/PseudoDeveloper.svg'

const Header = () => {
    return (
        <HeaderContainer>
            <LogoContainer>
                <ImgLogo src={logo} alt="" />
            </LogoContainer>
            <NavContainer>
                <CheckMenu type='checkbox' id='check' />
                <MenuResponsive htmlFor='check'><i className="fa-solid fa-bars"></i></MenuResponsive>
                <ul>
                    <li><ItemContainer href="#home">Home</ItemContainer></li>
                    <li><ItemContainer href="#aboutMe">About Me</ItemContainer></li>
                    <li><ItemContainer href="#">Briefcase</ItemContainer></li>
                    <li><ItemContainer href="#abilities">My Abilities</ItemContainer></li>
                </ul>
            </NavContainer>
        </HeaderContainer>
    )
}

const HeaderContainer = styled.header`
    max-width: 1200px;
    width: 100%;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: transparent;
    position: fixed;
    top: 0;
    z-index: 1;
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
const NavContainer = styled.nav`
    display: flex;
    align-items: center;
    margin: 0 30px;
    

    &>ul{
        list-style: none;
        display: flex;
        padding: 0;
        align-items: center;
        
        &>li{
            &:hover {
                border-bottom: 3px solid #31797C;
                padding: 5px 0;
            }
        }
    }

    @media (max-width: 768px){
        &>label{
            display: block;
        }

        &>ul{
            z-index: 2;
            position: fixed;
            width: 100%;
            height: 25vh;
            background: rgba(130, 143, 156, 1);
            top: 80px;
            right: -100%;
            flex-direction: column;
            transition: all .5s ease;

            &>li{
                width: 100%;
                height: 50px;
                display: flex;
                justify-content: center;
                align-items: center;
            }
        }

        &>input:checked ~ul{
            right: 0;
        }
    }
`

const ItemContainer = styled.a`
    text-decoration: none;
    font-size: 1.2rem;
    padding: 10px 15px;
    font-style: bold;
    font-weight: 600;
    color: #31797C;
    line-height: normal;
    border-bottom: 2px solid transparent;
`

const CheckMenu = styled.input`
    display: none;
`

const MenuResponsive = styled.label`
    font-size: 24px;
    float: right;
    line-height: 65px;
    cursor: pointer;
    display: none;
    color: #31797C;
`
export default Header