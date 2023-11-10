import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakPoints";
// import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  /* max-width: 13.125rem; */

  /* border: 1px solid green; */

  position: relative;
  max-width: 19rem;
  width: 100%;

  padding: 2rem 0;

  .iconCard {
    width: 1rem;
    position: absolute;
    right: 1rem;
    top: 0;
  }

  #imageDish {
    width: 11rem;
    border: none;
    border-radius: 50%;
  }

  a {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 11rem;
    width: 100%;
    span {
      display: flex;
      flex-direction: column;
      align-items: center;

      h3 {
        font-weight: 100;
        text-align: center;
      }
      p {
        text-align: center;
        color: ${({ theme }) => theme.COLORS.LIGHT._400};
        font-size: smaller;
        max-width: 11rem;
        width: 100%;
      }
      strong {
        color: ${({ theme }) => theme.COLORS.TINTS.CAKE_200};
      }
    }
  }
  #submitOrder {
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: space-around;

    div {
      width: 5rem;
    }

    button {
      width: 5.75rem;
      height: 3rem;
    }
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    #submitOrder {
      flex-direction: column;
      gap: 1rem;

      button {
        height: 2rem;
        width: 100%;
      }
    }
  }
`;
