import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
`;

export const Content = styled.main`
  padding: 3.5rem 2.25rem 2rem;

  @media screen and (min-width: 1024px) {
    padding: 2rem 7.75rem 0;
    gap: 4.5rem;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
`;
