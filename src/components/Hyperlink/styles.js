import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const Container = styled(Link)`
    text-align: center;
    font-size: medium;
    font-weight: 100;
    font-family: var(--ff-primary);

    text-decoration: none;
    color: ${({theme}) => theme.COLORS.LIGHT._400};
    font-weight: 400;

    display: flex;
    align-items: center;
`