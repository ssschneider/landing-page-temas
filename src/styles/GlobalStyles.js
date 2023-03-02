import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    :root {
        --text-big: 5.2rem;
        --text-medium: 3rem;
        --text-small: 2.4rem;
        --black: #030303;
        --scale: 1.05;
        --box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
        --transition: .5s linear;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-size: 62.5%;
        font-family: sans-serif;
    }
`

export default GlobalStyles