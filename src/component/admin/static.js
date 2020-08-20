

import React, { useState } from 'react'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles'

import Box from '@material-ui/core/Box'

import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'

import Paper from '@material-ui/core/Paper'
import AgeChart from '../../Chart/AgeChart'
import EducationChart from '../../Chart/EduChart'
import BrChart from '../../Chart/BrChart'
import InputDate from '../../component/admin/InputDate'
import GndrChart from '../../Chart/GndrChart'
import '../../index.css'
import get from '../../service/getStatic'
import Modal from '../../component/admin/Modals'

import jsPDF from 'jspdf'
import html2canvas from 'html2canvas'
import CloudDownloadOutlinedIcon from '@material-ui/icons/CloudDownloadOutlined'
import domtoimage from 'dom-to-image'
import Button from '@material-ui/core/Button'

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

  const fixedHeightPaper = clsx(classes.paper, classes.appBarSpacer)
  var today = new Date()
  var dd = String(today.getDate()).padStart(2, '0')
  var mm = String(today.getMonth() + 1).padStart(2, '0') //January is 0!
  var yyyy = today.getFullYear()

  today =  yyyy + '-'+mm +'-'+ dd 

  const [date, setDate] = useState({
    startdate: '2020-01-01',
    enddate: today,
  })
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
  })
  const [stat, setStatus] = useState({
    status: 200,
    fetch: true,
    text: 'ok',
  })
  const onSubmit = async () => {
    const result = await get(date.startdate, date.enddate)
    const newStatus = stat

    if (result === 404) {
      newStatus.status = 404
      newStatus.text = 'หาไม่พบ'
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
      const newArray = statistic
      newArray.gender = result.gndr
      newArray.age = result.age
      newArray.education = result.edu
      newArray.major = result.maj
      setStatistic(newArray)
      setStatistic({ ...statistic })
    }
  }
  const url =
    'https://cubioinfo.com/aptitude-test/api/statistics/' +
    date.startdate +
    '/' +
    date.enddate
  const loadFont = (url) => {
    var xhr = new XMLHttpRequest()
    xhr.open('GET', url, true)
    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4 && xhr.status === 200) {
        let css = xhr.responseText
        css = css.replace(/}/g, 'font-display: swap; }')

        const head = document.getElementsByTagName('head')[0]
        const style = document.createElement('style')
        style.appendChild(document.createTextNode(css))
        head.appendChild(style)
      }
    }
    xhr.send()
  }
  return (

        <Container maxWidth="lg" className={classes.container}>
          <InputDate date={date} setDate={setDate} onSubmit={onSubmit} />
          {loadFont(
        'https://fonts.googleapis.com/css2?family=Prompt:wght@300&display=swap',
      )}
          <Grid
            container
            xs={12}
            direction="row"
            justify="flex-end"
            alignItems="center"
          >
            <Button
              style={{
                background: 'none',
              }}
              alignItems="left"
              onClick={() => {
                const input = document.getElementById('page')
                html2canvas(input).then((canvas) => {
                  // eslint-disable-next-line
                  const imgData = canvas.toDataURL('image/png')
                  const pdf = new jsPDF()
                  const scale = 3
                  const style = {
                    transform: 'scale(' + scale + ')',
                    transformOrigin: 'top left',
                    width: input.offsetWidth + 'px',
                    height: input.offsetHeight + 'px',
                  }
                  const param = {
                    height: input.offsetHeight * scale,
                    width: input.offsetWidth * scale,
                    quality: 1,
                    style,
                  }
                  if (pdf) {
                    domtoimage.toPng(input, param).then((imgData) => {
                      setTimeout(function () {
                        pdf.addImage(imgData, 'PNG', 35, 10, 140, 270)
                        window.open(pdf.output('bloburl'), '_blank')
                        pdf.save('รายงานผลสถิติแบบประเมิน.pdf')
                      }, 950)
                    })
                  }
                })
              }}
              className={classes.button}
            >
              <CloudDownloadOutlinedIcon
                style={{ color: 'slategray', fontSize: '40px' }}
              />
            </Button>
          </Grid>

          <div id="page">
            <h3>รายงานผลสถิติแบบประเมิน ประจำวันที่ {date.startdate} ถึงวันที่ { date.enddate}</h3>
            {stat.status === 404 ||
            stat.status === 500 ||
            stat.status === 501 ? (
              <Modal status={stat.status} link={url} />
            ) : (
              ''
            )}
            {stat.status === 999 ? (
              <Modal
                status={' failed to fetch'}
                link={
                  'Something happened in setting up the request and triggered an Error'
                }
              />
            ) : (
              ''
            )}
            <Grid container spacing={1}>
              {/* Chart */}
              <Grid item xs={12}>
                <Paper>
                  <Box p={2}>
                    {stat.status === 404 ||
                    stat.status === 500 ||
                    stat.status === 501 ? (
                      ''
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
                      ''
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
                      ''
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
                    ''
                  ) : (
                    <BrChart br={statistic} />
                  )}
                </Box>
              </Paper>
            </Box>
          </div>
        </Container>

  )
}
