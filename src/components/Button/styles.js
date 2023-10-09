import styled from 'styled-components'

export const Container = styled.button`
    background-color: ${({theme})=> theme.COLORS.TINTS.TOMATO_100};

    border:  none;

    width: 100%;

    color: ${({theme})=> theme.COLORS.LIGHT._100};

    height: 4.8rem;

    border-radius: .5rem;

    cursor: pointer;
`