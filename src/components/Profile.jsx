import React from 'react'
import styled, { css, keyframes } from 'styled-components'
import VideoBack from '../assets/img/Video-Back.mp4'

const Profile = () => {
    return (
        <ContainerProfile id='home'>
            <VideoContainer autoPlay loop muted preload='true'>
                <source src={VideoBack} type='video/mp4' />
            </VideoContainer>
            <TextContainer>
                <TypingText>
                    Full Stack Developer.
                </TypingText>
                <DynamicText>
                    <StaticText>I Love</StaticText>
                    <Rotate>
                        <span>Cats</span>
                        <span>Programming</span>
                        <span>New Challenges</span>
                    </Rotate>
                </DynamicText>
            </TextContainer>
        </ContainerProfile>
    )
}

const typing = keyframes`
    from{
        width: 0;
    }
    to{
        width: 18ch;
    }
`

const blink = keyframes`
    50%{
        border-color: transparent;
    }
`

const change = keyframes`
    0%, 10% {top: 1px;}
    15%, 25% {top: -40px;}
    30%, 40% {top: -81px;}
    45%, 55% {top: -40px;}
    60%, 100% {top: 1px;}
`

const ContainerProfile = styled.section`
    position: relative;
    width: 100%;
    height: 100vh;

    &>video, 
    &>div{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        margin: 0;
    }
`
const VideoContainer = styled.video`
    object-fit: cover;
`
const TextContainer = styled.div`
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 30px;
`

const TypingText = styled.div`
    width: 18ch;
    color: white;
    white-space: nowrap;
    overflow: hidden;
    border-right: 3px solid;
    font-size: 2.7rem;
    animation: ${typing} 3s both steps(18) infinite alternate, ${blink} .5s step-end infinite;
`

const DynamicText = styled.div`
    display: flex;
    justify-content: center;
    height: 40px;
    overflow: hidden;
    letter-spacing: 2px;
    font-size: 2rem;
`

const StaticText = styled.span`
    color: white;
    color: #fff;
    text-shadow: none;
    padding-right: 4px;
`
const Rotate = styled.div`
    position: relative;
    animation: ${change} 9s infinite;

    &>span{
        display: block;
        color:#31797C;
        text-shadow: 0px 0px 2px rgba(0, 0, 0, .3);
        font-weight: bold;
    }
`
export default Profile