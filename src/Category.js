import { Box } from "@mui/material";
import React from "react";
import Header from "./Header";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styled from "@emotion/styled";
import { Typography } from "@mui/material";
import { useState, useEffect } from "react";
import { FetchMovies } from "./api";
import { useLocation } from "react-router-dom";
import {
  moviesType,
  POPULAR_MOVIES,
  TOPRATED_MOVIES,
  UPCOMING_MOVIES,
} from "./utils";
import { Divider } from "@material-ui/core";
import MoviesList from "./MoviesList";

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
  height: 450px;
`;

const Component = styled(Box)`
  width: 80%;
  margin: auto;
`;

const Container = styled(Box)`
  background: #f5f5f5;
  padding: 10px;
`;

const Category = () => {
  const [movies, setMovies] = useState([]);

  const { search } = useLocation();

  useEffect(() => {
    const getData = async (API_URL) => {
      let res = await FetchMovies(API_URL);
      setMovies(res.results);
    };

    let API_URL;

    if (search.includes("popular")) {
      API_URL = POPULAR_MOVIES;
    } else if (search.includes("upcoming")) {
      API_URL = UPCOMING_MOVIES;
    } else if (search.includes("toprated")) {
      API_URL = TOPRATED_MOVIES;
    }

    getData(API_URL);
  }, [search]);

  return (
    <>
      <Header />
      <Component>
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
            </>;
          })}
        </Carousel>
        <Container>
          <Typography variant="h6">IMDB charts</Typography>
          <Typography variant="h4">
            IMDB {moviesType[search.split("=")[1]]} Movies
          </Typography>
          <Typography style={{ fontSize: "12px", margin: "5px" }}>
            IMDB Top {movies.length} as rated by regular IMDB Voters.
          </Typography>
          <Divider />
          <MoviesList movies={movies} />
        </Container>
      </Component>
    </>
  );
};

export default Category;
