import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    margin: 0 auto;
    gap: 1rem;
    padding: 0.75rem 1rem;
    background: ${({ theme }) => theme.COLORS.DARK.DARK_900};
    color: ${({ theme }) => theme.COLORS.LIGHT.LIGHT_100};
    border-radius: 0.5rem;

    > input {
      width: 100%;
      display: flex;
      align-items: center;
      background: transparent;
      border: none;
      color: ${({ theme }) => theme.COLORS.LIGHT.LIGHT_100};

      &::placeholder {
        color: ${({ theme }) => theme.COLORS.LIGHT.LIGHT_500};
        font-family: 'Roboto';
        text-align: center;
      }
    }
`;
