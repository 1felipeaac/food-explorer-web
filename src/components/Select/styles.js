import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  select {
    color: ${({ theme }) => theme.COLORS.LIGHT._100};

    background-color: ${({ theme }) => theme.COLORS.DARK._900};
    height: 3rem;
    border: none;
    border-radius: 8px;
  }
`;
