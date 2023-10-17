import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 1.5rem;
  min-height: 100%;

  header{
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
  }

  footer {
    position: fixed;
    z-index: 2;
  }
`;
