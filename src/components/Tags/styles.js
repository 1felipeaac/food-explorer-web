import styled from "styled-components";

export const Container = styled.span`
  height: 2rem;
  width: fit-content;

  border: none;
  border-radius: 5px;

  background-color: ${({theme}) => theme.COLORS.DARK._1000};

  padding: 0.25rem 0.5rem;
`;
