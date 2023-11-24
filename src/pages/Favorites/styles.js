import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  @media screen and (min-width: 850px) {
    section {
      padding: 2rem 7.75rem;
    }
  }
`;

export const Content = styled.main`
  width: 100%;
  height: 100%;

  section {
    padding: 3.5rem 2rem;

    h1 {
      font-size: 2rem;
    }
  }

  .dish {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 1rem 0;

    h2 {
      color: ${({ theme }) => theme.COLORS.LIGHT.LIGHT_300};
      font-size: 1.25rem;
      font-weight: 500;
      line-height: 2rem;
      font-family: "Poppins";
    }

    button {
      background: transparent;
      border: none;
      color: ${({ theme }) => theme.COLORS.TINTS.TOMATO_400};
      font-size: 0.75rem;
      font-family: "Roboto";
      line-height: 1.25rem;
    }

    img {
      width: 100px;
      height: 100px;
      border-radius: 50%;
    }
  }

  @media screen and (min-width: 850px) {
    height: 100vh;
    
    section {
      padding: 2rem 7.75rem;
    }

    .all-dishes {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 2rem;
    }
  }

  @media screen and (min-width: 1024px) {
      .all-dishes {
        grid-template-columns: repeat(4, 1fr);
        gap: 3rem;
      }
    }
`;
