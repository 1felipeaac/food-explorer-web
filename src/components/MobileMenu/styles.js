import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakPoints";

export const Container = styled.div`
  display: none;
  background: ${({ theme }) => theme.COLORS.DARK._300};

  width: 100vw;
  height: 100vh;

  main {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 3.6rem;

    padding: 3.6rem 2.8rem;

    margin-top: 7.5rem;
    margin-bottom: 5rem;
    width: 100%;

    span {
      max-width: none;
      width: 100%;
      display: flex;
      align-items: center;
      background-color: ${({ theme }) => theme.COLORS.DARK._900};

      img {
        padding: 1.2rem 1.4rem;
      }

      input {
        max-width: none;
      }
    }

    a {
      color: ${({ theme }) => theme.COLORS.LIGHT._300};
      font-size: 2.4rem;
      font-weight: lighter;
      line-height: 140%;
      border-bottom: 1px solid ${({ theme }) => theme.COLORS.DARK._1000};
      width: 100%;
    }
  }
  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    position: absolute;
    z-index: 2;
    display: flex;
    flex-direction: column;
    align-items: center;
    transform: translateX(-100%);
    transition: transform 0.3s ease-in-out;
    &[data-menu-is-open="true"] {
      transform: translateX(0);
    }
  }
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  gap: 1.6rem;

  width: 100%;

  background-color: ${({ theme }) => theme.COLORS.DARK._700};

  height: 11.4rem;
  padding: 2.62rem 3.7rem 1.31rem;

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
