import styled from 'styled-components'

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

`

