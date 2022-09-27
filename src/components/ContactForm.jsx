import React from 'react'
import { useForm, ValidationError } from '@formspree/react'
import styled, { keyframes } from 'styled-components';

const ContactForm = () => {
    const [state, handleSubmit] = useForm('mdobrznk')
    if (state.succeeded) {
        return <p>Thanks for joining!</p>;
    }
    return (
        <Container id='right'>
            <h1>Contact me</h1>
            <FormContainer onSubmit={handleSubmit}>
                <label htmlFor="name">
                    Name
                </label>
                <input
                    placeholder='Name'
                    id="name"
                    type="text"
                    name="name"
                    required
                />
                <ValidationError
                    prefix="Name"
                    field="name"
                    errors={state.errors}
                />
                <label htmlFor="email">
                    Email
                </label>
                <input
                    placeholder='Email'
                    id="email"
                    type="email"
                    name="email"
                    required
                />
                <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                />
                <label htmlFor="message">
                    Message
                </label>
                <textarea
                    placeholder='Insert your message here'
                    id="message"
                    name="message"
                    cols="30"
                    rows="10"
                />
                <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                />
                <button type="submit" disabled={state.submitting}>
                    <div>
                        <div id='svg-wrapper'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                                <path fill="none" d="M0 0h24v24H0z"></path>
                                <path fill="currentColor"
                                    d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z">
                                </path>
                            </svg>
                        </div>
                    </div>
                    <span>Send</span>
                </button>
            </FormContainer>
        </Container>

    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    &>h1{
        color: rgba(92, 4, 13, 1);
        font-size: 1.5rem;
        font-weight: bold;
        width: 100%;
    }
`

const fly_1 = keyframes`
    from {
        transform: translateY(0.1em);
    }

    to {
        transform: translateY(-0.1em);
    }
`

const FormContainer = styled.form`
    background: white;
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;

    &>label{
        width: 90%;
        color: white;
        font-size: 1rem;
        margin-top: 5px;
    }

    &>input,
    &>textarea{
        width: 90%;
        line-height: 28px;
        border: 2px solid transparent;
        border-bottom-color: #777;
        padding: .4rem 0;
        outline: none;
        background-color: transparent;
        color: #0d0c22;
        transition: .3s cubic-bezier(0.645, 0.045, 0.355, 1);
    }

    &>input:focus,
    &>input:hover,
    &>textarea:hover{
        outline: none;
        padding: .2rem 1rem;
        border-radius: 1rem;
        border-color: #7a9cc6;
    }

    &>input::placeholder,
    &>textarea::placeholder{
        color: #777;
    }

    &>input:focus::placeholder,
    &>textarea:focus::placeholder{
        opacity: 0;
        transition: opacity .3s;
    }


    &>button{
        margin: 10px 0;
        width: 100px;
        font-family: inherit;
        font-size: 1rem;
        background: rgba(92, 4, 13, 1);
        color: white;
        padding: 0.7em 1em;
        padding-left: 0.9em;
        display: flex;
        align-items: center;
        border: none;
        border-radius: 16px;
        overflow: hidden;
        transition: all 0.2s;

        &>span{
            color: white;
            display: block;
            margin-left: 0.3em;
            transition: all 0.3s ease-in-out;
        }

        &>svg{
            display: block;
            transform-origin: center center;
            transition: transform 0.3s ease-in-out;
        }

        &:hover #svg-wrapper{
            animation: ${fly_1} 0.6s ease-in-out infinite alternate;
        }

        &:hover svg{
            transform: translateX(1.2em) rotate(45deg) scale(1.1);
        }

        &:hover span{
            transform: translateX(5em);
        }

        &:active{
            transform: scale(0.95);
        }
    }
`

export default ContactForm