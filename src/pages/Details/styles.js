import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakPoints";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;

  main {
    display: flex;
    flex-direction: column;
    width: 100%;

    margin-top: 8rem;
    margin-bottom: 5.5rem;

    a {
      line-height: 0;
    }

    #contentDetails {
      display: flex;
      align-items: center;

      gap: 3rem;
      width: 100%;

      img {
        width: 24.37rem;
      }

      #dishDetails {
        width: 100%;

        display: flex;
        flex-direction: column;

        gap: 1.5rem;
        section {
          display: flex;

          gap: 0.75rem;
          flex-wrap: wrap;
          width: 100%;
        }
        button {
          background-color: ${({ theme }) => theme.COLORS.TINTS.TOMATO_100};
          max-width: 8.18rem;
          height: 3rem;
        }
      }
    }
  }

  footer {
    position: fixed;
    bottom: 0;
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    main {
      flex-direction: column;

      #contentDetails {
        flex-direction: column;
        align-items: center;
        #dishDetails {
          align-items: center;

          section {
            justify-content: center;
          }
        }
      }
    }
  }

  /* background-color: red; */
`;
