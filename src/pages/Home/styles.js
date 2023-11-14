import styled from "styled-components";

import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakPoints";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  min-height: 100%;

  --banner-height: 16rem;

  main {
    display: flex;
    flex-direction: column;
    align-items: center;

    margin-top: 7.5rem;
    margin-bottom: 5rem;

    width: 100vw;


    #display {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: right;

      #banner {
        height: var(--banner-height);
        background: linear-gradient(
          200deg,
          rgba(2, 0, 36, 1) 0%,
          rgba(9, 30, 38, 1) 35%
        );

        border-radius: 8px;

        width: clamp(20rem, 25% + 90vw, 70rem);
        z-index: -1;
      }

      #imgHome {
        position: absolute;
        height: calc(var(--banner-height) + 6rem);
      }
      #presentation {
        position: absolute;
        z-index: 1;

        > p {
          font-weight: 400;
        }
      }
    }

    #showDishes {
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      flex-wrap: wrap;
      gap: 1rem;
      width: 100%;
      margin: 3rem 0;

      a {
        flex-basis: 25%;
      }
    }

    #errorMessage {
      background-color: ${({ theme }) => theme.COLORS.TINTS.TOMATO_200};
      position: absolute;
      top: 7.5rem;
    }

    #searchDishes {
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      width: 100%;
      margin-bottom: 3rem;
    }
  }

  footer {
    position: fixed;
    bottom: 0;
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.XG}) {
    #display {
      margin-top: 10.25rem;

      #imgHome {
        top: 11.7rem;
        left: 5rem;
      }

      #presentation {
        padding-top: 4.5rem;
        top: 20rem;
        right: 13rem;
        h3 {
          font-size: 2.5rem;
          font-weight: 500;
        }
      }
    }
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.XXXG}) {
    #display{
      #presentation {
        right: 27rem;
      }

      #imgHome{
        left: 20rem;
      }
    }
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.XXG}) {
    #display{
      #presentation {
        right: 12rem;
      }

      #imgHome{
        left: 5rem;
      }
    }
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.XG}) {

    #display {
      margin-top: 10.25rem;
      #imgHome {
        top: 11.7rem;
        left: 0;
      }

      #presentation {
        padding-top: 4.5rem;
        top: 20rem;
        right: 4rem;
        h3 {
          font-size: 2.5rem;
          font-weight: 500;
        }
      }
    }
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    #display {
      margin-top: 2.75rem;
      #banner {
        max-height: 12rem;
      }
      #imgHome {
        top: 9rem;
        max-height: 13.3rem;
      }
      #presentation {
        top: 15rem;
        max-width: 20rem;
        width: 100%;
        padding-top: 0px;

        > h3 {
          font-size: 1.8rem;
          font-weight: 600; //semibold
        }

        > p {
          font-size: 1.2rem;
          font-weight: 400; //regular
        }
      }
    }
  }
  @media (max-width: ${DEVICE_BREAKPOINTS.XS}) {
    #banner {
      width: clamp(20rem, 25% + 90vw, 50rem);
    }
    #presentation {
      right: clamp(0.3rem, 5rem + 7vw, 3rem);
    }
  }
`;
