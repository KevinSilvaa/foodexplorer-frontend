import styled from "styled-components";

export const Container = styled.footer`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  background: ${({ theme }) => theme.COLORS.DARK.DARK_600};
  padding: 1.5rem;
  font-family: 'Roboto';

  > div {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: ${({ theme }) => theme.COLORS.LIGHT.LIGHT_700};
    font-weight: 700;

    img {
      width: 20px;
      height: 20px;
    }
  }

  > p {
    color: ${({ theme }) => theme.COLORS.LIGHT.LIGHT_200};
    font-size: 0.75rem;
    text-align: right;
  }

  @media screen and (min-width: 800px) {
    padding: 1.5rem 8rem;

    > div {
      font-size: 1.5rem;

      img {
        width: 30px;
        height: 30px;
      }
    }

    > p {
      font-size: 0.875rem;
      line-height: 1.5rem;
    }
  }
`;
