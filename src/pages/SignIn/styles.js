import styled from 'styled-components'
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakPoints";


export const Container = styled.div`
    height: 100vh;
    /* padding: 0 5rem; */

    display: flex;

    > div{
        h1{
            min-width: 22rem;
        }
    }

    > #formLogin{
        display:  flex;
        justify-content: center;
        flex-direction: column;
        gap: 3.2rem;

        min-width: 27rem;

    }

    #pageLogin{
        gap: clamp(10rem, 1rem + 20vw, 30rem);
    }

    @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
        /* background-color: white; */
        flex-direction: column;
        justify-content: center;

        #formLogin {
            margin-top: 7.3rem;
        }

        #subTitleLogin {
            display: none;
        }
    }

    
`

