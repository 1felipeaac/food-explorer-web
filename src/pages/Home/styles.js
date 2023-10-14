import styled from "styled-components";

import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakPoints";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  position: relative;

  --banner-height: 16rem;
  overflow: auto;

  header {
    position: fixed;
    z-index: 2;
  }

  main {
    /* overflow: auto; */

    display: flex;
    flex-direction: column;
    align-items: center;

    margin-top: 9.5rem;
    margin-bottom: 3rem;

    width: 100%;
    /* height: 100vh; */

    .desktop {
      display: flex;
    }

    .mobile {
      display: none;
    }

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
        left: 0;
        /* top: 13.7rem; */
        height: calc(var(--banner-height) + 6rem);
      }
      #presentation {
        position: absolute;
        right: clamp(0.3rem, 1rem + 5vw, 6rem);
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
      width: 100%;
      /* height: 100vh; */
      margin-bottom: 3rem;
    }
  }

  footer {
    position: fixed;
    z-index: 2;
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.XG}) {
    .desktop {
      display: flex;
    }

    .mobile {
      display: none;
    }
    #display {
      margin-top: 10.25rem;

      #imgHome {
        top: 13.7rem;
      }

      #presentation {
        padding-top: 4.5rem;
        top: 20rem;
        h3 {
          font-size: 2.5rem;
          font-weight: 500;
        }
      }
    }
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.XG}) {
    .desktop {
      display: flex;
    }

    #imgHome {
      top: 13.7rem;
    }

    .mobile {
      display: none;
    }
    #display {
      margin-top: 10.25rem;
      #imgHome {
        top: 13.7rem;
      }

      #presentation {
        padding-top: 4.5rem;
        top: 20rem;
        h3 {
          font-size: 2.5rem;
          font-weight: 500;
        }
      }
    }
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    .desktop {
      display: none;
    }

    .mobile {
      display: flex;
    }

    #display {
      margin-top: 2.75rem;
      #banner {
        max-height: 12rem;
      }
      #imgHome {
        top: 10rem;
        max-height: 14.3rem;
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
`;
