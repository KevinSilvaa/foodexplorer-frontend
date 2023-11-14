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
  margin: 2.5rem 1rem 0;
  grid-area: content;

  .cards {
    display: flex;
    gap: 1rem;
  }

  @media screen and (min-width: 850px) {
    margin: 10rem 7.5rem 1.5rem;
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
  grid-template-columns: repeat(2, 1fr);
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
