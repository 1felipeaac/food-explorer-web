import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../../styles/deviceBreakPoints";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 1.5rem;
  min-height: 100%;

  font-size: 1rem;
  font-weight: 100;

  header {
    position: fixed;
    z-index: 2;
  }

  #formDish {
    margin-top: 7.5rem;
    margin-bottom: 5.5rem;
    display: grid;
    column-gap: 2rem;
    row-gap: 2rem;
    width: 100%;
    padding: 0 2rem;

    grid-template-areas:
      "back back back"
      "title title title"
      "image name category"
      "ingredients ingredients value"
      "description description description"
      ". . button";
    a {
      grid-area: back;
      font-weight: 300;
      font-size: 1.31rem;
    }

    h1 {
      grid-area: title;
      font-size: 2rem;
      font-weight: 400;
    }

    #inputImageComponent {
      grid-area: image;
      /* background-color: white; */
      label {
        background-color: ${({ theme }) => theme.COLORS.DARK._800};
        color: #${({ theme }) => theme.COLORS.LIGHT._100};
        text-transform: uppercase;
        text-align: center;
        margin-top: 1.6rem;
        padding: 0.5rem 1rem;
        cursor: pointer;
      }
    }

    input[type="file"] {
      /* background-color: red; */
      display: none;
    }
    #inputNameComponent {
      grid-area: name;
      input {
        background-color: ${({ theme }) => theme.COLORS.DARK._800};
      }
    }
    select {
      grid-area: category;
      background-color: ${({ theme }) => theme.COLORS.DARK._800};
    }
    #tags {
      grid-area: ingredients;
      /* background-color: ${({ theme }) => theme.COLORS.DARK._800}; */

      section {
        background-color: ${({ theme }) => theme.COLORS.DARK._800};
        display: flex;
        flex-wrap: wrap;
        gap: 1rem;
        width: 100%;

        padding: 0.5rem;

        border-radius: 0.5rem;
      }
    }

    #inputValueContainer {
      grid-area: value;
      input {
        background-color: ${({ theme }) => theme.COLORS.DARK._800};
      }
    }

    #textareaForm {
      grid-area: description;
      /* background-color: ${({ theme }) => theme.COLORS.DARK._800}; */
    }

    #buttonForm {
      grid-area: button;
      background-color: ${({ theme }) => theme.COLORS.TINTS.TOMATO_400};
      font-weight: 100;
      font-size: .87rem
    }
  }

  footer {
    position: fixed;
    z-index: 2;
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    #formDish {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
      margin-top: 8.5rem;
      margin-bottom: 5.5rem;

      #tags {
        section {
          flex-wrap: wrap;
          width: 100%;
        }
      }

      #description{
        height: 10rem;
      }
    }
  }
`;
