import styled from "styled-components";
import {DEVICE_BREAKPOINTS} from "../../styles/deviceBreakPoints"

export const Container = styled.div`
  display: none;
  flex-direction: column;

  width: 100vw;
  height: 100vh;

  > main {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 3.6rem;

    /* max-width: 42.5rem; */

    margin: 3.6rem 2.8rem;

    span {
      width: 100%;
      display: flex;
      align-items: center;
      background-color: ${({ theme }) => theme.COLORS.DARK._900};

      img {
        /* background-color: ${({ theme }) => theme.COLORS.DARK._900}; */
        padding: 1.2rem 1.4rem;
      }
    }

    a {
      color: ${({ theme }) => theme.COLORS.LIGHT._300};
      font-size: 2.4rem;
      font-weight: lighter;
      line-height: 140%;
    }
  }
  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    position: absolute;
    background: black;
    z-index: 2;
    display: flex;
    flex-direction: column;
  }
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  gap: 1.6rem;

  background-color: ${({ theme }) => theme.COLORS.DARK._700};

  height: 11.4rem;
  padding: 5.6rem 2.8rem 2.4rem;

  > img {
    height: 1.8rem;
    width: 1.8rem;
  }

  > h1 {
    font-family: var(--ff-secondary);
    font-size: 2.1rem;
    font-weight: normal;
  }
`;
