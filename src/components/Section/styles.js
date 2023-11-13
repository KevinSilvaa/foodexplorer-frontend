import styled from "styled-components";

export const Container = styled.section`
  width: 100%;

  h1 {
    font-size: 1.125rem;
    font-family: 'Poppins';
    font-weight: 500;
    line-height: 1.5rem;
    color: ${({ theme }) => theme.COLORS.LIGHT.LIGHT_300};
    margin-bottom: 1.5rem;
  }
`;
