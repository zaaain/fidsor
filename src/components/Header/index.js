import React from "react";
import { Typography } from "@mui/material";

const Header = () => {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        height: "40px",
        backgroundColor: "#1976d2",
        display: "flex",
        justifyContent: "center",
        padding: "10px",
        alignItems: "center",
        zIndex:999
      }}
    >
      <Typography
        color="secondary"
        style={{ fontSize: "22px", color: "#ffffff" }}
      >
        {" "}
        Task Board
      </Typography>
    </div>
  );
};

export default Header;
