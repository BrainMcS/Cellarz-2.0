import { createGlobalStyle } from "styled-components";
import "@fontsource/akaya-telivigala";
import "@fontsource/sora";



const GlobalStyles = createGlobalStyle`

*,*::before,*::after{
    margin:0;
    padding: 0;
}

body{
    font family: 'Sora', sans-serif;
    overflow-x: hidden;
}

hi,h2,h3,h4,h5{
    margin:0;
    padding: 0;
}

a{
    color: inherit;
    text-decoration: none;
}
`

export default GlobalStyles;
