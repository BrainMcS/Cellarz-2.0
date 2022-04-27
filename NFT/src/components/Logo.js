import React from 'react';
import styled from "styled-components";
import {Link} from 'react-router-dom';

const LogoText = styled.h1`
font-family: 'Akaya Telivigala', cursive;
font-size: ${props => props.theme.fontxxl};
font-style: italic;
`


const Logo = () => {
  return (
    <LogoText>
     <Link to="/">
     Cellarz
     </Link>
    </LogoText>
  )
}

export default Logo