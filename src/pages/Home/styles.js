import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    justify-content: right;

    position: relative;

    #banner{
        background: linear-gradient(200deg, rgba(2,0,36,1) 0%, rgba(9,30,38,1) 35%);

        width: clamp(37.5rem, 100% + 80vw , 112rem);
        height: 12rem;
        margin-top: 2.4rem;
        z-index: -1;

    }

    > #imgHome{
        position: absolute;
        left: 0;
        top: 12rem;
        
    }
    span{

        position: absolute;
        right: 0;
        top: 12rem;
        z-index: 1;
        max-width: 20rem;

        padding-top: 4.5rem;
        margin-right: 3rem;

        p{
            font-size: 1.2rem;
        }
    }

`