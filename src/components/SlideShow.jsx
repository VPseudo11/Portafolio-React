import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'

import ReactComerce from '../assets/img/img-briefcase/ReactComerce.png'
import Pokedex from '../assets/img/img-briefcase/Pokedex.png'
import RickAndMortys from '../assets/img/img-briefcase/RickAndMortys.png'
import WeatherApp from '../assets/img/img-briefcase/WeatherApp.png'

import LeftArrow from '../assets/img/svg/iconmonstr-angel-left-thin.svg'
import RightArrow from '../assets/img/svg/iconmonstr-angel-right-thin.svg'

import ProjectsBriefcase from '../json/Briefcase.json'
import Slide from './Slide'

const SlideShow = () => {
    const slideshow = useRef(null)
    const intervalSlideShow = useRef(null)
    let ImagesProjects = [WeatherApp, RickAndMortys, ReactComerce, Pokedex];

    const nextSlide = () => {
        if (slideshow.current.children.length > 0) {
            const firstElement = slideshow.current.children[0]
            slideshow.current.style.transition = `500ms ease-out all`

            const sizeSlide = slideshow.current.children[0].offsetWidth
            slideshow.current.style.transform = `translateX(-${sizeSlide}px)`

            const transitionFunction = () => {
                slideshow.current.style.transition = 'none'
                slideshow.current.style.transform = `translateX(0)`

                slideshow.current.appendChild(firstElement)

                slideshow.current.removeEventListener('transitionend', transitionFunction)
            }

            slideshow.current.addEventListener('transitionend', transitionFunction)
        }
    }

    const previusSlide = () => {
        if (slideshow.current.children.length > 0) {
            const lastIndex = slideshow.current.children.length - 1
            const lastElement = slideshow.current.children[lastIndex]

            slideshow.current.insertBefore(lastElement, slideshow.current.firstChild)

            slideshow.current.style.transition = 'none'
            const sizeSlide = slideshow.current.children[0].offsetWidth
            slideshow.current.style.transform = `translateX(-${sizeSlide}px)`

            setTimeout(() => {
                slideshow.current.style.transition = '500ms ease-out all'
                slideshow.current.style.transform = `translateX(0)`
            }, 30)
        }
    }

    useEffect(() => {
        intervalSlideShow.current = setInterval(() => {
            nextSlide()
        }, 5000)

        slideshow.current.addEventListener('mouseenter', () => {
            clearInterval(intervalSlideShow.current)
        })

        slideshow.current.addEventListener('mouseleave', () => {
            intervalSlideShow.current = setInterval(() => {
                nextSlide()
            }, 5000)
        })
    }, [])


    return (
        <MainContainer>
            <SlideShowContainer>
                <SlideContainer ref={slideshow}>
                    {
                        ProjectsBriefcase.map(project => (
                            <Slide key={project.id} image={ImagesProjects[project.id - 1]} description={project} />
                        ))
                    }
                </SlideContainer>
                <SlideControls>
                    <Button onClick={previusSlide}>
                        <img src={LeftArrow} alt="" />
                    </Button>
                    <Button right onClick={nextSlide}>
                        <img src={RightArrow} alt="" />
                    </Button>
                </SlideControls>
            </SlideShowContainer>
        </MainContainer>
    )
}

const MainContainer = styled.section`
    max-width: 1200px;
    width: 100%;
    overflow: hidden;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`
const SlideShowContainer = styled.div`
    width: 100%;
    position: relative;
`

const SlideContainer = styled.div`
    display: flex;
    flex-wrap: nowrap;
`

const SlideControls = styled.div`
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
`

const Button = styled.button`
    pointer-events: all;
    background: none;
    border: none;
    cursor: pointer;
    outline: none;
    width: 50px;
    height: 100%;
    text-align: center;
    position: absolute;
    transition: .3s ease all;

    ${porps => porps.right ? 'right: 0' : 'left: 0'};

    &>img{
        width: 100%;
        object-fit: contain;
    }

    &:hover {
        background: rgba(0, 0, 0, .1);
    }
`

export default SlideShow