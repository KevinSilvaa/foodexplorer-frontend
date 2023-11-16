import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  letter-spacing: 0.0225rem;
  width: 100%;
`;

export const Field = styled.textarea`
  width: 100%;
  height: 11rem;
  resize: none;
  letter-spacing: 0.0225rem;
  background: ${({ theme }) => theme.COLORS.DARK.DARK_800};
  color: ${({ theme }) => theme.COLORS.LIGHT.LIGHT_100};
  border: none;
  border-radius: 0.5rem;
  padding: 0.875rem;
  font-family: 'Roboto';
  
  &::placeholder {
    font-family: 'Roboto';
    color: ${({ theme }) => theme.COLORS.LIGHT.LIGHT_500};
  }

  &:focus {
    border: 1px solid ${({ theme }) => theme.COLORS.LIGHT.LIGHT_500};
  }
`;
