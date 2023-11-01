import styled from "styled-components";
import { Link } from 'react-router-dom';

export const Container = styled(Link)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    height: 18.5rem;
    max-width: 13.125rem;

    border: 1px solid red;

    position: relative;


    /* padding: 2rem 0; */

    .iconCard{
        width: 1rem;
        position: absolute;
        right: 0;
        top: 0;
    }
    img{
        width: 4rem;
    }
    h3 {
        font-weight: 100;
        text-align: center;
    }
    p{
        color: ${({theme}) => theme.COLORS.TINTS.CAKE_200};
    }
    > span {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    > div {
        input {
            width: 5rem;
        }
    }

`