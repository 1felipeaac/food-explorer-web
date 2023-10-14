import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  /* justify-content: center; */
  max-width: 112rem;
  width: 100vw;

  background-color: ${({theme})=> theme.COLORS.DARK._700};

  > nav {
    padding: 1.75rem 7.7rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;
    width: 100%;

    div{
        min-width: 12.5rem;
    }

    span{
        /* max-width: 58.3rem; */
        justify-content: center;
    }

    button{
        max-width: 18.3rem;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;

        svg{
            width: 1.6rem;
        }
    }

    #exit{
      background: none;
      border: none;
    }
  }
`;
