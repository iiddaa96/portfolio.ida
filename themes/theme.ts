"use client";
import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  typography: {
    fontFamily: '"DM Serif Display", serif;',
    h1: {
      fontFamily: '"DM Serif Display", serif;',
      fontWeight: 700,
      fontSize: "2.5rem",
      color: "#0A0908",
    },
    h2: {
      fontFamily: '"Roboto", sans-serif;',
      fontWeight: 600,
      fontSize: "2rem",
      color: "#550A09085",
    },
    h5: {
      fontFamily: '"Roboto", sans-serif;',
      fontWeight: 600,
      fontSize: "1.5rem",
      color: "#0A0908",
    },
    body1: {
      fontFamily: '"Roboto", sans-serif;',
      fontSize: "1rem",
      color: "#0A0908",
    },
  },
});

export default theme;
