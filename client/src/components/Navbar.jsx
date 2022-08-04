import React from "react";
import { AppBar, Toolbar, Typography, styled } from "@mui/material";
import { NavLink } from "react-router-dom";

const Header = styled(AppBar)`
  background: black;
`
const Tabs = styled(NavLink)`
  font-size: 20px;
  color: white;
  margin-right: 20px;
    text-decoration: none;
`

const Navbar = () => {
  return (
    <Header position="static">
      <Toolbar>
        <Tabs to="/">TECHNICAL  ABHI</Tabs>
        <Tabs to="/all">ALL USERS</Tabs>
        <Tabs to="/add">ADD USER</Tabs>
      </Toolbar>
    </Header>
  );
};

export default Navbar;
