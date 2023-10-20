import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  textarea {
    border: none;
    border-radius: 8px;
    background-color: ${({ theme }) => theme.COLORS.DARK._800};

    padding: 0.8rem;

    color: ${({ theme }) => theme.COLORS.LIGHT._100};

    font-family: var(--ff-secondary);
    /* font-weight: 100; */

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.LIGHT._500};
    }
  }
`;
