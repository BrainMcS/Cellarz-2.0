import React from 'react';
import styled from 'styled-components';
import Typewriter from 'typewriter-effect';
import Button from './Button';

const Title = styled.h2`
font-size: ${props => props.theme.fontxl};
text-transform: capitalize;
width: 80%;
color: ${props => props.theme.text};
align-self: flex-start;

span{
    text-transform: uppercase;
    font-family: 'Akaya Telivigala', cursive;

}
.text-1{
    color: royalblue;
}
.text-2{
    color: orange;
}
.text-3{
    color: red;
}
`
const Subtitle = styled.h3`
font-size: ${props => props.theme.fontsm};
text-transform: capitalize;
color: ${props => `rgba(${props.theme.textRgba}, 0.6)`};
font-weight: 600;
margin-top: 1rem;
margin-bottom: 1rem;
width: 80%;
align-self: flex-start;
`

const ButtonContainer = styled.div`
width: 80%;
align-self: flex-start;
`

const TypeWriterText = () => {
  return (
    <>
        <Title>
        Discover a new way to collect and view
        <Typewriter
        options={{
            autoStart: true,
            loop: true,
        }}
            onInit={(typewriter) => {
                typewriter.typeString('<span class="text-1">VOD-NFTs.<span/>')
                .pauseFor(2000)
                .deleteAll()
                .typeString('<span class="text-2">Collectible videos.<span/>')
                .pauseFor(2000)
                .deleteAll()
                .typeString('<span class="text-3">On Demand Shows!<span/>')
                .pauseFor(2000)
                .deleteAll()
                .start();
            }}
            />
        </Title>
    <Subtitle>Create your content and Choose your show!</Subtitle>
    <ButtonContainer>
        <Button text="Explore" link="#about" />
    </ButtonContainer>
    </>
  )
}

export default TypeWriterText