import React from 'react'
import styled from 'styled-components'
import Profile_Img from './../assets/img/Profile.png'

const AboutMe = () => {
    return (
        <AboutMeSection>
            <ImageProfileContainer>
                <ImageProfile src={Profile_Img} alt="" />
                <SocialProfile>
                    <a href="https://github.com/VPseudo11" target='blank'><i className="fa-brands fa-github"></i></a>
                    <a href="https://www.linkedin.com/in/javier-calva-a150ab233/" target='blank'><i className="fa-brands fa-linkedin"></i></a>
                    <a href='/'><i className="fa-solid fa-message"></i></a>
                </SocialProfile>
            </ImageProfileContainer>
            <DescriptionProfile>
                <p>Mi nombre es Diego Javier Calva, soy estudiante de Academlo como full Stack Web Development y también
                    en la Universidad Nacional de Loja en la carreara de Computación, me gusta trabajar tanto en el
                    Frontend como en el Backend, así como también en proyectos relacionados a videojuegos, me considero
                    una persona que aprende muy rápido y sobre todo alguien que le gusta implementar mucha lógica al
                    momento de resolver un problema.</p>
                <p>He trabajado en diferentes aplicaciones de escritorio usando java y también en algunos
                    videojuegos indie usando Unity y C#, actualmente me he enfocado de lleno a lo que es el Desarrollo
                    Web, ya que me gusta probar nuevas cosas, nuevas funcionalidades del navegador y poner a prueba mis
                    habilidades para adaptarme a un nuevo enfoque de la programación.</p>
            </DescriptionProfile>
        </AboutMeSection>
    )
}

const AboutMeSection = styled.section`
    max-width: 1200px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 30px 30px;
    gap: 15px;
    background-color: rgba(0, 0, 0, .1);
`

const ImageProfileContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0px 15px;
    flex-direction: column;
    gap: 15px;
`

const ImageProfile = styled.img`
    width: 220px;
    height: 220px;
    object-fit: cover;
    border-radius: 50%;
`

const SocialProfile = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;
    &>a{
        font-size: 2.1rem;
        color: var(--color-4);
        &:hover{
            color: var(--color-5);
            transform: scale(1.2);
            transition: all .3s ease;
        }
    }
`

const DescriptionProfile = styled.div`
    background-color: rgba(193, 170, 192, .6);
    padding: 5px;
    &>p {
        font-size: 1.2rem;
        text-align: justify;
    }
`



export default AboutMe