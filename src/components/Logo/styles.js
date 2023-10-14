import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  gap: 0.65rem;
  align-items: center;
  /* justify-content: center; */
  /* max-width: 16rem; */
  width: 100%;
  color: ${({ theme }) => theme.COLORS.LIGHT._100};
  svg{
    width: 1.85rem;
  }

  h1{
    font-weight: bolder;
  }

  p{
    font-weight: 200;
    font-size: .75rem;
  }
`;
