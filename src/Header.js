import React, { useState } from "react";
import { Menu, BookmarkAdd, ExpandMore } from "@mui/icons-material";
import {
  AppBar,
  Toolbar,
  styled,
  Box,
  Typography,
  InputBase,
} from "@mui/material";
import { logoUrl } from "./utils";
import HeaderMenu from "./HeaderMenu";
import { useNavigate } from "react-router-dom";
import { routePath } from "./route";

const StyledToolBar = styled(Toolbar)`
  background-color: #121212;
  min-height: 55px !important;
  padding: 0 115px !important;
  justify-content: space-between;

  & > * {
    padding: 0px 15px;
  }

  & > div {
    display: flex;
    align-items: center;
    cursor: pointer;
    & > p {
      font-size: 15px;
      font-weight: 600;
    }
  }

  & > p {
    font-size: 15px;
    font-weight: 600;
  }
`;

const StyledInputBase = styled(InputBase)`
  background: #fff;
  height: 30px;
  width: 55%;
  border-radius: 5px;
`;

const Logo = styled("img")`
  width: 60px;
`;

const Header = () => {
  const [isOpen, setisOpen] = useState(null);
  const navigate = useNavigate();

  const handleClick = (e) => {
    setisOpen(e.currentTarget);
  };

  const handleClose = () => {
    setisOpen(null);
  };

  return (
    <AppBar position="static">
      <StyledToolBar>
        <Logo
          src={logoUrl}
          alt="Logo"
          onClick={() => {
            navigate(routePath.home);
          }}
        />
        <Box onclick={handleClick}>
          <Menu />
          <Typography>Menu</Typography>
        </Box>
        <HeaderMenu isOpen={isOpen} handleClose={handleClose} />
        <StyledInputBase />
        <Typography>
          IMDB<Box component={"span"}>Pro</Box>
        </Typography>
        <Box>
          <BookmarkAdd />
          <Typography>Watchlist</Typography>
        </Box>
        <Typography>Sign in</Typography>
        <Box>
          <Typography>EN</Typography>
          <ExpandMore />
        </Box>
      </StyledToolBar>
    </AppBar>
  );
};

export default Header;
