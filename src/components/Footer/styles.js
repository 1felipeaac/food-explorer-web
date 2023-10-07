import styled from 'styled-components'

export const Container = styled.footer`

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;

    bottom: 0;
    /* left: 0; */
    position: absolute;
    text-align: center;

    height: 7.7rem;
    max-width: 112rem;
    width: 100%;

    padding: 0 1rem;

    background-color: ${({theme})=> theme.COLORS.DARK._600};
    > div {

        gap: 0;

        svg{
            width: 2.2rem;
            height: 1.8rem;
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
        font-size: 1.2rem;
        color: ${({theme})=> theme.COLORS.LIGHT._200};

    }
`