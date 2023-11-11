import styled from "styled-components";

export const Container = styled.button`
  padding: 0.75rem 1.5rem;
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.5rem;
  color: ${({ theme }) => theme.COLORS.LIGHT.LIGHT_100};
  background: ${({ theme }) => theme.COLORS.TINTS.TOMATO_100};
  border: none;
  border-radius: 0.25rem;

  &:hover {
    background: ${({ theme }) => theme.COLORS.TINTS.TOMATO_200};
  }

  &:disabled {
    background: ${({ theme }) => theme.COLORS.TINTS.TOMATO_400};
    cursor: not-allowed;
  }
`;
