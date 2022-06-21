import React from "react";
import Grid from "@mui/material/Grid";
import Valid from "../images/vallids.jpg";
import { TextField, InputAdornment, Avatar, Select, MenuItem } from "@mui/material/";
import SearchIcon from "@mui/icons-material/Search";
import Button from "@mui/material/Button";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import "./style/header.css";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import AutoGraphIcon from "@mui/icons-material/AutoGraph";
import SettingsIcon from "@mui/icons-material/Settings";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import ViewComfyIcon from "@mui/icons-material/ViewComfy";

function Header() {
  return (
    <div>
      <div className="header1">
        <Grid
          container
          rowSpacing={1}
          sx={{ display: "flex", alignItems: "center" }}
        >
          <Grid item xs={12} sm={6} md={4}>
            <img src={Valid} alt="valid" className="valid" width="150px" />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <TextField
              id="outlined-start-adornment"
              sx={{ m: 1 }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    {" "}
                    <SearchIcon />{" "}
                  </InputAdornment>
                ),
              }}
              placeholder="All Apps Search"
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <div className="header-r">
              <Button variant="contained">Enterprise</Button>
              <div className=" header-r-icon">
                <MailOutlineIcon color="primary" />
              </div>
              <div className="header-r-profile">
                <Avatar
                  alt="İ"
                  src="/static/images/avatar/1.jpg"
                  sx={{ width: 56, height: 56 }}
                />
                <div className="header-r-profile-info">
                  <h5>İhsan Alptuğ Özbek</h5>
                  <p>Siber Güvenlik Uzmanı</p>
                </div>
                <KeyboardArrowDownIcon />
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
      <div className="header2">
        <Grid container rowSpacing={1}>
          <Grid item xs={12} sm={12} md={6}>
            <div className="header-2-left">
              <div className="header-2-div left-1">
                <DashboardOutlinedIcon />
                <h5>Dashboard</h5>
              </div>
              <div className="header-2-div left-2">
                <AutoGraphIcon />
                <h5>Security Activity</h5>
              </div>
              <div className="header-2-div left-3">
                <SettingsIcon />
                <h5>Settings</h5>
              </div>
              <div className="header-2-div left-4">
                <HelpOutlineIcon />
                <h5>Supports</h5>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <div className="header-2-right">
              <div className="header-2-div right-1">
                <ViewComfyIcon />
                <h5>All Apps</h5>
              </div>
              <div className="header-2-div right-2">
                <Select
                  labelId="demo-select-small"
                  id="demo-select-small"
                  label="Age"
                  sx={{ m: 1, minWidth: 150 }}
                  defaultValue = {10}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>domainname1</MenuItem>
                  <MenuItem value={20}>domainname2</MenuItem>
                  <MenuItem value={30}>domainname3</MenuItem>
                </Select>
              </div>
              <div className="header-2-div right-3">
              <Button variant="contained">
                Check My Service
              </Button>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Header;
