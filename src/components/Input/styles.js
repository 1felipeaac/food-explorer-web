import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: ${({ theme }) => theme.COLORS.LIGHT._400};

  /* min-width: 20rem; */

  > input {
    background-color: ${({ theme }) => theme.COLORS.DARK._900};
    border: none;
    height: 4.8rem;
    border-radius: .8rem;
    padding: 1.4rem 1.6rem;

    color: ${({ theme }) => theme.COLORS.LIGHT._400};

  }
`;
