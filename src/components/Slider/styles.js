import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakPoints";

export const Container = styled.div`
  width: 80vw;
  margin-top: 1rem;

  /* border: 1px solid red; */
  /* justify-content: center; */

  .keen-slider__slide{
    /* border: 1px solid yellow; */
  }

  .keen-slider {
    display: flex;
  }

  .navigation-wrapper {
    position: relative;
  }

  .arrow {
    width: 30px;
    height: 30px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    -webkit-transform: translateY(-50%);
    fill: #fff;
    cursor: pointer;
  }

  .arrow--left {
    left: 5px;
  }

  .arrow--right {
    left: auto;
    right: 5px;
  }

  .arrow--disabled {
    fill: rgba(255, 255, 255, 0.5);
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    width: 80vw;
  }
`;
