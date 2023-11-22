import styled from "styled-components";

export const Container = styled.div`
  display: none;

  .card-payments {
    width: 100%;
    display: grid;
    grid-template-rows: 5rem auto;
    grid-template-columns: repeat(2, 1fr);
    grid-template-areas: 
    "pix card"
    "qr qr";
    height: 445px;
    border: 1px solid ${({ theme }) => theme.COLORS.LIGHT.LIGHT_600};
    border-radius: 0.5rem;

    .pix, .card {
      padding: 0.875rem 0.75rem;
      background: ${({ theme }) => theme.COLORS.DARK.DARK_500};
      border: none;
      color: ${({ theme }) => theme.COLORS.LIGHT.LIGHT_100};
      height: 100%;
      border-bottom: 1px solid ${({ theme }) => theme.COLORS.LIGHT.LIGHT_600};

      &:hover {
        background: ${({ theme }) => theme.COLORS.DARK.DARK_800};
      }

      &:focus {
        background: ${({ theme }) => theme.COLORS.DARK.DARK_800};
      }
    }

    .pix {
      border-top-left-radius: 0.5rem;
      border-right: 1px solid ${({ theme }) => theme.COLORS.LIGHT.LIGHT_600};
    }

    .card {
      border-top-right-radius: 0.5rem;
      border-left: 1px solid ${({ theme }) => theme.COLORS.LIGHT.LIGHT_600};
    }
  }

  @media screen and (min-width: 1024px) {
    display: block
  }
`;
