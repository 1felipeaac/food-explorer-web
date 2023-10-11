import styled from "styled-components";
import {DEVICE_BREAKPOINTS} from "../../styles/deviceBreakPoints"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  position: relative;

  header {
    position: fixed;
    z-index: 2;
    background-color: ${({ theme }) => theme.COLORS.DARK._400};
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

    #display {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: right;
      width: 100%;
      margin-top: 2.2rem;


      #banner {
        background: linear-gradient(
          200deg,
          rgba(2, 0, 36, 1) 0%,
          rgba(9, 30, 38, 1) 35%
        );

        width: clamp(31.5rem, 20% + 80vw, 112rem);
        margin-top: 2.4rem;
        z-index: -1;
      }

      #imgHome {
        position: absolute;
        left: 0;
        top: 14rem;
      }
      #presentation {
        position: absolute;
        right: 0;

        z-index: 1;

        padding-top: 4.5rem;

        p {
          font-size: 1.2rem;
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

  @media(max-width: ${DEVICE_BREAKPOINTS.MD}) {
    
  }
`;
