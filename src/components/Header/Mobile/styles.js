import styled from 'styled-components'

export const Container = styled.header`
    display: flex;
    justify-content: center;
    max-width: 112rem;
    width: 100vw;
    background-color: ${({theme})=> theme.COLORS.DARK._700};

    /* position: absolute;
    top: 0;
    left: 0; */
    > nav{
        padding: 5.6rem 1rem 2.4rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        
    }
`

export const Buttons = styled.button`
    background: none;
    border: none;
`