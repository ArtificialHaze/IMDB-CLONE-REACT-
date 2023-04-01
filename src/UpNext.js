import { Typography, Box, styled } from "@mui/material";
import React from "react";

const Component = styled(Box)`
  width: 40%;
  display: flex;
  flex-direction: column;
  align-items: baseline;
  padding-left: 20px;
  & > p {
    color: #f5c518;
    font-weight: bold;
    font-size: 18px;
    margin-bottom: 10px;
  }
`;

const Poster = styled("img")`
  width: 88px;
`;

const Wrapper = styled(Box)`
  color: #fff;
  display: flex;

  & > p {
    margin-left: 20px;
  }
`;

const UpNext = ({ movies }) => {
  return (
    <Component>
      <Typography>Up next</Typography>
      {movies.slice(0, 3).map((movie) => {
        <Wrapper>
          <Poster
            src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
            alt="UpComingPoster"
          />
          <Typography>{movie.original_title}</Typography>
        </Wrapper>;
      })}
    </Component>
  );
};

export default UpNext;
