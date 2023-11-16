import styled from "styled-components";

export const Container = styled.div`
  padding: 0.75rem 0.875rem;
  background: ${({ theme }) => theme.COLORS.DARK.DARK_900};
  display: flex;
  gap: 1rem;
  height: 3rem;
  border-radius: 0.5rem;

  svg {
    color: ${({ theme }) => theme.COLORS.LIGHT.LIGHT_100};
  }

  input {
    width: 100%;
    background: transparent;
    border: none;
    color: ${({ theme }) => theme.COLORS.LIGHT.LIGHT_100};

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.LIGHT.LIGHT_500};
      font-family: Roboto;
    }
  }
`;
