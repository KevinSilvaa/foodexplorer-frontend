import styled from "styled-components";

export const Container = styled.button`
  background: transparent;
  width: 100%;
  border: none;
  color: ${({ theme }) => theme.COLORS.LIGHT.LIGHT_300};
  font-size: 1.5rem;
  font-weight: 500;
  font-family: 'Poppins';
  line-height: 2rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 1rem;
`;
