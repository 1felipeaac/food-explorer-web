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
        background-color: ${({ theme }) => theme.COLORS.DARK._400};
        
        font-family: var(--ff-primary);
        font-size: 1.6rem;

        margin: 0 auto;

        color: ${({ theme }) => theme.COLORS.LIGHT._100};

        /* border: 1px solid white; */

        height: 100vh;
        max-width: 112rem;
        width: 100%;

    }

    a{
        text-decoration: none;
    }

    button, a {
        cursor: pointer;
        transition: --ff-primary 0.2s;
    }
    button:hover, a:hover {
        filter: brightness(0.9)
    }

    #root{
        display: flex;
        justify-content: center;
        min-width: 32rem;
        /* width: 100vw; */

        /* border: 1px solid white; */

    }

    #pageLogin{
        gap: clamp(10rem, 1rem + 20vw, 30rem);
    }

    .desktop{
        display: flex;
    }

    .mobile{
        display: none;
    }

    #banner{
        height: 26rem;
        margin-top: 16.4rem;
    }

    #imgHome{
        /* width: 63.2rem; */
        height: 29rem;
    }

    #presentation{
        top: 20rem;
        margin-right: 10rem;

        >h3{
                font-size: 1.8rem;
                font-weight: 500; //medium
        }
        
        >p{
            font-size: 1.2rem;
            font-weight: 400; //regular
        }
        
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

        .desktop{
            display: none;
        }

        .mobile{
            display: flex;
        }

        #banner{
            height: 12rem;

        }
        #imgHome{
            height: 14.8rem;
        }
        #presentation{
            top: 12rem;
            max-width: 20rem;
            margin-right: 3rem;

            >h3{
                font-size: 1.8rem;
                font-weight: 600; //semibold
            }
            
            >p{
                font-size: 1.2rem;
                font-weight: 400; //regular
            }
        }
}



`;
