import { List, ListItem, Typography } from "@mui/material";
import { Star } from "@mui/icons-material";
import React from "react";

const Banner = styled("img")`
  width: 47px;
`;

const Container = styled(List)`
  display: flex;
`;

const MoviesList = ({ movies }) => {
  return (
    <>
      {movies.map((movie) => {
        <Container>
          <ListItem>
            <Banner
              src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
              alt="Poster"
            />
          </ListItem>
          <ListItem>
            <Typography>{movie.original_title}</Typography>
          </ListItem>
          <ListItem>
            <Star color={"warning"} />
            <Typography>{movie.vote_average}</Typography>
          </ListItem>
          <ListItem>
            <Typography>{movie.release_date}</Typography>
          </ListItem>
        </Container>;
      })}
    </>
  );
};

export default MoviesList;
