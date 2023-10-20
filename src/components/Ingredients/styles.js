import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakPoints";

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;

  background-color: ${({ theme, isNew }) =>
    isNew ? "transparent" : theme.COLORS.LIGHT._600};
  color: ${({ theme }) => theme.COLORS.LIGHT._100};

  border: ${({ theme, isNew }) =>
    isNew ? `1px dashed ${theme.COLORS.LIGHT._500}` : "none"};

  border-radius: 8px;

  input {
    width: 100%;
    height: 3rem;
    background: transparent;

    border: none;
    border-radius: 8px 0 0 8px;

    padding: 0.5rem 1rem;
    color: ${({ theme }) => theme.COLORS.LIGHT._100};

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.LIGHT._500};
    }

    /* color: ${({ theme }) => theme.COLORS.LIGHT._100}; */
  }

  .button-add {
    div {
      div {
        svg {
          path {
            fill: ${({ theme }) => theme.COLORS.LIGHT._500};
          }
        }
      }
    }
  }

  button {
    /* width: 100%; */
    /* background-color: ${({ theme }) => theme.COLORS.DARK._800}; */
    background: transparent;

    height: 3rem;
    border: none;
    border-radius: 0 8px 8px 0;
    padding: 0.5rem 1rem;
  }

  /* @media (max-width: ${DEVICE_BREAKPOINTS.MD}){
        flex-wrap: wrap;
    } */
`;
