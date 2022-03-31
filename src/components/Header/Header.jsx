import React from "react";
import { Autocomplete } from "@react-google-maps/api";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  InputBase,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import useStyle from './HeaderStyles';
// header component
const Header = () => {
    const classes = useStyle();
  return (
    <AppBar position="static">
      <Toolbar className={classes.toolbar}>
          {/* variant is used to make the typography responsive */}
        <Typography variant="h5" className={classes.title}>
          Travel Guide
        </Typography>
        <Box display="flex">
          <Typography variant="h6" className={classes.title}>
            Explore new places
          </Typography>
          {/* <Autocomplete>
            <div className={classes.search}>
              <div className={classes.searchIcon}></div>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search..."
              classes={{ root: classes.inputRoot, input: classes.inputInput }}
            />
          </Autocomplete> */}
        </Box>
      </Toolbar>
    </AppBar>
  );
};
export default Header;
