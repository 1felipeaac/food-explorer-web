import styled from 'styled-components'

export const Container = styled.footer`

    display: flex;
    align-items: center;
    justify-content: space-around;

    bottom: 0;
    position: absolute;
    /* text-align: center; */

    height: 4.8rem;
    /* max-width: 70rem; */
    width: 100%;

    padding: 0 1rem;

    background-color: ${({theme})=> theme.COLORS.DARK._600};
    > div {

        svg{
            path{
                fill: ${({theme})=> theme.COLORS.LIGHT._700};
            }
        }

        h1{
            font-size: 1.5rem;
            font-weight: bold;
            color: ${({theme})=> theme.COLORS.LIGHT._700};
        }

    }

    > h3{
        font-family: var(--ff-footer);
        /* font-size: 1.2rem; */
        font-weight: 200;
        color: ${({theme})=> theme.COLORS.LIGHT._200};
    }
`