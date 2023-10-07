import styled from "styled-components";

export const Container = styled.span`
  width: 100%;
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.DARK._900};

  img {
    padding: 1.2rem 1.4rem;
  }

  a {
    color: ${({ theme }) => theme.COLORS.LIGHT._300};
    font-size: 2.4rem;
    line-height: 140%;
  }
`;

export const InputSearch = styled.input`
    width: 100%;

    height: 4.8rem;
    background-color: ${({theme})=> theme.COLORS.DARK._900};
    border: none;
    color: ${({theme})=> theme.COLORS.LIGHT._500};
`
