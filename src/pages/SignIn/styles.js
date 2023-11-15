import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding: 10rem 4rem 0;
  text-align: center;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 850px) {
    flex-direction: row;
    justify-content: space-between;
    padding: 8.75rem 10rem; 
  }
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: ${({ theme }) => theme.COLORS.LIGHT.LIGHT_100};
  
  > h1 {
    font-size: 2.25rem;
  }

  @media screen and (min-width: 850px) {
    h1 {
      font-size: 2.5rem;
    }
  }
`;

export const Form = styled.form`
  display: flex;
  gap: 2rem;
  flex-direction: column;
  text-align: left;
  margin: 4.5rem 0 2rem;

  > h1 {
    display: none;
  }

  .field {
    background: ${({ theme }) => theme.COLORS.DARK.DARK_900};
  }

  > a {
    color: ${({ theme }) => theme.COLORS.LIGHT.LIGHT_100};
    font-size: 0.875rem;
    font-weight: 500;
    font-family: 'Poppins';
    text-align: center;
  }

  @media screen and (min-width: 850px) {
    width: 540px;
    padding: 4rem;
    background: ${({ theme }) => theme.COLORS.DARK.DARK_700};
    border-radius: 1rem;

    > h1 {
      display: block;
      color: ${({ theme }) => theme.COLORS.LIGHT.LIGHT_100};
      text-align: center;
    }
  }
`;
