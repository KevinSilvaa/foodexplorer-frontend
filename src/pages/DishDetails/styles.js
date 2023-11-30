import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
`;

export const Content = styled.div`
  padding: 1rem 3.5rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  
  > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    gap: 1rem;
    
    img {
      width: 264px;
      height: 264px;
      border-radius: 50%;
    }
    
    > .content {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 1.5rem;

      h1 {
        color: ${({ theme }) => theme.COLORS.LIGHT.LIGHT_300};
        font-size: 1.5rem;
        font-weight: 500;
        line-height: 2.25rem;
      }

      p {
        color: ${({ theme }) => theme.COLORS.LIGHT.LIGHT_300};
        line-height: 1.5rem;
      }

      .ingredients {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 1.5rem;
        justify-items: center;
      }

      .buttons {
        display: flex;
        gap: 1rem;

      }
      
      button {
        width: 100%;
      }
    }

  }

  @media screen and (min-width: 1024px) {
    padding: 0.5rem 7.5rem 9rem;
    gap: 2.5rem;

    footer {
      position: absolute;
      bottom: 0;
    }

    > div {
      flex-direction: row;
      gap: 3rem;
      margin-top: 3rem;
      
      img {
        width: 390px;
        height: 390px;

        color: ${({ theme }) => theme.COLORS.LIGHT.LIGHT_100};
        font-size: 2rem;
      }

      .content {
        align-items: start;

        h1 {
          font-size: 2.5rem;
          line-height: 3.5rem;
        }

        p {
          font-size: 1.5rem;
          line-height: 2rem;
          text-align: start;
          max-width: 700px;
        }
        
        .ingredients {
          display: flex;
          gap: 0.75rem;
        }
        
        .buttons {
          margin-top: 3rem;
        }

        button {
          width: fit-content;
          height: 3.5rem;
        }
      }
    }
  }
`;
