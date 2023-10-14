import styled from 'styled-components'

export const Container = styled.button`
    background-color: ${({theme})=> theme.COLORS.TINTS.TOMATO_100};

    border:  none;

    /* max-width: 13.5rem; */
    width: 100%;

    color: ${({theme})=> theme.COLORS.LIGHT._100};

    height: 3.5rem;

    border-radius: 5px;

    cursor: pointer;
`