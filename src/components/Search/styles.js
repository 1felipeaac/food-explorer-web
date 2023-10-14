import styled from "styled-components";

export const Container = styled.span`
  width: 100%;
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.DARK._900};

  border-radius: 5px;

  img {
    padding: 1.15rem;
  }
`;

export const InputSearch = styled.input`
    width: 100%;
    max-width: 21.5rem;
    height: 3rem;
    background-color: ${({theme})=> theme.COLORS.DARK._900};
    border: none;
    color: ${({theme})=> theme.COLORS.LIGHT._500};
`
