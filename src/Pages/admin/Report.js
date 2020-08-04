import React, { useState } from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";
import Box from "@material-ui/core/Box";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import { mainListItems } from "./listItems";
import Paper from "@material-ui/core/Paper";
import AgeChart from "../../Chart/AgeChart";
import EducationChart from "../../Chart/EduChart";
import BrChart from "../../Chart/BrChart";
import InputDate from "../../component/admin/InputDate";
import GndrChart from "../../Chart/GndrChart";
import "../../index.css";
import get from "../../service/getStatic";
import Modal from "../../component/admin/Modals";
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: "none",
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: "hidden",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto",
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
  },
  fixedHeight: {
    height: 240,
  },
}));

export default function Dashboard() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const fixedHeightPaper = clsx(classes.paper, classes.appBarSpacer);
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, "0");
  var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  var yyyy = today.getFullYear();

  today = mm + "-" + dd + "-" + yyyy;

  const [date, setDate] = useState({
    startdate: "2020-01-01",
    enddate: today,
  });
  const [statistic, setStatistic] = useState({
    gender: [0, 0],
    age: [0, 0, 0, 0, 0, 0],
    education: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    major: [
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
    ],
  });
  const [stat, setStatus] = useState({
    status: 200,
    fetch: true,
    text: "ok",
  });
  const onSubmit = async () => {
    const result = await get(date.startdate, date.enddate);
    const newStatus = stat;

    if (result === 404) {
      newStatus.status = 404;
      newStatus.text = "หาไม่พบ";
      setStatus(newStatus);
    }
    if (result === 500) {
      newStatus.status = 500;
      newStatus.text = "โปรแกรมผิดพลาด";
      setStatus(newStatus);
    }
    if (result === 999) {
      newStatus.status = 999;
      newStatus.text = "เกิดความผิดพลาด";
      setStatus(newStatus);
    }
    if (result !== 404 || result !== 500 || result !== 501) {
      const newArray = statistic;
      newArray.gender = result.gndr;
      newArray.age = result.age;
      newArray.education = result.edu;
      newArray.major = result.maj;
      setStatistic(newArray);
      setStatistic({ ...statistic });
    }
  };
  const url =
    "https://cubioinfo.com/aptitude-test/api/statistics/" +
    date.startdate +
    "/" +
    date.enddate;

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="absolute"
        color="primary"
        className={clsx(classes.appBar, open && classes.appBarShift)}
      >
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            className={clsx(
              classes.menuButton,
              open && classes.menuButtonHidden
            )}
          >
            <MenuIcon />
          </IconButton>

          <h5>ระบบประเมินความสนใจของบุคคลที่มีต่อหน่วยงานราชการไทย</h5>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={open}
      >
        <div className={classes.toolbarIcon}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <List>{mainListItems}</List>
        <Divider />
      </Drawer>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />

        <Container maxWidth="lg" className={classes.container}>
          <InputDate date={date} setDate={setDate} onSubmit={onSubmit} />
          {stat.status === 404 || stat.status === 500 || stat.status === 501 ? (
            <Modal status={stat.status} link={url} />
          ) : (
            ""
          )}
          {stat.status === 999 ? (
            <Modal
              status={" failed to fetch"}
              link={
                "Something happened in setting up the request and triggered an Error"
              }
            />
          ) : (
            ""
          )}
          <Grid container spacing={1}>
            {/* Chart */}
            <Grid item xs={12}>
              <Paper>
                <Box p={2}>
                  {stat.status === 404 ||
                  stat.status === 500 ||
                  stat.status === 501 ? (
                    ""
                  ) : (
                    <GndrChart gender={statistic} />
                  )}
                </Box>
              </Paper>
            </Grid>
            {/* Recent Deposits */}
            <Grid item xs={12}>
              <Paper>
                <Box p={2}>
                  {stat.status === 404 ||
                  stat.status === 500 ||
                  stat.status === 501 ? (
                    ""
                  ) : (
                    <AgeChart age={statistic} />
                  )}
                </Box>
              </Paper>
            </Grid>
            {/* Recent Orders */}
            <Grid item xs={12}>
              <Paper>
                <Box p={2}>
                  {stat.status === 404 ||
                  stat.status === 500 ||
                  stat.status === 501 ? (
                    ""
                  ) : (
                    <EducationChart edu={statistic} />
                  )}
                </Box>
              </Paper>
            </Grid>
          </Grid>
          <Box pt={4}>
            <Paper className={fixedHeightPaper}>
              <Box p={2} xs={12} lg={12}>
                {stat.status === 404 ||
                stat.status === 500 ||
                stat.status === 501 ? (
                  ""
                ) : (
                  <BrChart br={statistic} />
                )}
              </Box>
            </Paper>
          </Box>
        </Container>
      </main>
    </div>
  );
}
