import React from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  label: {
    margin: 0,
  },
}));

export default function RadioButtons(props) {
  const {
    sub1,
    sub2,
    header,
    description,
    handleChange,
    index,
    value,
    no,
    dim,
  } = props;
  const classes = useStyles();
  const renderRadio = [0, 1, 2, 3, 4, 5, 6].map((point, currentindex) => {
    return (
      <FormControlLabel
        key={currentindex}
        value={point + 1}
        checked={currentindex === value}
        onClick={(e) => handleChange(point, index)}
        control={<Radio color="primary" style={{ padding: "6px" }} />}
        label={point + 1}
        className={classes.label}
        labelPlacement="top"
      />
    );
  });

  return (
    <div>
      <Box bgcolor="background.paper" spacing={2} justifyContent="center">
        <FormControl component="fieldset">
          <Grid
            container
            justifyContent="center"
            alignContent="center"
            style={{ padding: " 10px" }}
          >
            <Grid
              container
              justifyContent="center"
              alignContent="center"
            >
              {dim === 2 ? (
                <h3 align="left">
                  &nbsp; {no}.&nbsp;{header}
                </h3>
              ) : (
                <h3 align="left">
                  &nbsp; {no}.&nbsp;{description}
                </h3>
              )}
            </Grid>
            <Grid container xs={6} justify="flex-start" alignItems="center">
              <h5>
                <div className="leftfloat">{sub1}</div>
              </h5>
            </Grid>
            <Grid container xs={6} justify="flex-end" alignItems="center">
              <h5>
                <div className="rightfloat">{sub2}</div>
              </h5>
            </Grid>

            <Grid
              container
              justifyContent="center"
              alignContent="center"
            >
              <div className="cen">
                <RadioGroup row aria-label="ch1" name="ch1">
                  <Box justifyContent="center" alignContent="center" maxWidth>
                    {renderRadio}
                  </Box>
                </RadioGroup>
              </div>
            </Grid>
          </Grid>
        </FormControl>
      </Box>
    </div>
  );
}
