import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  main {
    display: flex;
    flex-direction: column;
    /* align-items: center; */

    a {
      line-height: 0;
    }

    div {
      display: flex;
      flex-direction: column;
      align-items: center;

      img{
        width: 10rem;
      }
      section {
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
      }
      button {
        background-color: ${({ theme }) => theme.COLORS.TINTS.TOMATO_400};
      }
    }
  }

  /* background-color: red; */
`;
