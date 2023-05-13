import React, { useState } from "react";
import {
  LightModeOutlined,
  DarkModeOutlined,
  Menu as MenuIcon,
  Search,
  SettingsOutlined,
} from "@mui/icons-material";
import FlexBetween from "component/FlexBetween";
import { useDispatch, useSelector } from "react-redux";
import { toggleMode } from "state";
import { AppBar, IconButton, InputBase, Toolbar, useTheme } from "@mui/material";

const Navbar = ({ setIsSidebarOpen, isSidebarOpen }) => {
  const dispatch = useDispatch();
  const theme = useTheme();
  const mode = useSelector((state) => state.global.mode);

  const [anchorEl, setAnchorEl] = useState(null);
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const isOpen = Boolean(anchorEl);

  const handleToggleMode = () => {
    dispatch(toggleMode());
  };

  const handleNavbarClick = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar
      position={isNavbarOpen ? "sticky" : "static"}
      sx={{
        top: 0,
        background: "none",
        boxShadow: "none",
        zIndex: 999,
        right: isSidebarOpen ? "250px" : 0,
        transition: "right 0.3s ease",
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        {/* Left side */}
        <FlexBetween>
          <IconButton onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
            <MenuIcon />
          </IconButton>
          <FlexBetween
            backgroundColor={theme.palette.background.alt}
            borderRadius="9px"
            gap="3rem"
            p="0.1rem 1.5rem"
          >
            <InputBase placeholder="Search..." />
            <IconButton>
              <Search />
            </IconButton>
          </FlexBetween>
        </FlexBetween>

        {/* Right side */}
        <FlexBetween gap="1.5rem">
          <IconButton onClick={handleToggleMode}>
            {mode === "dark" ? (
              <DarkModeOutlined sx={{ fontSize: "25px" }} />
            ) : (
              <LightModeOutlined sx={{ fontSize: "25px" }} />
            )}
          </IconButton>
          <IconButton onClick={handleNavbarClick}>
            <SettingsOutlined sx={{ fontSize: "25px" }} />
          </IconButton>
        </FlexBetween>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
