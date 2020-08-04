import React, { Fragment } from "react";

import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import FindInPageIcon from "@material-ui/icons/FindInPage";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));

function KeyboardDatePickerExample({ date, setDate, onSubmit }) {
  const classes = useStyles();

  return (
    <Fragment>
      <Container maxWidth="lg">
        <Grid container spacing={1}>
          {/* Chart */}
          <Grid item xs={4} md={4} lg={4}>
            <form className={classes.container} noValidate>
              <TextField
                id="startdate"
                label="วันที่เริ่มต้น"
                type="date"
                name="startdate"
                className={classes.textField}
                InputLabelProps={{
                  shrink: true,
                }}
                onChange={(e) =>
                  setDate({
                    ...date,
                    startdate: e.target.value,
                  })
                }
              />
            </form>
          </Grid>

          <Grid item xs={3} md={3} lg={3}>
            <form className={classes.container} noValidate>
              <TextField
                id="enddate"
                label="วันที่สิ้นสุด"
                name="enddate"
                type="date"
                className={classes.textField}
                InputLabelProps={{
                  shrink: true,
                }}
                onChange={(e) =>
                  setDate({
                    ...date,
                    enddate: e.target.value,
                  })
                }
              />
            </form>
          </Grid>
          <Grid
            item
            xs={4}
            md={4}
            lg={4}
            alignContent="center"
            justify="center"
          >
            <Button variant="outlined" color="primary" onClick={onSubmit}>
              <FindInPageIcon />
              <p>ค้นหาข้อมูล</p>
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Fragment>
  );
}

export default KeyboardDatePickerExample;
