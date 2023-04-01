import { MenuItem, Menu } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { routePath } from "./route";

const HeaderMenu = ({ isOpen, handleClose }) => {
  const openMenu = Boolean(isOpen);
  return (
    <Menu
      id="basic-menu"
      anchorEl={isOpen}
      open={openMenu}
      onClose={handleClose}
      MenuListProps={{
        "aria-labelledby": "basic-button",
      }}
    >
      <Link
        style={{ textDecoration: "none", color: "inherit" }}
        to={`${routePath.categories}?category=popular`}
      >
        <MenuItem onClick={handleClose}>Popular</MenuItem>
      </Link>
      <Link
        style={{ textDecoration: "none", color: "inherit" }}
        to={`${routePath.categories}?category=toprated`}
      >
        <MenuItem onClick={handleClose}>Top Rated</MenuItem>
      </Link>
      <Link
        style={{ textDecoration: "none", color: "inherit" }}
        to={`${routePath.categories}?category=upcoming`}
      >
        <MenuItem onClick={handleClose}>Upcoming Movies</MenuItem>
      </Link>
    </Menu>
  );
};

export default HeaderMenu;
