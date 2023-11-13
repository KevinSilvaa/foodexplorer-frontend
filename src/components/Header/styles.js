import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  width: 100%;
  padding: 3.5rem 1.5rem 1.5rem;
  background: ${({ theme }) => theme.COLORS.DARK.DARK_700};
  grid-area: header;
  position: relative;

  .hide {
    display: none;
  }

  nav {
    position: absolute;
    width: 100%;
    height: 100vh;
    top: 130%;
    left: 0;
    z-index: 9999;
    background: ${({ theme }) => theme.COLORS.DARK.DARK_400};

    div {
      max-width: 90vw;
      margin: 0 auto;
    }

    .buttons {
      margin-top: 2.25rem;
      list-style-type: none;

      button {
        color: ${({ theme }) => theme.COLORS.LIGHT.LIGHT_300};
        width: 100%;
        text-align: left;
        background: transparent;
        border: none;
        font-size: 1.5rem;
        font-weight: 300;
        line-height: 2rem;
        font-family: 'Poppins';
        padding: 0.75rem;
        border-bottom: 1px solid ${({ theme }) => theme.COLORS.DARK.DARK_1000};
      }
    }
  }

  @media screen and (min-width: 850px) {
    padding: 1.5rem 8rem;

    .hamb, #menu {
      display: none;
    }
  }
`;

export const Menu = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  width: 100%;
  gap: 1rem;
  color: ${({ theme }) => theme.COLORS.LIGHT.LIGHT_100};

  > button {
    display: flex;
    align-items: center;
    border: none;
    background: transparent;
    height: 24px;

    svg {
      color: ${({ theme }) => theme.COLORS.LIGHT.LIGHT_100};
    }
  }

  > h2 {
    font-size: 1.25rem;
    font-family: Roboto;
  }
`;

export const Content = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;

  button {
    display: flex;
    align-items: center;
    border: none;
    background: transparent;
  }

  nav {
    display: flex;
    width: 100px;
    background: black;
  }

  
  svg {
    color: ${({ theme }) => theme.COLORS.LIGHT.LIGHT_100};
  }
  
  .desktop {
    display: none;
  }

  div:nth-child(3) {
    display: none;
  }

  @media screen and (min-width: 850px) {
    gap: 2rem;
    justify-content: center;

    .desktop {
      display: block;
    }

    .mobile, .hamb {
      display: none;
    }

    > div:nth-child(3) {
      display: flex;
      width: 25%;
    }

    button:first-child {
      background: ${({ theme }) => theme.COLORS.TINTS.TOMATO_200};
    }
  }

  @media screen and (min-width: 1024px) {
    > div:nth-child(3) {
      width: 40%;
    }
  }

  @media screen and (min-width: 1440px) {
    > div:nth-child(3) {
      width: 60%;
    }
  }
`;

export const Logo = styled.div`
  padding: 0 3.5rem;
  width: fit-content;

  > a {
    display: flex;
    width: fit-content;
    align-items: center;
    gap: 0.5rem;
    color: ${({ theme }) => theme.COLORS.LIGHT.LIGHT_100};
    
    h1 {
      font-size: 1.25rem;
      font-weight: 700;
    }

    img {
      fill: ${({ theme }) => theme.COLORS.TINTS.CAKE_100};
    }

    span {
      font-size: 0.75rem;
      line-height: 1.25rem;
      color: ${({ theme }) => theme.COLORS.TINTS.CAKE_200};
      font-family: 'Roboto';
    }

    @media screen and (min-width: 850px) {
      display: grid;
      position: relative;
      grid-template-areas: 
      "svg title"
      "_ span";

      span {
        grid-area: span;
        position: absolute;
        right: 0;
        bottom: 0;
      }
    }
  }
  
  @media screen and (min-width: 850px) {
    padding: 0;
  }
`;


export const Orders = styled.button`
  display: flex;
  align-items: center;
  position: relative;
  border: none;
  background: transparent;
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.5rem;
  font-family: 'Poppins';
  color: ${({ theme }) => theme.COLORS.LIGHT.LIGHT_100};

  > span {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: -5px;
    right: -5px;
    border-radius: 50%;
    background: ${({ theme }) => theme.COLORS.TINTS.TOMATO_100};
    width: 20px;
    height: 20px;
  }
`;
