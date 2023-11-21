import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  
  .slide-wrapper {

    .splide__list {
      max-width: 90vw;

      gap: 1rem;

      .splide__slide {
        max-width: 210px;
        gap: 1rem;
      }
    }

    .splide__pagination, .splide__arrow {
      display: none;
    }
  }

  @media screen and (min-width: 850px) {
    .slide-wrapper {

      max-width: 75vw;
      .splide__list {

        gap: 1rem;

        .splide__slide {
          max-width: 304px;
          gap: 0rem;
        }
      }

      .splide__arrow {
        width: 48px;
      }
    }
  }

  @media screen and (min-width: 1440px) {
    .slide-wrapper {
      max-width: calc(90vw - 120px);
      .splide__list {
        gap: 2rem;

      }
    }
  }
`;
