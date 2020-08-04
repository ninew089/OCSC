import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import educationData from "../../Data/educationData";
import majorData from "../../Data/majorData";

// สร้างstyle
const useStyles = makeStyles((theme) => ({
  formControl: {
    minWidth: 320,
    "& input": {
      fontFamily: "Prompt",
    },
    "& label": {
      fontFamily: "Prompt",
    },
  },
}));

export default function SimpleSelect({ data, setEducations }) {
  const classes = useStyles();
  const { educate, majorName } = data;
  const options = educationData.map((option) => {
    const firstLetter = option.education[0].toUpperCase();
    return {
      firstLetter: /[0-9]/.test(firstLetter) ? "0-9" : firstLetter,
      ...option,
    };
  });
  const options_major = majorData.map((option) => {
    const firstLetter = option.major[0].toUpperCase();
    return {
      firstLetter: /[0-9]/.test(firstLetter) ? "0-9" : firstLetter,
      ...option,
    };
  });

  return (
    <Fragment>
      <h1>ประวัติการศึกษา</h1>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        spacing={1}
      >
        <div className={classes.formControl}>
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            spacing={1}
          >
            <Grid item md={12} xs={12}>
              <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
                padding="2"
              >
                <Autocomplete
                  value={educate}
                  onChange={(e, value) =>
                    setEducations({ ...data, educate: value })
                  }
                  options={options.sort(
                    (ก, อ) => -อ.firstLetter.localeCompare(ก.firstLetter)
                  )}
                  groupBy={(option) => option.firstLetter}
                  getOptionLabel={(option) => option.education}
                  fullWidth
                  id="auto-complete"
                  autoComplete
                  includeInputInList
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="ระดับการศึกษา"
                      margin="normal"
                    />
                  )}
                />
              </Grid>
            </Grid>
            <Grid item md={12} xs={12}>
              <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
                padding="2"
              >
                <Autocomplete
                  value={majorName}
                  onChange={(e, value) =>
                    setEducations({ ...data, majorName: value })
                  }
                  options={options_major.sort(
                    (ก, อ) => -อ.firstLetter.localeCompare(ก.firstLetter)
                  )}
                  groupBy={(option) => option.firstLetter}
                  getOptionLabel={(option) => option.major}
                  fullWidth
                  id="auto-complete"
                  autoComplete
                  includeInputInList
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="สาขาวิชาที่สำเร็จการศึกษา/กำลังศึกษาอยู่"
                      margin="normal"
                    />
                  )}
                />
              </Grid>
            </Grid>
          </Grid>
        </div>
      </Grid>
    </Fragment>
  );
}
