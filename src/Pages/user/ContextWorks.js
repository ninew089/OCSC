import React, { useEffect } from 'react'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import Questionaire1 from '../../component/user/Questionaire1'
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'
import checkData from '../../Data/questionData'
import Snackbar from '@material-ui/core/Snackbar'
import Alert from '@material-ui/lab/Alert'

const useStyles = makeStyles((theme) => ({}))
function Text() {
  const choice_check = []

  for (let i = 41; i < 87; i++) {
    if (checkData[i].value === '') {
      choice_check.push(i - 40)
    }
  }

  const list = choice_check.map((number) => <h5>{number} </h5>)
  console.log(choice_check)
  return <Box style={{ width: '200px', textAlign: 'justify' }}>{list}</Box>
}

function SnackBar({ error, handleClose }) {
  const choice_check = []
  for (let i = 41; i < 87; i++) {
    if (checkData[i].value === '') {
      choice_check.push(i - 40)
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

export default function ContextWork({
  data,
  setValues2,
  summary,
  setSummary,
  content,
  setContent,
  data1,
  error,
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
        <h2>ตอนที่ 2 : ประเมินความสนใจของท่านที่มีต่อ</h2>
        <h2>บริบทการทำงาน</h2>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          spacing={1}
        >
          <div className={classes.root}>
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
              spacing={1}
            >
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
                        ข้อคำถามต่อไปนี้เป็นบริบทการทำงานของบุคคลมักต้องเจอในการทำงานตำแหน่ง/หน้าที่ต่างๆ
                        ขอให้ท่านเลือกหมายเลขที่ตรงกับ ลักษณะการทำงาน
                        <div className="strong2">
                          {' '}
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
                <Questionaire1
                  data1={data1}
                  content={content}
                  setContent={setContent}
                  data={data}
                  setValues2={setValues2}
                  summary={summary}
                  setSummary={setSummary}
                />
              </Grid>
            </Grid>
          </div>
        </Grid>
      </Grid>
    </Container>
  )
}
