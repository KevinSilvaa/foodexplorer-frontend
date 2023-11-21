// Styling Imports
import { Container } from "./styles";

// Components Imports
import { Card } from "../Card";

// Carousel Imports
import { Splide, SplideSlide } from "@splidejs/react-splide";

// Carousel Styling Imports
import '@splidejs/splide/css/skyblue';

export function Slider({ children }) {

  const sliderOptions = {
    perMove: 1,
    breakPoints: {
      1440: {
        perPage: 5,
      },
      1280: {
        perPage: 3,
      },
      850: {
        perPage: 2,
      },
      320: {
        perPage: 1,
      }
    }
  }

  return (
    <Container>
      <div className="slide-wrapper">
        <Splide
          options={sliderOptions} className="slider-div"
        >
          {children}
        </Splide>
      </div>
    </Container>
  );
}
