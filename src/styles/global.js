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
        --ff-footer: 'DM Sans', sans-serif;
    }

    body{
        background-color: ${({theme}) => theme.COLORS.DARK._400};
        
        font-family: var(--ff-primary);
        font-size: 1.6rem;

        margin: 0 auto;

        color: ${({theme}) => theme.COLORS.LIGHT._100};

        border: 1px solid white;

        height: 100vh;
        width: 100vw;

    }

    #root{
        display: flex;
        justify-content: center;
        min-width: 32rem;
        width: 100vw;

    }

    #pageLogin{
        gap: clamp(10rem, 1rem + 20vw, 30rem);
    }

    @media screen and (max-width: 425px) {

        #pageLogin{
            display:  flex;
            justify-content: center;
            flex-direction: column;
            gap: 3.2rem;
        }

        #subTitleLogin{
            display: none;
        }
}



`