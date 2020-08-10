import React, { Fragment } from 'react'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import FormControl from '@material-ui/core/FormControl'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormLabel from '@material-ui/core/FormLabel'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormHelperText from '@material-ui/core/FormHelperText'

import '../../Css/Information.css'

const useStyles = makeStyles((theme) => ({
  root: {
    '& input': {
      backgroundColor: '#F5F5F5',
      fontFamily: 'Prompt',
    },
    '& label': {
      fontFamily: 'Prompt',
    },
  },
  formControl: {
    alignContent: 'left',
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
    fontFamily: 'Prompt',
    '& legend': {
      fontFamily: 'Prompt',
    },
  },
  TextFieldControl: {
    marginLeft: theme.spacing(1),
    fontFamily: 'Prompt',
  },
  formControlTitle: {
    margin: theme.spacing(1),
    minWidth: 140,
    fontFamily: 'Prompt',
  },
  formGender: {
    fontFamily: 'Prompt',
    '& legend': {
      fontFamily: 'Prompt',
    },
    '& label': {
      fontFamily: 'Prompt',
    },
  },
}))

export default function Information({
  data,
  setInformation,
  validateTitle,
  error,
  setError,
}) {
  const classes = useStyles()

  const { firstName, lastName, age, idCard, title, gender } = data

  return (
    <Fragment>
      <h1>ข้อมูลส่วนบุคคล</h1>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        spacing={1}
      >
        <div>
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            spacing={1}
          >
            <Grid item md={12} xs={12}>
              {/* คำนำหน้าชื่อ */}

              {error.titleError === undefined || error.titleError === true ? (
                <TextField
                  id="title"
                  name="title"
                  label="คำนำหน้า"
                  margin="normal"
                  fullWidth
                  className={classes.root}
                  variant="filled"
                  value={title}
                  onChange={(e) =>
                    setInformation({ ...data, title: e.target.value })
                  }
                />
              ) : (
                <div>
                  <TextField
                    id="title"
                    name="title"
                    label="คำนำหน้า"
                    margin="normal"
                    fullWidth
                    className={classes.root}
                    variant="filled"
                    value={title}
                    onChange={(e) =>
                      setInformation({ ...data, title: e.target.value })
                    }
                    error
                  />
                  <FormHelperText
                    id="component-error-text"
                    error
                    className={classes.formGender}
                  >
                    กรอกคำนำหน้าชื่อ
                  </FormHelperText>
                </div>
              )}
            </Grid>
            <Grid item md={12} xs={12}>
              {/* ชื่อ */}
              {error.firstError === undefined || error.firstError === true ? (
                <TextField
                  id="firstName"
                  name="firstName"
                  label="ชื่อ"
                  margin="normal"
                  variant="filled"
                  fullWidth
                  className={classes.root}
                  value={firstName}
                  onChange={(e) =>
                    setInformation({ ...data, firstName: e.target.value })
                  }
                />
              ) : (
                <div>
                  <TextField
                    id="firstName"
                    name="firstName"
                    label="ชื่อ"
                    margin="normal"
                    variant="filled"
                    fullWidth
                    className={classes.root}
                    value={firstName}
                    onChange={(e) =>
                      setInformation({ ...data, firstName: e.target.value })
                    }
                    error
                  />
                  <FormHelperText
                    id="component-error-text"
                    error
                    className={classes.formGender}
                  >
                    กรอกชื่อ
                  </FormHelperText>
                </div>
              )}
            </Grid>
            <Grid item md={12} xs={12}>
              {/* นามสกุล */}
              {error.lastError === undefined || error.lastError === true ? (
                <TextField
                  id="lastName"
                  name="lastName"
                  label="นามสกุล"
                  margin="normal"
                  variant="filled"
                  fullWidth
                  className={classes.root}
                  value={lastName}
                  onChange={(e) =>
                    setInformation({ ...data, lastName: e.target.value })
                  }
                />
              ) : (
                <div>
                  <TextField
                    id="lastName"
                    name="lastName"
                    label="นามสกุล"
                    margin="normal"
                    variant="filled"
                    fullWidth
                    className={classes.root}
                    value={lastName}
                    onChange={(e) =>
                      setInformation({ ...data, lastName: e.target.value })
                    }
                    error
                  />
                  <FormHelperText
                    id="component-error-text"
                    error
                    className={classes.formGender}
                  >
                    กรอกนามสกุล
                  </FormHelperText>
                </div>
              )}
            </Grid>
          </Grid>

          <Grid container direction="row" spacing={1}>
            <Grid item md={12} xs={12}>
              <Grid item md={12} xs={12}>
                {/* เพศ */}
                <Grid
                  container
                  direction="row"
                  justify="flex-start"
                  alignItems="flex-start"
                  padding="2"
                >
                  <Grid container padding="2">
                    <FormLabel
                      component="legend"
                      className={classes.formGender}
                    >
                      เพศ
                    </FormLabel>
                  </Grid>
                  <FormControl
                    component="fieldset"
                    className={classes.formGender}
                  >
                    <RadioGroup
                      row
                      aria-label="gender"
                      name="gender1"
                      value={gender}
                      onChange={(e) => {
                        setInformation({ ...data, gender: e.target.value })
                      }}
                    >
                      <FormControlLabel
                        value="ชาย"
                        control={<Radio color="primary" />}
                        label={<p>ชาย</p>}
                        className={classes.formGender}
                      />
                      <FormControlLabel
                        value="หญิง"
                        control={<Radio color="primary" />}
                        label={<p>หญิง</p>}
                        className={classes.formGender}
                      />
                    </RadioGroup>
                    {error.genderError === undefined ||
                    error.firstError === true ? (
                      ''
                    ) : (
                      <FormHelperText
                        id="component-error-text"
                        error
                        className={classes.formGender}
                      >
                        เลือกเพศ
                      </FormHelperText>
                    )}
                  </FormControl>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid container direction="row" spacing={1}>
            <Grid item md={12} xs={12}>
              <Grid item md={12} xs={12}>
                {/* อายุ */}
                {error.ageError === undefined || error.ageError === true ? (
                  <TextField
                    fullWidth
                    id="age"
                    label="อายุ(ปี)"
                    name="age"
                    margin="normal"
                    variant="filled"
                    type="number"
                    className={classes.root}
                    value={age}
                    onChange={(e) =>
                      setInformation({ ...data, age: e.target.value })
                    }
                  />
                ) : (
                  <div>
                    <TextField
                      fullWidth
                      id="age"
                      label="อายุ(ปี)"
                      name="age"
                      margin="normal"
                      variant="filled"
                      type="number"
                      className={classes.root}
                      value={age}
                      onChange={(e) =>
                        setInformation({ ...data, age: e.target.value })
                      }
                      error
                    />
                    <FormHelperText
                      id="component-error-text"
                      error
                      className={classes.formGender}
                    >
                      กรอกอายุ
                    </FormHelperText>
                  </div>
                )}
              </Grid>
            </Grid>
          </Grid>
          <Grid container direction="row" spacing={1}>
            <Grid item md={12} xs={12}>
              <Grid item md={12} xs={12}>
                {/* เลขบัตรประจำตัวประชาชน*/}
                {error.idError === undefined || error.idError === true ? (
                  <TextField
                    fullWidth
                    id="idCard"
                    name="idCard"
                    label="เลขประจำตัวประชาชน 13 หลัก"
                    margin="normal"
                    type="number"
                    variant="filled"
                    className={classes.root}
                    value={idCard}
                    onChange={(e) =>
                      setInformation({ ...data, idCard: e.target.value })
                    }
                  />
                ) : (
                  <div>
                    <TextField
                      fullWidth
                      id="idCard"
                      name="idCard"
                      label="เลขประจำตัวประชาชน 13 หลัก"
                      margin="normal"
                      type="number"
                      variant="filled"
                      className={classes.root}
                      value={idCard}
                      onChange={(e) =>
                        setInformation({ ...data, idCard: e.target.value })
                      }
                      error
                    />
                    <FormHelperText
                      id="component-error-text"
                      error
                      className={classes.formGender}
                    >
                      กรอกเลขบัตรประจำตัวประชาชน 13 หลัก
                    </FormHelperText>
                  </div>
                )}
              </Grid>
            </Grid>
          </Grid>
        </div>
      </Grid>
    </Fragment>
  )
}
