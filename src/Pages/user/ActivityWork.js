import React, { useEffect, useState } from 'react'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import Questionaire from '../../component/user/Questionaire'
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'
import '../../Css/Work.css'
import checkData from '../../Data/questionData'
import Snackbar from '@material-ui/core/Snackbar'
import Alert from '@material-ui/lab/Alert'
const useStyles = makeStyles((theme) => ({}))
function Text() {
  const choice_check = []
  const Text = ''
  for (let i = 0; i < 41; i++) {
    if (checkData[i].value === '') {
      choice_check.push(i + 1)
    }
  }
  const list = choice_check.map((number) => <h5>{number} </h5>)

  return <Box style={{ width: '200px', textAlign: 'justify' }}>{list}</Box>
}

function SnackBar({ error, handleClose, open }) {
  const choice_check = []
  for (let i = 0; i < 41; i++) {
    if (checkData[i].value === '') {
      choice_check.push(i + 1)
    }
  }
  const len = choice_check.length
  return (
    <div>
      {len === 0 ? (
        ''
      ) : (
        <Snackbar
          anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
          open={!error}
          autoHideDuration={3000}
        >
          <Alert severity="error">
            <p style={{ margin: '0px' }}>
              ท่านยังไม่ได้ทำการเลือก ในข้อดังต่อไปนี้
            </p>
            {Text()}
          </Alert>
        </Snackbar>
      )}
    </div>
  )
}

export default function ActivityWork({
  data,
  setValues,
  summary,
  setSummary,
  active,
  setActive,
  data1,
  error,
  setError,
}) {
  const classes = useStyles()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  const [open, setOpen] = React.useState(true)
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return
    }

    setOpen(false)
  }

  return (
    <Container maxWidth="sm" alignItems="center">
      {error === false ? SnackBar({ error, handleClose }) : ''}
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        spacing={1}
      >
        <h2>ตอนที่ 1 : ประเมินความสนใจของท่านที่มีต่อ</h2>
        <h2>กิจกรรมการทำงาน</h2>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          spacing={1}
        >
          <div className={classes.root}>
            <Grid container direction="row" justify="center" spacing={1}>
              <Grid item md={12} xs={12}>
                <Grid>
                  <Container fixed>
                    <Box
                      p={2}
                      bgcolor="background.paper"
                      boxShadow={3}
                      justifyContent="flex-start"
                      alignContent="flex-start"
                    >
                      <h3 text-align="initial">คำชี้เเจง :</h3>
                      <h4 style={{ fontWeight: '400' }}>
                        ข้อคำถามต่อไปนี้เป็นกิจกรรมที่บุคคลมักต้องเจอในการทำงานตำแหน่ง/หน้าที่ต่างๆ
                        ขอให้ท่านเลือกหมายเลขที่ตรงกับ
                        ระดับความยาก/ความซับซ้อนของงาน (job demand) &nbsp;
                        <div className="strong2">
                          ที่ท่านชอบหรืออยากทำมากที่สุด
                        </div>
                      </h4>
                    </Box>
                  </Container>
                </Grid>
              </Grid>
            </Grid>
            <Grid container direction="row" spacing={1}>
              <Grid item md={12} xs={12}>
                <Questionaire
                  data={data}
                  data1={data1}
                  setValues={setValues}
                  summary={summary}
                  setSummary={setSummary}
                  active={active}
                  setActive={setActive}
                />
              </Grid>
            </Grid>
          </div>
        </Grid>
      </Grid>
    </Container>
  )
}
