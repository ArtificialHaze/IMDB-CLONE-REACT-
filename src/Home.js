import { Box, styled } from "@mui/material";
import Banner from "./Banner";
import React, { useEffect, useState } from "react";
import { FetchMovies } from "./api";
import Header from "./Header";
import { NOWPLAYING_MOVIES } from "./utils";
import UpNext from "./UpNext";
import Slide from "./Slide";

const StyledBox = styled(Box)`
  display: flex;
  padding: 20px 0;
`;

const Component = styled(Box)`
  padding: 0px 115px;
`;

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getData = async () => {
      let res = await FetchMovies(NOWPLAYING_MOVIES);
      setMovies(res.results);
    };

    getData();
  }, []);

  return (
    <>
      <Header />
      <Component>
        <StyledBox>
          <Banner movies={movies} />
          <UpNext movies={movies} />
        </StyledBox>
        <Slide movies={movies} />
      </Component>
    </>
  );
};

export default Home;
