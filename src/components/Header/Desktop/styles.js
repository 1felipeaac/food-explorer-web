import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  /* justify-content: center; */
  max-width: 112rem;
  width: 100vw;

  > nav {
    padding: 5.6rem 1rem 2.4rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;
    width: 100%;

    div{
        min-width: 20rem;
    }

    span{
        max-width: 58.3rem;
        justify-content: center;
    }

    button{
        max-width: 18.3rem;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 2rem;

        svg{
            width: 2.4rem;
        }
    }

    #exit{
      background: none;
      border: none;
    }
  }
`;
