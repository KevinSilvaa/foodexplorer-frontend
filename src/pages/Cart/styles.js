import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  .disabled {
    display: none;
  }
`;

export const Content = styled.main`
  padding: 3.5rem 2.25rem 2rem;
  height: 100vh;

  #item-carts {
    display: flex;
    flex-direction: column;

    .button-payment {
      padding: 0.75rem 2rem;
      width: 60%;
      background: ${({ theme }) => theme.COLORS.TINTS.TOMATO_100};
      color: ${({ theme }) => theme.COLORS.LIGHT.LIGHT_100};
      border: none;
      border-radius: 0.25rem;
      font-size: 0.875rem;
      font-weight: 500;
      line-height: 1.5rem;
      align-self: flex-end;
    }
  }
  
  @media screen and (min-width: 1024px) {
    padding: 2rem 7.75rem 0;
    gap: 4.5rem;
    display: grid;
    grid-template-columns: repeat(2, 1fr);

    .button-payment {
      display: none;
    }

    .disabled {
      display: block;
    }
  }
`;
