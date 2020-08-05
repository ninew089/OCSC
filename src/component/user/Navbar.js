import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import logo from "./logo/OCSC-banner.png";
import logos from "./logo/doe.png";
import { makeStyles } from "@material-ui/core/styles";
import "../../Css/Work.css";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    display: "flex",
  },
  toolbar: {
    minHeight: 128,
    alignItems: "flex-start",
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    alignSelf: "flex-end",
  },
}));

export default function ProminentAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="fixed" style={{ background: "ghostwhite" }}>
        <Toolbar className={classes.toolbar}>
          <img src={logo} alt="logo" className={classes.logo} width="350px" />
          <div className="logo">
            <img
              src={logos}
              alt="logos"
              className={classes.logo}
              width="350px"
              marginleft="auto"
            />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
