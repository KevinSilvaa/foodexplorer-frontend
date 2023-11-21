import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  position: relative;
  width: 210px;
  height: 292px;
  padding: 1.5rem;
  background: ${({ theme }) => theme.COLORS.DARK.DARK_200};
  border: 1px solid ${({ theme }) => theme.COLORS.DARK.DARK_300};
  border-radius: 0.5rem;

  .desc {
    display: none;
  }

  .favorite {
    border: none;
    background: none;
    position: absolute;
    top: 1rem;
    right: 1rem;
    color: ${({ theme }) => theme.COLORS.LIGHT.LIGHT_100};
  }

  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.75rem;
    cursor: pointer;

    img {
      width: 88px;
      height: 88px;
    }
    
    h2 {
      color: ${({ theme }) => theme.COLORS.LIGHT.LIGHT_300};
      font-size: 0.875rem;
      font-weight: 500;
      line-height: 1.5rem;
      font-family: 'Poppins';
    }
  }

  > span {
    font-family: 'Roboto';
    color: ${({ theme }) => theme.COLORS.TINTS.CAKE_200};
  }

  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.75rem;
    width: 100%;
  }

  @media screen and (min-width: 850px) {
    gap: 1rem;
    width: 304px;
    height: 462px;

    .desc {
      display: block;
      color: ${({ theme }) => theme.COLORS.LIGHT.LIGHT_400};
      font-size: 0.875rem;
      line-height: 1.5rem;
      font-family: 'Roboto';
      text-align: center;
    }

    > div {
      gap: 1rem;
      
      img {
        width: 176px;
        height: 176px;
      }

      h2 {
        font-size: 1.5rem;
        font-weight: 700;
        line-height: 2rem;
        color: ${({ theme }) => theme.COLORS.LIGHT.LIGHT_300};
      }
    }

    > span {
      font-size: 2rem;
      line-height: 3.25rem;
    }

    .buttons {
      flex-direction: row;
      gap: 1rem;
      justify-content: center;

      button:nth-child(2) {
        width: fit-content;
        padding: 0.75rem 1.5rem;
      }
    }
  }
`;
