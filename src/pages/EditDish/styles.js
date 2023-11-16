import styled from "styled-components";

export const Container = styled.div`
  
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2.25rem;
  padding: 1rem 2rem 3.5rem;

  section {
    margin: 0;
  }

  h1 {
    font-size: 2rem;
  }

  @media screen and (min-width: 850px) {
    padding: 2.5rem 7.75rem 7.25rem;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-top: 2.5rem;

  label {
    font-size: 1rem;
    color: ${({ theme }) => theme.COLORS.LIGHT.LIGHT_400};
  }
  
  > div {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    letter-spacing: 0.0225rem;

    .ingredients {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      padding: 0.5rem;
      gap: 1rem;
      background: ${({ theme }) => theme.COLORS.DARK.DARK_800};
      border-radius: 0.5rem;
    }
  }

  .buttons {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 2rem;
    height: 3rem;
    
    button {
      width: 50%;
      padding: 0;
    }

    button:first-child {
      background: ${({ theme }) => theme.COLORS.DARK.DARK_800};
      transition: all 0.3s ease-in-out;

      &:hover {
        background: ${({ theme }) => theme.COLORS.DARK.DARK_1000};
      }
    }
    
    button:last-child {
      background: ${({ theme }) => theme.COLORS.TINTS.TOMATO_400};
      transition: all 0.3s ease-in-out;
      

      &:hover {
        background: ${({ theme }) => theme.COLORS.TINTS.TOMATO_200};
      }
    }
  }

  @media screen and (min-width: 850px) {
    gap: 2rem;
    
    display: grid;
    align-items: center;
    grid-template-columns: 1fr repeat(2, 1.75fr);
    grid-template-areas: 
    "image name category"
    "ingredients ingredients price"
    "textarea textarea textarea"
    "_ _ button";
    
    div {
      
      .ingredients {
        grid-template-columns: repeat(4, 1fr);
      }
    }
  
    div:has(textarea) {
      grid-area: textarea;
    }
  
    .buttons {
      flex-direction: row;
      grid-area: button;

      button:first-child {
        background: ${({ theme }) => theme.COLORS.DARK.DARK_800};
        transition: all 0.4s ease-in-out;

        &:hover {
          background: ${({ theme }) => theme.COLORS.DARK.DARK_1000};
        }
      }

      button:last-child {
        background: ${({ theme }) => theme.COLORS.TINTS.TOMATO_400};
        transition: all 0.4s ease-in-out;

        &:hover {
          background: ${({ theme }) => theme.COLORS.TINTS.TOMATO_200};
        }
      }
    }
  
    div:nth-child(4) {
      grid-area: ingredients;
    }
    
    div:nth-child(5) {
      grid-area: price;
    }
  }
`;
