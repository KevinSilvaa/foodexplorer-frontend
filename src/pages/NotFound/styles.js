import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 2rem;
  text-align: center;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;

    h1 {
      color: ${({ theme }) => theme.COLORS.TINTS.CAKE_200};
    }

    a {
      font-size: 1.5rem;
      color: ${({ theme }) => theme.COLORS.LIGHT.LIGHT_400};

      &:hover {
        filter: brightness(0.8);
      }
    }
  }
`;
