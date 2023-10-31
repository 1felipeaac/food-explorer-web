import { createGlobalStyle } from "styled-components";
import { DEVICE_BREAKPOINTS } from "./deviceBreakPoints";

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    :root{
        display: grid;

        font-size: 16px;

        --ff-primary: 'Poppins', sans-serif;
        --ff-secondary: 'Roboto', sans-serif;
        --ff-footer: 'DM Sans', sans-serif;

        @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
            
            font-size: 12px;

            .desktop {
                display: none;
            }
            .mobile {
                display: flex;
            }
        }
 
    }

    header{
        position: fixed;
        z-index: 2;
    }

    body{
        background-color: ${({ theme }) => theme.COLORS.DARK._400};
        
        font-family: var(--ff-primary);
        font-size: 1rem;

        margin: 0 auto;

        color: ${({ theme }) => theme.COLORS.LIGHT._100};

        max-width: 70rem;
        width: 100%;
        height: 100%;
    }
    
    a{
        text-decoration: none;
        color: ${({ theme }) => theme.COLORS.LIGHT._100};
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
        min-width: 20rem;

        /* background-color: ${({ theme }) => theme.COLORS.DARK._400}; */
    }

    .desktop {
      display: flex;
    }

    .mobile {
      display: none;
    }

`;
