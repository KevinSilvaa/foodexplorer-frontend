import styled from "styled-components";

export const Container = styled.div`
  
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2.25rem;
  padding: 1rem 2rem 3.5rem;

  h1 {
    font-size: 2rem;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-top: 2.5rem;

  .ingredients {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      padding: 0.5rem;
      gap: 1rem;
      background: ${({ theme }) => theme.COLORS.DARK.DARK_800};
      border-radius: 0.5rem;
    }
`;
