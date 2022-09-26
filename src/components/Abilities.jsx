import React from 'react'
import styled from 'styled-components'

import HTML_img from './../assets/img/img-skills-abilities/html-5.png'
import CSS_img from './../assets/img/img-skills-abilities/css-3.png'
import JS_img from './../assets/img/img-skills-abilities/js.png'
import Node_img from './../assets/img/img-skills-abilities/node-js.png'
import TS_img from './../assets/img/img-skills-abilities/typescript.png'
import React_img from './../assets/img/img-skills-abilities/react.png'

import Git_img from './../assets/img/img-skills-abilities/git.svg'
import GitHub_img from './../assets/img/img-skills-abilities/github.svg'
import PS_img from './../assets/img/img-skills-abilities/photo_shop.png'
import Unity_img from './../assets/img/img-skills-abilities/unity.png'

const Abilities = () => {
    return (
        <SectionSkillsContainer id='abilities'>
            <SectionContainer>
                <h2><span>Knowledge</span> Tools</h2>
                <KnowledgeSection>
                    <ItemContainer>
                        <img src={HTML_img} alt="" />
                        <h3>HTML</h3>
                    </ItemContainer>
                    <ItemContainer>
                        <img src={CSS_img} alt="" />
                        <h3>CSS</h3>
                    </ItemContainer>
                    <ItemContainer>
                        <img src={JS_img} alt="" />
                        <h3>JavaScript</h3>
                    </ItemContainer>
                    <ItemContainer>
                        <img src={Node_img} alt="" />
                        <h3>Node JS</h3>
                    </ItemContainer>
                    <ItemContainer>
                        <img src={TS_img} alt="" />
                        <h3>TypeScript</h3>
                    </ItemContainer>
                    <ItemContainer>
                        <img src={React_img} alt="" />
                        <h3>React JS</h3>
                    </ItemContainer>
                </KnowledgeSection>
            </SectionContainer>
            <SectionContainer>
                <h2><span>Dev</span>  Tools</h2>
                <ToolsSection>
                    <ItemContainer>
                        <img src={Git_img} alt="" />
                        <h3>Git</h3>
                    </ItemContainer>
                    <ItemContainer>
                        <img src={GitHub_img} alt="" />
                        <h3>GitHub</h3>
                    </ItemContainer>
                    <ItemContainer>
                        <img src={PS_img} alt="" />
                        <h3>PhotoShop</h3>
                    </ItemContainer>
                    <ItemContainer>
                        <img src={Unity_img} alt="" />
                        <h3>Unity</h3>
                    </ItemContainer>
                </ToolsSection>
            </SectionContainer>
        </SectionSkillsContainer>
    )
}

const SectionSkillsContainer = styled.section`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, auto));
    justify-content: center;
    gap: 100px;
    width: 100%;
    height: 100vh;
    margin: 0px auto;
    align-content: center;
    @media (max-width: 768px){
        gap: 15px;
        height: auto;
    }
`

const SectionContainer = styled.div`
    &>h2{
        text-align: center;
        padding: 30px 0 60px 0;
        color: white;
        &>span{
            color: rgba(92, 4, 27, 1);
        }
    }
`

const KnowledgeSection = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(110px, auto));
    justify-content: center;
    gap: 25px;
`

const ItemContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    &>img{
        width: 90px;
    }

    &>h3{
        background-color: var(--color-3);
        text-align: center;
        border-radius: 5px;
        padding: 5px 0;
        font-family: 'Amatic SC', cursive;
        font-size: 1.2rem;
        font-weight: bold 700;
        width: 100px;
        color: var(--color-1);
        opacity: 0;
        transform: translate(0, -100px);
        transition: all .4s ease;
        margin: 0;
    }

    &:hover h3{
        opacity: 1;
        transform: translate(0, -130px);
    }

    @media (max-width: 768px){
        &>img{
            width: 60px;
        }
    }
`

const ToolsSection = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(110px, auto));
    justify-content: center;
    gap: 25px;
`
export default Abilities