import styled from "styled-components";

import {DEVICE_BREAKPOINTS} from '../../styles/deviceBreakPoints'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  position: relative;

  --banner-height: 20rem;

  header {
    position: fixed;
    z-index: 2;
    /* background-color: ${({ theme }) => theme.COLORS.DARK._400}; */
  }

  main {
    display: flex;
    flex-direction: column;
    align-items: center;

    margin-top: 12.5rem;
    margin-bottom: 3rem;

    width: 100%;
    height: 100vh;

    overflow: auto;

    .desktop{
        display: flex;
    }

    .mobile{
        display: none;
    }

    #display {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: right;
      /* width: 100%; */
      margin-top: 2.2rem;


      #banner {
        height: var(--banner-height);
        background: linear-gradient(
          200deg,
          rgba(2, 0, 36, 1) 0%,
          rgba(9, 30, 38, 1) 35%
        );

        border-radius: 0.3rem;

        width: clamp(32rem, 25% + 90vw, 112rem);
        margin-top: 2.4rem;
        z-index: -1;
      }

      #imgHome {
        position: absolute;
        left: 0;
        top: 14rem;
        height: calc(var(--banner-height) + 3rem);
      }
      #presentation {
        position: absolute;
        top: 20rem;
        right: clamp(2rem, 10% + 50vw, 8rem);
        /* padding-top: 4.5rem; */
        z-index: 1;

        >h3{
                font-size: 1.8rem;
                font-weight: 500;
        }
        
        >p{
            font-size: 1.2rem;
            font-weight: 400; 
        }
      }
    }

    #showDishes{
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      width: 100%;
    }
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.XG}) {
    .desktop{
        display: flex;
    }

    .mobile{
        display: none;
    }
    #presentation {
      padding-top: 4.5rem;
    }
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.XG}) {
    .desktop{
        display: flex;
    }

    .mobile{
        display: none;
    }
    #presentation {
      padding-top: 4.5rem;
    }
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    .desktop{
            display: none;
        }

    .mobile{
        display: flex;
    }

    #display{
      #banner{
          max-height: 12rem;
      }
      #imgHome{
          max-height: 14.8rem;
      }
      #presentation{
          top: 5rem;
          max-width: 20rem;
          width: 100%;
          padding-top: 0px;
  
          >h3{
              font-size: 1.8rem;
              font-weight: 600; //semibold
          }
          
          >p{
              font-size: 1.2rem;
              font-weight: 400; //regular
          }
      }
    }

    }


`;
