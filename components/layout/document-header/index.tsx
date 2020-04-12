import { BrandBanner } from "@components/brand-banner";
import {
  IconButton,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
} from "@material-ui/core";
import AccountCircleOutlined from "@material-ui/icons/AccountCircleOutlined";
import DirectionsRunOutlined from "@material-ui/icons/DirectionsRunOutlined";
import MemoryOutlined from "@material-ui/icons/MemoryOutlined";
import SettingsOutlined from "@material-ui/icons/SettingsOutlined";
import { NextRouter, useRouter } from "next/router";
import { useState } from "react";
import "./styles.scss";

export const DocumentHeader = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const router: NextRouter = useRouter();

  const open = Boolean(anchorEl);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const logout = (event: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
    event.preventDefault();
    router.push("/auth");
  };

  return (
    <header className="header">
      <BrandBanner maxWidth={134} />
      <div>
        <IconButton
          aria-label="account of current user"
          aria-controls="user-menu"
          onClick={handleMenu}
          aria-haspopup="true"
        >
          <AccountCircleOutlined />
        </IconButton>
      </div>

      <Menu
        elevation={1}
        id="user-menu"
        anchorEl={anchorEl}
        getContentAnchorEl={null}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={open}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>
          <ListItemIcon classes={{ root: "menuListItemIcon" }}>
            <SettingsOutlined fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Settings" />
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon classes={{ root: "menuListItemIcon" }}>
            <MemoryOutlined fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="ACP" />
        </MenuItem>
        <MenuItem onClick={logout}>
          <ListItemIcon classes={{ root: "menuListItemIcon" }}>
            <DirectionsRunOutlined fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Log out" />
        </MenuItem>
      </Menu>
    </header>
  );
};
