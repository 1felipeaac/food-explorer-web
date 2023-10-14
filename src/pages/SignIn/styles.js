import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakPoints";

export const Container = styled.div`

  margin: 3rem 0;

  display: flex;
  gap: clamp(1rem, 1rem + 50vw, 19rem);

  > #formLogin {
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 2rem;

    min-width: 27rem;
    height: 33.75rem;

    padding: 4rem;

    border-radius: 16px;

    background-color: ${({ theme }) => theme.COLORS.DARK._700};
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {

    gap: 0;
    flex-direction: column;
    justify-content: center;
    margin-top: 5rem;

    #logoForm {
      margin-left: 4rem;
    }

    #formLogin {
      margin: 0;
      background: none;
      padding: 0;
    }

    #subTitleLogin {
      display: none;
    }
  }
`;
