import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  section {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    h1 {
      font-size: 2rem;
    }
   
    p {
      font-size: 1.25rem;
      font-weight: 500;
      line-height: 2rem;
      color: ${({ theme }) => theme.COLORS.LIGHT.LIGHT_300};
    }

    .button {
      display: flex;
      justify-content: center;
      margin-top: 2rem;
      width: 60%;
      align-self: end;
    }

    @media screen and (min-width: 1024px) {
      .button {
        display: none;
      }
    }
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  
  .order {
    padding: 1rem 0;
    display: flex;
    gap: 1rem;
  
    img {
      width: clamp(4rem, 15vw, 7rem);
      height: clamp(4rem, 15vw, 7rem);
      object-fit: cover;
      border-radius: 50%;
    }

    .info {
      display: flex;
      flex-direction: column;
      align-items: start;
      justify-content: center;

      div {
        display: flex;
        align-items: center;
        gap: 1rem;

        .quantity {
          display: none;
          font-size: 1.5rem;
          color: ${({ theme }) => theme.COLORS.LIGHT.LIGHT_300};
        }
        
        h2 {
          color: ${({ theme }) => theme.COLORS.LIGHT.LIGHT_300};
          font-size: 1.5rem;
          font-weight: 500;
          line-height: 2rem;
        }

        span {
          font-size: 0.75rem;
          line-height: 1.25rem;
          font-family: 'Roboto';
          color: ${({ theme }) => theme.COLORS.LIGHT.LIGHT_500}
        }
      }

      button {
        background: none;
        border: none;
        color: ${({ theme }) => theme.COLORS.TINTS.TOMATO_400};
        font-size: 0.75rem;
        line-height: 1.25rem;
        font-family: 'Roboto';
      }
    }
    @media screen and (min-width: 850px) {
      .info div .quantity {
        display: block;
      }
    }
  }

`;
