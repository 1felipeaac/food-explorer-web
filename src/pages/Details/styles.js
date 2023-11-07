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

    margin-top: 10rem;
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

        padding: 0 2rem;

        display: flex;
        flex-direction: column;

        gap: 1.5rem;
        section {
          display: flex;

          gap: 0.75rem;
          flex-wrap: wrap;
          width: 100%;
        }

        #submitCostumer{
          display: flex;
          justify-content: space-around;

          max-width: 18.38rem;
          div{
            img{
              width: 1.125rem;
            }
          }
        }

        button {
          max-width: 9.18rem;
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

      a {
        padding: 0 1.5rem;
      }

      #contentDetails {
        flex-direction: column;
        align-items: center;
        #dishDetails {
          align-items: center;

          section {
            justify-content: center;
          }

          #submitCostumer{
            width: 100%;
            #submitButton{
              max-width: 11.75rem;
              width: 100%;
            }
          }
        }
      }
    }
  }
`;
