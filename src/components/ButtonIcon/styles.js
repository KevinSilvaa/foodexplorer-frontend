import styled from "styled-components";

export const Container = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 2rem;
  background: ${({ theme }) => theme.COLORS.TINTS.TOMATO_100};
  color: ${({ theme }) => theme.COLORS.LIGHT.LIGHT_100};
  border: none;
  border-radius: 0.25rem;
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.5rem;

  &:hover {
    filter: brightness(0.8);
  }
`;
