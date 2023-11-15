import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  background: ${({ theme, $isNew }) => $isNew ? "transparent" : theme.COLORS.LIGHT.LIGHT_600};
  color: ${({ theme }) => theme.COLORS.LIGHT.LIGHT_100};
  border: ${({ theme, $isNew }) => $isNew ? `1px dashed ${theme.COLORS.LIGHT.LIGHT_500}` : theme.COLORS.LIGHT.LIGHT_600};
  border-radius: 0.5rem;
  padding: 0.75rem 1rem;
  height: 2rem;
  width: 100%;

  > input {
    width: 100%;
    color: ${({ theme }) => theme.COLORS.LIGHT.LIGHT_100};
    background: transparent;
    border: none;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.LIGHT.LIGHT_500};
    }
  }

  > button {
    display: grid;
    place-content: center;
    background: none;
    border: none;
    
    svg {
      width: 20px;
      height: 20px;
    }
  }

  .button-delete {
    color: ${({ theme }) => theme.COLORS.TINTS.TOMATO_100};
  }

  .button-add {
    color: ${({ theme }) => theme.COLORS.LIGHT.LIGHT_500};
  }
`;
