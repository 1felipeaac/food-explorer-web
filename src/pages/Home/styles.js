import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    /* height: 100vh; */
    justify-content: right;

    position: relative;

    #banner{
        background: linear-gradient(200deg, rgba(2,0,36,1) 0%, rgba(9,30,38,1) 35%);
        /* width: fit-content; */

        width: clamp(31.5rem, 20% + 80vw , 112rem);
        /* height: 26rem; */
        margin-top: 2.4rem;
        z-index: -1;

    }

    > #imgHome{
        position: absolute;
        left: 0;
        top: 12rem;
        
    }
    #presentation{

        position: absolute;
        right: 0;
        
        z-index: 1;

        padding-top: 4.5rem;

        p{
            font-size: 1.2rem;
        }
    }

    main{
        /* height: 100%; */
    }

`