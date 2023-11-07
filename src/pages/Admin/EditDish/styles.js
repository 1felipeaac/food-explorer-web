import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../../styles/deviceBreakPoints";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 1.5rem;
  min-height: 100%;

  /* header {
    position: fixed;
    z-index: 2;
  } */

  #edit-formDish {
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
      "button button button";

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

    #edit-inputImageComponent {
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
      /* background-color: white; */

      }
    }

    input[type="file"] {
      /* background-color: red; */
      display: none;
    }

    #edit-inputNameComponent {
      grid-area: name;
      input {
        background-color: ${({ theme }) => theme.COLORS.DARK._800};
      }
    }
    select {
      grid-area: category;
      background-color: ${({ theme }) => theme.COLORS.DARK._800};
    }
    #edit-Tags {
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

    #edit-inputValueContainer {
      grid-area: value;
      input {
        background-color: ${({ theme }) => theme.COLORS.DARK._800};
      }
    }

    #edit-textareaForm {
      grid-area: description;
      /* background-color: ${({ theme }) => theme.COLORS.DARK._800}; */
    }

    #buttons{
      grid-area: button;

      display: flex;
      align-items: center;
      /* justify-content: space-around; */
      gap: 2rem;

      button{
        background-color: ${({theme})=> theme.COLORS.TINTS.TOMATO_400};

      }

      button:first-child {
        background-color: ${({theme})=> theme.COLORS.DARK._800};
      }
    }
  }

  footer {
    position: fixed;
    z-index: 2;
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    #edit-formDish {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
      margin-top: 8.5rem;
      margin-bottom: 5.5rem;

      #editTags {
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
