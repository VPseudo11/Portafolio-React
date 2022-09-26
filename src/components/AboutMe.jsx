import React from 'react'
import styled from 'styled-components'
import Profile_Img from './../assets/img/Profile.png'

const AboutMe = () => {
    return (
        <AboutMeSection id='aboutMe'>
            <ImageProfileContainer>
                <img src={Profile_Img} alt="" />
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
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;
    
    @media(max-width: 768px){
        flex-direction: column;
        height: auto;
        margin: 30px 0;
    }
`

const ImageProfileContainer = styled.div`
    padding: 30px;

    &>img{
        width: 250px;
        border: 6px solid #31797C;
        border-left: none;
        border-bottom: none;
        box-shadow: rgba(49, 121, 124, 0.4) -5px 5px, rgba(49, 121, 124, 0.3) -10px 10px, rgba(49, 121, 124, 0.2) -15px 15px, rgba(49, 121, 124, 0.1) -20px 20px, rgba(49, 121, 124, 0.05) -25px 25px;
    }
`

const DescriptionProfile = styled.div`
    padding: 15px;

    &>p {
        font-size: 1.2rem;
        text-align: justify;
        color: white;
    }
`

export default AboutMe