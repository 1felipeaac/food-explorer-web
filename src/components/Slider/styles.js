import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakPoints";

export const Container = styled.div`
  width: 100vw;

  z-index: 0;

  max-width: 70rem;
  margin-top: 5rem;


  .swiper-button-next,
  .swiper-button-prev {
    color: ${({theme})=> theme.COLORS.LIGHT._100};

    top: var(--swiper-navigation-top-offset, 40%);
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    width: 80vw;
  }
`;
