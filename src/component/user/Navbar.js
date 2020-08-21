import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import logo from './logo/OCSC-banner.png'
import logo1 from './logo/logo.png'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import '../../Css/Work.css'
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    display: 'flex',
  },
  toolbar: {
    minHeight: 80,
    alignItems: 'flex-start',
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    alignSelf: 'flex-end',
  },
}))

export default function ProminentAppBar() {
  const classes = useStyles()
  function openNav() {
    if (window.screen.width <= 510) {
      return true
    } else {
      return false
    }
  }

  return (
    <div className={classes.root}>
      <AppBar position="fixed" style={{ background: 'primary' }}>
        <Toolbar className={classes.toolbar}>
          <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="center"
          >
            {openNav() ? (
              <img
                src={logo}
                alt="logo"
                className={classes.logo}
                width="150px"
              />
            ) : (
              <img
                src={logo}
                alt="logo"
                className={classes.logo}
                width="240px"
              />
            )}
            {openNav() ? (
              <div className="logo">
                <img
                  src={logo1}
                  alt="logos"
                  className={classes.logo}
                  width="200px"
                  marginleft="auto"
                />
              </div>
            ) : (
              <div className="logo">
                <img
                  src={logo1}
                  alt="logos"
                  className={classes.logo}
                  width="350px"
                  marginleft="auto"
                />
              </div>
            )}
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  )
}
