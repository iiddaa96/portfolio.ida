"use client";
import MenuIcon from "@mui/icons-material/Menu";
import {
  AppBar,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Link from "next/link";
import React, { useState } from "react";

const Header: React.FC = () => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const muiTheme = useTheme();
  const isMobile = useMediaQuery(muiTheme.breakpoints.down("md"));

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <>
      <AppBar
        sx={{
          backgroundColor: "#f5e7e3",
          fontFamily: "Arial, sans-serif",
          fontWeight: "bold",
          paddingBottom: "3px",
          boxShadow: "none",
          color: "black",
        }}
        position="static"
      >
        <Toolbar>
          {isMobile && (
            <IconButton
              edge="start"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={handleOpenNavMenu}
            >
              <MenuIcon />
            </IconButton>
          )}
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            <Link href="/" style={{ textDecoration: "none", color: "inherit" }}>
              I.C
            </Link>
          </Typography>
          {!isMobile && (
            <>
              <Button color="inherit" href="#about">
                About
              </Button>
              <Button color="inherit" href="#projects">
                Projects
              </Button>
              <Button color="inherit" href="#contact">
                Contact
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>
      <Menu
        id="menu-appbar"
        anchorEl={anchorElNav}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        open={Boolean(anchorElNav)}
        onClose={handleCloseNavMenu}
      >
        <MenuItem onClick={handleCloseNavMenu} component={Link} href="#about">
          About
        </MenuItem>
        <MenuItem
          onClick={handleCloseNavMenu}
          component={Link}
          href="#projects"
        >
          Projects
        </MenuItem>
        <MenuItem onClick={handleCloseNavMenu} component={Link} href="#contact">
          Contact
        </MenuItem>
      </Menu>
    </>
  );
};

export default Header;
