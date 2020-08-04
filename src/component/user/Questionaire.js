import React from "react";
import FormControl from "@material-ui/core/FormControl";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Question from "./Question";

export default function RadioButtons({
  data,
  setValues,
  summary,
  setSummary,
  active,
  setActive,
  data1,
}) {
  function getPoint(id) {
    var point;
    point = id + 1.0;
    return point;
  }
  function X1() {
    var sum, x;
    sum =
      getPoint(data[0].value) +
      getPoint(data[1].value) +
      getPoint(data[2].value) +
      getPoint(data[3].value) +
      getPoint(data[4].value) +
      getPoint(data[5].value) +
      getPoint(data[6].value);
    x = sum / 7;

    return x;
  }

  function X2() {
    var sum, x;
    sum =
      getPoint(data[7].value) +
      getPoint(data[8].value) +
      getPoint(data[9].value) +
      getPoint(data[10].value) +
      getPoint(data[11].value) +
      getPoint(data[12].value);
    x = sum / 6;

    return x;
  }
  function X3() {
    var sum, x;
    sum =
      getPoint(data[13].value) +
      getPoint(data[14].value) +
      getPoint(data[15].value) +
      getPoint(data[16].value) +
      getPoint(data[17].value) +
      getPoint(data[18].value) +
      getPoint(data[19].value);
    x = sum / 7;

    return x;
  }
  function X4() {
    var sum, x;
    sum =
      getPoint(data[20].value) +
      getPoint(data[21].value) +
      getPoint(data[22].value) +
      getPoint(data[23].value) +
      getPoint(data[24].value);

    x = sum / 5;

    return x;
  }
  function X5() {
    var sum, x;
    sum =
      getPoint(data[25].value) +
      getPoint(data[26].value) +
      getPoint(data[27].value) +
      getPoint(data[28].value) +
      getPoint(data[29].value);

    x = sum / 5;

    return x;
  }
  function X6() {
    var sum, x;
    sum =
      getPoint(data[30].value) +
      getPoint(data[31].value) +
      getPoint(data[32].value) +
      getPoint(data[33].value);

    x = sum / 4;

    return x;
  }
  function X7() {
    var sum, x;
    sum =
      getPoint(data[34].value) +
      getPoint(data[35].value) +
      getPoint(data[36].value);
    x = sum / 3;

    return x;
  }
  function X8() {
    var sum, x;
    sum = getPoint(data[37].value) + getPoint(data[38].value);

    x = sum / 2;

    return x;
  }
  function X9() {
    var sum, x;
    sum = getPoint(data[39].value) + getPoint(data[40].value);
    x = sum / 2;

    return x;
  }

  const handleChange = (value, index) => {
    const newArray = [...data];

    newArray[index].value = value;

    const newActive = [...active];
    newActive[0].d0 = X1().toFixed(2);
    newActive[1].d0 = X2().toFixed(2);
    newActive[2].d0 = X3().toFixed(2);
    newActive[3].d0 = X4().toFixed(2);
    newActive[4].d0 = X5().toFixed(2);
    newActive[5].d0 = X6().toFixed(2);
    newActive[6].d0 = X7().toFixed(2);
    newActive[7].d0 = X8().toFixed(2);
    newActive[8].d0 = X9().toFixed(2);

    setActive(newActive);

    setValues(newArray);
  };

  const renderQuestions = () => {
    // eslint-disable-next-line
    return data1.users.map((question, index) => {
      if (question.dim === 1) {
        return (
          <Grid container xs={12} key={index}>
            <Question
              index={index}
              no={question.no}
              value={data[index].value}
              header={question.q1}
              description={question.q2}
              sub1={question.s1}
              sub2={question.s2}
              dim={question.dim}
              handleChange={(e) => handleChange(e, index)}
            />
          </Grid>
        );
      }
    });
  };

  //
  return (
    <div>
      <Box bgcolor="background.paper" spacing={10}>
        <FormControl component="fieldset">{renderQuestions()}</FormControl>
      </Box>
    </div>
  );
}
