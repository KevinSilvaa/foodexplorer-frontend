import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  letter-spacing: 0.0225rem;
  
  > label {
    display: flex;
    flex-direction: column;
    font-family: 'Roboto';
    gap: 1rem;
    color: ${({ theme }) => theme.COLORS.LIGHT.LIGHT_400}
  }
`;

export const Field = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 2rem;
  background: ${({ theme }) => theme.COLORS.DARK.DARK_800};
  border-radius: 0.5rem;

  p {
    font-size: 0.875rem;
    font-weight: 500;
    line-height: 1.5rem;

    color: ${({ theme }) => theme.COLORS.LIGHT.LIGHT_100};
    font-family: 'Poppins';
  }

  > input {
    display: none;
  }

  > svg {
      color: ${({ theme }) => theme.COLORS.LIGHT.LIGHT_100};
    }
`;
