import React from "react";

import StepperForm from "../../Pages/user/StepperForm";
import Nav from "../../component/user/Navbar";

import Box from "@material-ui/core/Box";
import { createMuiTheme } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Fab from "@material-ui/core/Fab";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import Zoom from "@material-ui/core/Zoom";
import Toolbar from "@material-ui/core/Toolbar";
import Container from "@material-ui/core/Container";

import "../../App.css";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "fixed",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
}));

function ScrollTop(props) {
  const { children } = props;
  const classes = useStyles();
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      "#back-to-top-anchor"
    );

    if (anchor) {
      anchor.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <Zoom in={trigger}>
      <div onClick={handleClick} role="presentation" className={classes.root}>
        {children}
      </div>
    </Zoom>
  );
}

ScrollTop.propTypes = {
  children: PropTypes.element.isRequired,
};

function Main(props) {
  const theme = createMuiTheme({
    typography: {
      fontFamily: '"Prompt", serif',
    },
  });
  return (
    <div className="container" theme={theme}>
      <div className="row">
        <Nav />
        <Toolbar id="back-to-top-anchor" />
        <Container fixed>
          <Box paddingTop={12}>
            <center>
              <div className="box">
                <StepperForm position="absolute" />
              </div>
            </center>
          </Box>

          <ScrollTop>
            <Fab color="primary" size="small" aria-label="scroll back to top">
              <KeyboardArrowUpIcon />
            </Fab>
          </ScrollTop>
        </Container>
      </div>
    </div>
  );
}

export default Main;
