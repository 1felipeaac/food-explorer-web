import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakPoints";

export const Container = styled.div`
  width: 100vw;

  z-index: 0;

  max-width: 70rem;
  margin-top: 5rem;
  /* height: 30rem; */

  /* border: 1px solid red; */

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    width: 80vw;
  }
`;
