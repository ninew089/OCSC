import React from 'react'
import FormControl from '@material-ui/core/FormControl'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import Question from './Question'
export default function RadioButtons({
  data,
  setValues2,
  summary,
  setSummary,
  content,
  setContent,
  data1,
}) {
  function getPoint(id) {
    var point
    point = id + 1.0
    return point
  }

  function X1_1() {
    var sum, x
    sum =
      getPoint(data[41].value) +
      getPoint(data[42].value) +
      getPoint(data[43].value) +
      getPoint(data[44].value) +
      getPoint(data[45].value) +
      getPoint(data[46].value) +
      getPoint(data[47].value) +
      getPoint(data[48].value) +
      getPoint(data[49].value)
    x = sum / 9

    return x
  }

  function X2_1() {
    var sum, x
    sum =
      getPoint(data[50].value) +
      getPoint(data[51].value) +
      getPoint(data[52].value) +
      getPoint(data[53].value) +
      getPoint(data[54].value)
    x = sum / 5

    return x
  }
  function X3_1() {
    var sum, x
    sum =
      getPoint(data[55].value) +
      getPoint(data[56].value) +
      getPoint(data[57].value) +
      getPoint(data[58].value) +
      getPoint(data[59].value) +
      getPoint(data[60].value)
    x = sum / 6

    return x
  }
  function X4_1() {
    var sum, x
    sum =
      getPoint(data[61].value) +
      getPoint(data[62].value) +
      getPoint(data[63].value) +
      getPoint(data[64].value) +
      getPoint(data[65].value) +
      getPoint(data[66].value) +
      getPoint(data[67].value) +
      getPoint(data[68].value)

    x = sum / 8

    return x
  }
  function X5_1() {
    var sum, x
    sum =
      getPoint(data[69].value) +
      getPoint(data[70].value) +
      getPoint(data[71].value) +
      getPoint(data[72].value)

    x = sum / 4

    return x
  }
  function X6_1() {
    var sum, x
    sum =
      getPoint(data[73].value) +
      getPoint(data[74].value) +
      getPoint(data[75].value) +
      getPoint(data[76].value) +
      getPoint(data[77].value)

    x = sum / 5

    return x
  }
  function X7_1() {
    var sum, x
    sum =
      getPoint(data[78].value) +
      getPoint(data[79].value) +
      getPoint(data[80].value) +
      getPoint(data[81].value)
    x = sum / 4

    return x
  }
  function X8_1() {
    var sum, x
    sum =
      getPoint(data[82].value) +
      getPoint(data[83].value) +
      getPoint(data[84].value)

    x = sum / 3

    return x
  }
  function X9_1() {
    var sum, x
    sum = getPoint(data[85].value) + getPoint(data[86].value)
    x = sum / 2

    return x
  }

  const handleChange = (value, index) => {
    const newArray = [...data]
    newArray[index].value = value

    newArray[index].value = value

    const newContent = [...content]
    newContent[0].d0 = X1_1().toFixed(2)
    newContent[1].d0 = X2_1().toFixed(2)
    newContent[2].d0 = X3_1().toFixed(2)
    newContent[3].d0 = X4_1().toFixed(2)
    newContent[4].d0 = X5_1().toFixed(2)
    newContent[5].d0 = X6_1().toFixed(2)
    newContent[6].d0 = X7_1().toFixed(2)
    newContent[7].d0 = X8_1().toFixed(2)
    newContent[8].d0 = X9_1().toFixed(2)
    setContent(newContent)

    setValues2(newArray)
  }

  const renderQuestions = () => {
    // eslint-disable-next-line
    return data1.users.map((question, index) => {
      if (question.dim === 2) {
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
        )
      }
    })
  }
  return (
    <div>
      <Box bgcolor="background.paper" spacing={10}>
        <FormControl component="fieldset">{renderQuestions()}</FormControl>
      </Box>
    </div>
  )
}
