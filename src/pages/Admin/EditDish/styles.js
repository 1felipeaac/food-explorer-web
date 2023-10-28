import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../../styles/deviceBreakPoints";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 1.5rem;
  min-height: 100%;

  header {
    position: fixed;
    z-index: 2;
  }

  #formDish {
    margin-top: 7.5rem;
    margin-bottom: 5.5rem;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    width: 100%;
    padding: 0 2rem;

    section {
      display: flex;
      gap: 1rem;
      width: 100%;
    }

    #buttons{
      display: flex;
      align-items: center;
      /* justify-content: space-around; */
      gap: 2rem;

      button{
        background-color: ${({theme})=> theme.COLORS.TINTS.TOMATO_400};

      }

      button:first-child {
        background-color: ${({theme})=> theme.COLORS.DARK._800};
      }
    }
  }

  footer {
    position: fixed;
    z-index: 2;
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    #formDish {
      margin-top: 8.5rem;
      margin-bottom: 5.5rem;

      section {
        flex-wrap: wrap;
        width: 100%;
      }
    }
  }
`;
