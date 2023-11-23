import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  section h1 {
    font-size: 2rem;
    font-weight: 500;
    line-height: 2.75rem;
  }
`;

export const Content = styled.div`
  width: 100%;
  display: grid;
  grid-template-rows: 5rem auto;
  grid-template-columns: repeat(2, 1fr);
  grid-template-areas: 
  "method method"
  "payment payment";
  height: auto;
  border: 1px solid ${({ theme }) => theme.COLORS.LIGHT.LIGHT_600};
  border-radius: 0.5rem;

  .card-payments {
    display: flex;
    grid-area: method;

    .pix, .card {
      padding: 0.875rem 0.75rem;
      background: ${({ theme }) => theme.COLORS.DARK.DARK_500};
      border: none;
      color: ${({ theme }) => theme.COLORS.LIGHT.LIGHT_100};
      height: 100%;
      border-bottom: 1px solid ${({ theme }) => theme.COLORS.LIGHT.LIGHT_600};

      &:hover {
        background: ${({ theme }) => theme.COLORS.DARK.DARK_800};
      }

      &:focus {
        background: ${({ theme }) => theme.COLORS.DARK.DARK_800};
      }
    }
    
    .pix {
      width: 100%;
      border-right: 1px solid ${({ theme }) => theme.COLORS.LIGHT.LIGHT_600};
      border-radius: 0.5rem 0 0 0
    }

    .card {
      width: 100%;
      border-left: 1px solid ${({ theme }) => theme.COLORS.LIGHT.LIGHT_600};
      border-radius: 0 0.5rem 0 0
    }
  }

  .payment-methods {
    grid-area: payment;
    
    .img {
      padding: 2rem 0;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .card-info {
      padding: 3.5rem 1.5rem;
      display: flex;
      flex-direction: column;
      gap: 2.25rem;

      input::-webkit-outer-spin-button,
      input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
      }

      div:has(input) {
        background: none;
       
        .field {
          border: 1px solid ${({ theme }) => theme.COLORS.LIGHT.LIGHT_100};

        }
      }

      .field-2 {
        display: flex;
        gap: 1rem;
      }
    }

    .payment-process {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 7.5rem 1.5rem;
      gap: 1.5rem;

      img {
        width: 96px;
        height: 96px;
        filter: brightness(0.5);
      }

      p {
        color: ${({ theme }) => theme.COLORS.LIGHT.LIGHT_400};
        font-family: "Roboto";
        font-size: 1.25rem;
        font-weight: 700;
        line-height: 2rem;
      }
    }
  }

  &:has(span) {
    span {
      padding: 2rem 1rem;
      display: flex;
      justify-content: center;
      align-items: center;
      grid-area: payment;
      width: 100%;
      color: ${({ theme }) => theme.COLORS.LIGHT.LIGHT_100};
      font-size: 1.25rem;
      font-family: "Roboto";
    }
  }

  @media screen and (min-width: 1024px) {

    .payment-methods {
      
      .img {
        padding: 3rem 0;
      }

      .card-info {
        padding: 3.75rem 5.5rem;
      }
    }
  }
`;
