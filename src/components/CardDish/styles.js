import styled from "styled-components";
import { Link } from 'react-router-dom';

export const Container = styled(Link)`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    h3 {
        font-weight: 100;
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