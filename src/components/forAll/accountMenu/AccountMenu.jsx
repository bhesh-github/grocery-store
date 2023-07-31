import React, { useState } from "react";
import { logoutReducer } from "../../../store/features/loggingLogout/isLoggedInSlice";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import { SiGnuprivacyguard } from "react-icons/si";
import { forgotPasswordFormReducer } from "../../../store/features/currentForm/currentFormSlice";
import {
  createAccountFormReducer,
  loginFormReducer,
} from "../../../store/features/currentForm/currentFormSlice";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Box from "@mui/material/Box";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
//

import Avatar from "./Avatar";

export default function AccountMenu({ setLogginOut }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.isLoggedIn.isLoggedInState);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleLogout = () => {
    setLogginOut(true);
    setTimeout(() => {
      setLogginOut(false);
      // setLoggedIn(false);
      navigate("/register");
      dispatch(logoutReducer());
      // dispatch(registerFormReducer());
    }, 3000);
  };
  let userData;
  if (isLoggedIn) {
    userData = {
      imgLink:
        "https://i.guim.co.uk/img/media/b10f15a0955d23826586810847cc3431e36616f1/0_508_2065_1238/master/2065.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=b6b0e2df577f6dc993d68b672483ef58",
      name: "Elon Musk",
    };
  } else {
    userData = {
      imgLink: "",
      name: "",
    };
  }
  return (
    <>
      {/* {logout && (
        <div className="progress-indicator-wrapper">
          <ProgressIndicator />
        </div>
      )} */}

      <Box sx={{ display: "flex", alignItems: "center", textAlign: "center" }}>
        <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? "account-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
          >
            <Avatar
              img_link={userData && userData.imgLink}
              name={userData && userData.name}
            />
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        className="account-menu-wrapper"
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        {isLoggedIn && (
          <>
            <MenuItem
              onClick={() => {
                handleClose();
                navigate("/profile");
              }}
              className="profile-text"
            >
              <Avatar
                img_link={userData && userData.imgLink}
                name={userData && userData.name}
              />
              My profile
            </MenuItem>
            <Divider />
          </>
        )}
        {isLoggedIn ? (
          <>
            <MenuItem
              className="content-item"
              onClick={() => {
                handleClose();
                dispatch(forgotPasswordFormReducer());
                navigate("/register");
              }}
            >
              <ListItemIcon>
                <Settings fontSize="small" className="icon" />
              </ListItemIcon>
              Change password
            </MenuItem>
            <MenuItem
              className="content-item"
              onClick={() => {
                handleClose();
                handleLogout();
              }}
            >
              <ListItemIcon>
                <Logout fontSize="small" className="icon" />
              </ListItemIcon>
              Logout
            </MenuItem>
          </>
        ) : (
          <>
            <MenuItem
              className="content-item"
              onClick={() => {
                handleClose();
                dispatch(loginFormReducer());
                navigate("/register");
              }}
            >
              <ListItemIcon>
                {/* <SiGnuprivacyguard fontSize="small" className="icon" /> */}
                <AssignmentIndIcon fontSize="small" className="icon" />
                {/* <Logout fontSize="small" className="icon" /> */}
              </ListItemIcon>
              Sign In
            </MenuItem>
            <MenuItem
              className="content-item"
              onClick={() => {
                handleClose();
                dispatch(createAccountFormReducer());
                navigate("/register");
              }}
            >
              <ListItemIcon>
                <SiGnuprivacyguard fontSize="small" className="icon" />
                {/* <Logout fontSize="small" className="icon" /> */}
              </ListItemIcon>
              Register
            </MenuItem>
          </>
        )}
      </Menu>
    </>
  );
}
