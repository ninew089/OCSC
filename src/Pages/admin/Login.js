import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField'
import Paper from '@material-ui/core/Paper'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import BackgroundHeader from '../../pic/001-02.png'
import { makeStyles } from '@material-ui/core/styles'
import '../../index.css'
import logo from '../../pic/ocsc-logo_7.png'
import { Redirect } from 'react-router'
import post from '../../service/postlogin'
import Alert from '@material-ui/lab/Alert'
const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: 'url(' + BackgroundHeader + ')',
    backgroundRepeat: 'no-repeat',

    backgroundColor:
      theme.palette.type === 'light'
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}))

export default function Information() {
  // post id ,user name >> get response success get token >>save token in http header, fail return false
  const classes = useStyles()
  //const [information, setInformation] = useState(Data);
  const [loginId, setLogin] = useState({
    user: '',
    password: '',
    authen: false,
  })
  function getCookie(name) {
    var nameEQ = name + '='
    var ca = document.cookie.split(';')
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i]
      while (c.charAt(0) === ' ') c = c.substring(1, c.length)
      if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length)
    }
    return null
  }
  function spu_createCookie(name, value, hours) {
    if (hours) {
      var date = new Date()
      date.setTime(date.getTime() + hours * 60 * 60 * 1000)
      var expires = '; expires=' + date.toGMTString()
    } else {
      // eslint-disable-next-line
      var expires = ''
    }

    document.cookie = name + '=' + value + expires + '; '
  }

  const loginbotton = {
    width: '-webkit-fill-available',
    height: '40px',
    color: 'white',

    background: 'royalblue',
    border: 'hidden',
    borderradius: '4px',
  }
  const [stat, setStatus] = React.useState('')
  const onLogin = async () => {
    const result = await post({ Pwd: loginId.password }, loginId.user)

    if (result === 404) {
      setStatus({ stat: 404, fetch: true, text: 'ไม่มีรหัสผู้ใช้' })
    }

    if (result === 401) {
      setStatus({
        stat: 401,
        fetch: false,
        text: 'รหัสผ่านไม่ถูกต้อง',
      })
    }
    if (result === 'NotAuthorized') {
      setStatus({
        stat: 401,
        fetch: false,
        text: 'NotAuthorized',
      })
    }
    if (result === 500) {
      setStatus({ stat: 500, fetch: false, text: 'ความผิดพลาดของโปรแกรม' })
    }
    if (result === 999) {
      setStatus({ stat: 999, fetch: false, text: 'เกิดความผิดพลาด' })
    }
    if (
      (result !== 404) |
      (result !== 401) |
      (result !== 500) |
      (result !== 999)
    ) {
      if (result.token !== null || result.token !== undefined) {
        spu_createCookie('uid', result.uid, 3)

        if (getCookie('uid') === loginId.user) {
          spu_createCookie('token', result.token, 3)

          setStatus({ stat: 200, fetch: true, text: 'ok' })
        } else {
        }
      }
    }
  }

  return (
    <Grid
      container
      position="center"
      justify="center"
      alignContent="center"
      component="main"
      className={classes.root}
    >
      <Grid
        item
        position="center"
        xs={12}
        sm={8}
        md={5}
        component={Paper}
        elevation={8}
      >
        <div className={classes.paper}>
          <Box mt={5}>
            <img src={logo} width={300} alt="logo" />
          </Box>

          <h2>ระบบประเมินความสนใจของบุคคลที่มีต่อหน่วยงานราชการไทย</h2>

          <form className={classes.form}>
            {stat.stat === 404 ? (
              <Alert severity="error">
                <p>{stat.text}</p>
              </Alert>
            ) : (
              ''
            )}
            {stat.fetch === false ? (
              <Alert severity="error">
                <p>รหัสผ่านไม่ถูกต้อง</p>
              </Alert>
            ) : (
              ''
            )}

            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              id="username"
              label={<p>รหัสผู้ใช้</p>}
              name="username"
              autoComplete="username"
              autoFocus
              onChange={(e) => setLogin({ ...loginId, user: e.target.value })}
            />
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              name="password"
              label={<p>รหัสผ่าน</p>}
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={(e) =>
                setLogin({ ...loginId, password: e.target.value })
              }
            />
          </form>

          <button onClick={onLogin} style={loginbotton}>
            <p>ลงชื่อเข้าใช้ระบบ</p>
          </button>
          {getCookie('token') !== null ? (
            <div>
              <Redirect push to="/admin/dash" />
            </div>
          ) : (
            ''
          )}
        </div>
      </Grid>
    </Grid>
  )
}
