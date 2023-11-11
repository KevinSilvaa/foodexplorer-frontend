import styled from "styled-components";

export const Container = styled.div`
  padding: 0.25rem 0.5rem;
  width: fit-content;
  background: ${({ theme }) => theme.COLORS.DARK.DARK_1000};
  color: ${({ theme }) => theme.COLORS.LIGHT.LIGHT_100};
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.5rem;
  border-radius: 0.5rem;
`;
