import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-areas:
  "header"
  "content";
  grid-template-rows: 7rem auto;
`;

export const Content = styled.main`
  height: 100vh;
  margin: 2.5rem 1rem 1.5rem;
  grid-area: content;

  @media screen and (min-width: 850px) {
    margin: 8rem 7.5rem 3rem;
  }
`;

export const Banner = styled.div`
  height: 120px;
  margin-bottom: 4rem; 
  gap: 1.5rem;
  position: relative;
  display: grid;
  align-items: center;
  justify-content: space-between;
  grid-template-areas:
  "img info";
  grid-template-columns: 1fr 1.5fr;
  justify-content: space-between;
  background: linear-gradient(180deg, ${({ theme }) => theme.COLORS.GRADIENTS.BLUE_200} 0%, ${({ theme }) => theme.COLORS.GRADIENTS.BLUE_200_2} 100%);
  border-radius: 0.5rem;

  > img {
    position: absolute;
    left: -15px;
    bottom: -13px;
    width: 191px;
    height: 149px;
  }

  .background {
    color: ${({ theme }) => theme.COLORS.LIGHT.LIGHT_300};
    grid-area: info;
      
    div {
      font-family: 'Poppins';

      h1 {
        font-size: 1.125rem;
        font-weight: 600;
        line-height: 1.5rem;
      }

      p {
        font-size: 0.75rem;
        line-height: 1rem;
      }
    }
  }

  @media screen and (min-width: 850px) {
      height: 260px;
      grid-template-columns: 1fr 1fr;
      gap: 5rem;
    
      > img {
        bottom: 0;
        left: -50px;
        width: 400px;
        height: 260px;
      }

      > .background {
        
        div {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;

          h1 {
            font-size: 2.5rem;
            font-weight: 500;
            line-height: 3.5rem;
          }
    
          p {
            font-family: 'Roboto';
            font-size: 1rem;
          }
        }
      }
    }

    @media screen and (min-width: 1250px) {
      img {
        width: 632px;
        height: 406px;
      }
    }
`;
