import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styled from "@emotion/styled";
import { Typography } from "@mui/material";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 2,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const StyledBanner = styled("img")`
  width: 100%;
`;

const Title = styled(Typography)`
  color: #fff;
`;

const Slide = ({ movies }) => {
  return (
    <Carousel
      responsive={responsive}
      draggable={false}
      swipeable={false}
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={2500}
      keyBoardControl={true}
      slidesToSlide={1}
    >
      {movies.map((movie) => {
        <>
          <StyledBanner
            src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
            alt="Banner"
          />
          <Title>{movie.original_title}</Title>
        </>;
      })}
    </Carousel>
  );
};

export default Slide;
