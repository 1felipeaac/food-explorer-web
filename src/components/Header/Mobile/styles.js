import styled from 'styled-components'

export const Container = styled.header`
    display: flex;
    justify-content: center;
    max-width: 70rem;
    width: 100vw;
    background-color: ${({theme})=> theme.COLORS.DARK._700};
    > nav{
        padding: 3.5rem 1.75rem 1.5rem;
        display: flex;
        align-items: center;
        justify-content: space-around;
        width: 100%;

        div{
            justify-content: center;
            flex-direction: row;
            align-items: center;
            gap: .5rem;
            p{
                color: ${({theme})=> theme.COLORS.TINTS.CAKE_200};
            }
        }
    }
`

export const Buttons = styled.button`
    background: none;
    border: none;
`