import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: ${({ theme }) => theme.COLORS.LIGHT._400};

  > input {
    background-color: ${({ theme }) => theme.COLORS.DARK._900};
    border: none;
    height: 3rem;
    border-radius: 5px;
    padding: 1rem .8rem;

    color: ${({ theme }) => theme.COLORS.LIGHT._400};

  }
`;
