import React, { useState } from 'react'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import Drawer from '@material-ui/core/Drawer'
import Box from '@material-ui/core/Box'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import List from '@material-ui/core/List'
import Divider from '@material-ui/core/Divider'
import IconButton from '@material-ui/core/IconButton'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import MenuIcon from '@material-ui/icons/Menu'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import { mainListItems } from './listItems'
import Table from '../../component/admin/TableMain'
import InputDate from '../../component/admin/InputDate'
import '../../index.css'
import get from '../../service/getTable'
import Modal from '../../component/admin/Modals'

const drawerWidth = 240

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 240,
  },
}))

export default function Dashboard() {
  const classes = useStyles()
  var today = new Date()
  var dd = String(today.getDate()).padStart(2, '0')
  var mm = String(today.getMonth() + 1).padStart(2, '0') //January is 0!
  var yyyy = today.getFullYear()

  today = yyyy + '-' + mm + '-' + dd

  const [date, setDate] = useState({
    startdate: '2020-01-01',
    enddate: today,
  })
  const [open, setOpen] = React.useState(true)
  const handleDrawerOpen = () => {
    setOpen(true)
  }
  const handleDrawerClose = () => {
    setOpen(false)
  }

  const [data, setData] = useState({ datas: [] })
  const [stat, setStatus] = useState({
    status: 200,
    fetch: true,
    text: 'ok',
  })
  const url =
    'https://job-match.ocsc.go.th/api/answersheets/' +
    date.startdate +
    '/' +
    date.enddate
  const onSubmit = async () => {
    const result = await get(date.startdate, date.enddate)
    const newStatus = stat

    if (result === 404) {
      newStatus.status = 404
      newStatus.text = 'หาไม่พบ'
      setData({ ...data, datas: [] })
      setStatus(newStatus)
    }
    if (result === 500) {
      newStatus.status = 500
      newStatus.text = 'โปรแกรมผิดพลาด'
      setStatus(newStatus)
    }
    if (result === 999) {
      newStatus.status = 999
      newStatus.text = 'เกิดความผิดพลาด'
      setStatus(newStatus)
    }
    if (result !== 404 || result !== 500 || result !== 501) {
      for (var i in result) {
        if (result[i].gndr) {
          result[i].gndr = 'ชาย'
        } else {
          result[i].gndr = 'หญิง'
        }
      }
      // eslint-disable-next-line
      for (var i in result) {
        var choice = []
        for (var s = 0; s < result[i].ans.length; s++) {
          choice.push(result[i].ans.charAt(s))
        }
        result[i].ch1_no1 = choice[0]
        result[i].ch1_no2 = choice[1]
        result[i].ch1_no3 = choice[2]
        result[i].ch1_no4 = choice[3]
        result[i].ch1_no5 = choice[4]
        result[i].ch1_no6 = choice[5]
        result[i].ch1_no7 = choice[6]
        result[i].ch1_no8 = choice[7]
        result[i].ch1_no9 = choice[8]
        result[i].ch1_no10 = choice[9]
        result[i].ch1_no11 = choice[10]
        result[i].ch1_no12 = choice[11]
        result[i].ch1_no13 = choice[12]
        result[i].ch1_no14 = choice[13]
        result[i].ch1_no15 = choice[14]
        result[i].ch1_no16 = choice[15]
        result[i].ch1_no17 = choice[16]
        result[i].ch1_no18 = choice[17]
        result[i].ch1_no19 = choice[18]
        result[i].ch1_no20 = choice[19]
        result[i].ch1_no21 = choice[20]
        result[i].ch1_no22 = choice[21]
        result[i].ch1_no23 = choice[22]
        result[i].ch1_no24 = choice[23]
        result[i].ch1_no25 = choice[24]
        result[i].ch1_no26 = choice[25]
        result[i].ch1_no27 = choice[26]
        result[i].ch1_no28 = choice[27]
        result[i].ch1_no29 = choice[28]
        result[i].ch1_no30 = choice[29]
        result[i].ch1_no31 = choice[30]
        result[i].ch1_no32 = choice[31]
        result[i].ch1_no33 = choice[32]
        result[i].ch1_no34 = choice[33]
        result[i].ch1_no35 = choice[34]
        result[i].ch1_no36 = choice[35]
        result[i].ch1_no37 = choice[36]
        result[i].ch1_no38 = choice[37]
        result[i].ch1_no39 = choice[38]
        result[i].ch1_no40 = choice[39]
        result[i].ch1_no41 = choice[40]
        result[i].ch2_no1 = choice[41]
        result[i].ch2_no2 = choice[42]
        result[i].ch2_no3 = choice[43]
        result[i].ch2_no4 = choice[44]
        result[i].ch2_no5 = choice[45]
        result[i].ch2_no6 = choice[46]
        result[i].ch2_no7 = choice[47]
        result[i].ch2_no8 = choice[48]
        result[i].ch2_no9 = choice[49]
        result[i].ch2_no10 = choice[50]
        result[i].ch2_no11 = choice[51]
        result[i].ch2_no12 = choice[52]
        result[i].ch2_no13 = choice[53]
        result[i].ch2_no14 = choice[54]
        result[i].ch2_no15 = choice[55]
        result[i].ch2_no16 = choice[56]
        result[i].ch2_no17 = choice[57]
        result[i].ch2_no18 = choice[58]
        result[i].ch2_no19 = choice[59]
        result[i].ch2_no20 = choice[60]
        result[i].ch2_no21 = choice[61]
        result[i].ch2_no22 = choice[62]
        result[i].ch2_no23 = choice[63]
        result[i].ch2_no24 = choice[64]
        result[i].ch2_no25 = choice[65]
        result[i].ch2_no26 = choice[66]
        result[i].ch2_no27 = choice[67]
        result[i].ch2_no28 = choice[68]
        result[i].ch2_no29 = choice[69]
        result[i].ch2_no30 = choice[70]
        result[i].ch2_no31 = choice[71]
        result[i].ch2_no32 = choice[72]
        result[i].ch2_no33 = choice[73]
        result[i].ch2_no34 = choice[74]
        result[i].ch2_no35 = choice[75]
        result[i].ch2_no36 = choice[76]
        result[i].ch2_no37 = choice[77]
        result[i].ch2_no38 = choice[78]
        result[i].ch2_no39 = choice[79]
        result[i].ch2_no40 = choice[80]
        result[i].ch2_no41 = choice[81]
        result[i].ch2_no42 = choice[82]
        result[i].ch2_no43 = choice[83]
        result[i].ch2_no44 = choice[84]
        result[i].ch2_no45 = choice[85]
        result[i].ch2_no46 = choice[86]
        choice = []
      }
      setData({ ...data, datas: result })
    }
  }
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
              open && classes.menuButtonHidden,
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
          <Grid container spacing={3}>
            {/* รับวันที่ */}
            <InputDate date={date} setDate={setDate} onSubmit={onSubmit} />
          </Grid>

          <Box pt={4}>
            {stat.status === 500 || stat.status === 501 ? (
              <Modal status={stat.status} link={url} />
            ) : (
              <Table date={data} />
            )}
          </Box>
        </Container>
      </main>
    </div>
  )
}
