import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  margin-bottom: 1.5rem;

  h1 {
    font-size: 1.125rem;
    font-family: 'Poppins';
    font-weight: 500;
    line-height: 1.5rem;
    color: ${({ theme }) => theme.COLORS.LIGHT.LIGHT_300};
    margin-bottom: 1.5rem;
  }

  @media screen and (min-width: 850px) {
    margin-bottom: 3rem;
    
    h1 {
      font-size: 2rem;
      line-height: 2.75rem;
    }
  }
`;
