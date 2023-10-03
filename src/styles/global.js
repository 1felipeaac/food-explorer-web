import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    :root{
        display: grid;

        font-size: 62.5%;

        --ff-primary: 'Poppins', sans-serif;
        --ff-secondary: 'Roboto', sans-serif;
    }

    body{
        background-color: ${({theme}) => theme.COLORS.DARK._400};
        font-family: var(--ff-primary);
    }

`