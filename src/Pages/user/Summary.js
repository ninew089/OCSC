import React, { useRef, useEffect, useState } from 'react'
import jsPDF from 'jspdf'
import html2canvas from 'html2canvas'
import DescriptionIcon from '@material-ui/icons/Description'

import domtoimage from 'dom-to-image'
import Button from '@material-ui/core/Button'

import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'

import { useReactToPrint } from 'react-to-print'
import PrintIcon from '@material-ui/icons/Print'
import ContentChart from '../../Chart/ContentChart'
import SummaryChart from '../../Chart/SummaryChart'
import ActiveChart from '../../Chart/ActiveCharts'

import DataActive from '../../Data/DimensionActive'
import DataContext from '../../Data/DimensionContent'
import ans1 from '../../Data/questionData'

import add from '../../service/add'

import Modal from '../../component/user/Modals'
import { Helmet } from 'react-helmet'

import '../../Css/Work.css'

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}))

export default function Summary(props) {
  const classes = useStyles()
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
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  //get IPadress
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

  const ip = getCookie('ip')

  const componentRef = useRef()

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  })
  const {
    name,
    lastName,
    cardID,
    titles,
    age,
    gender,
    major,
    edu,
    active,
    content,
    testId,
  } = props
  // answer
  const Ans = [
    ans1[0].value + 1,
    ans1[1].value + 1,
    ans1[2].value + 1,
    ans1[3].value + 1,
    ans1[4].value + 1,
    ans1[5].value + 1,
    ans1[6].value + 1,
    ans1[7].value + 1,
    ans1[8].value + 1,
    ans1[9].value + 1,
    ans1[10].value + 1,
    ans1[11].value + 1,
    ans1[12].value + 1,
    ans1[13].value + 1,
    ans1[14].value + 1,
    ans1[15].value + 1,
    ans1[16].value + 1,
    ans1[17].value + 1,
    ans1[18].value + 1,
    ans1[19].value + 1,
    ans1[20].value + 1,
    ans1[21].value + 1,
    ans1[22].value + 1,
    ans1[23].value + 1,
    ans1[24].value + 1,
    ans1[25].value + 1,
    ans1[26].value + 1,
    ans1[27].value + 1,
    ans1[28].value + 1,
    ans1[29].value + 1,
    ans1[30].value + 1,
    ans1[31].value + 1,
    ans1[32].value + 1,
    ans1[33].value + 1,
    ans1[34].value + 1,
    ans1[35].value + 1,
    ans1[36].value + 1,
    ans1[37].value + 1,
    ans1[38].value + 1,
    ans1[39].value + 1,
    ans1[40].value + 1,
    ans1[41].value + 1,
    ans1[42].value + 1,
    ans1[43].value + 1,
    ans1[44].value + 1,
    ans1[45].value + 1,
    ans1[46].value + 1,
    ans1[47].value + 1,
    ans1[48].value + 1,
    ans1[49].value + 1,
    ans1[50].value + 1,
    ans1[51].value + 1,
    ans1[52].value + 1,
    ans1[53].value + 1,
    ans1[54].value + 1,
    ans1[55].value + 1,
    ans1[56].value + 1,
    ans1[57].value + 1,
    ans1[58].value + 1,
    ans1[59].value + 1,
    ans1[60].value + 1,
    ans1[61].value + 1,
    ans1[62].value + 1,
    ans1[63].value + 1,
    ans1[64].value + 1,
    ans1[65].value + 1,
    ans1[66].value + 1,
    ans1[67].value + 1,
    ans1[68].value + 1,
    ans1[69].value + 1,
    ans1[70].value + 1,
    ans1[71].value + 1,
    ans1[72].value + 1,
    ans1[73].value + 1,
    ans1[74].value + 1,
    ans1[75].value + 1,
    ans1[76].value + 1,
    ans1[77].value + 1,
    ans1[78].value + 1,
    ans1[79].value + 1,
    ans1[80].value + 1,
    ans1[81].value + 1,
    ans1[82].value + 1,
    ans1[83].value + 1,
    ans1[84].value + 1,
    ans1[85].value + 1,
    ans1[86].value + 1,
  ]

  // dimension
  const Dim = [
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
  ]

  // component
  const Com = [
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    2,
    2,
    2,
    2,
    2,
    2,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    4,
    4,
    4,
    4,
    4,
    5,
    5,
    5,
    5,
    5,
    6,
    6,
    6,
    6,
    7,
    7,
    7,
    8,
    8,
    9,
    9,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    2,
    2,
    2,
    2,
    2,
    3,
    3,
    3,
    3,
    3,
    3,
    4,
    4,
    4,
    4,
    4,
    4,
    4,
    4,
    5,
    5,
    5,
    5,
    6,
    6,
    6,
    6,
    6,
    7,
    7,
    7,
    7,
    8,
    8,
    8,
    9,
    9,
  ]

  // mean & standard deviation (1)
  const Mean1 = [4.68, 3.81, 4.25, 2.96, 3.85, 3.36, 3.79, 3.9, 4.05]
  const Std1 = [0.25, 0.15, 0.14, 0.37, 0.35, 0.28, 0.38, 0.31, 0.31]

  // mean & standard deviation (2)
  const Mean2 = [4.69, 5.2, 2.72, 4.71, 5.7, 3.22, 3.38, 4.44, 3.82]
  const Std2 = [0.19, 0.14, 0.46, 0.19, 0.32, 0.43, 0.3, 0.27, 0.32]

  // standard score (1)
  const D1 = [
    [-0.96, -0.6, -1.4, 0.47, -0.41, -0.01, -0.21, -0.37, -0.33],
    [0.47, 0.46, 0.56, 0.38, 0.16, 0.58, 0.13, 0.19, -0.04],
    [1.38, 0.95, 1.54, -0.51, 0.46, 0.01, -0.26, -0.16, 0.1],
    [-0.74, -0.04, 0.02, -0.11, 0.04, 0.07, 0.09, -0.39, 0.04],
    [0.03, -0.49, 0.77, -1.02, -0.61, -1.06, -0.57, -0.09, -0.68],
    [-0.03, -0.81, 0.93, -0.52, -0.65, -0.93, -0.89, -0.56, -0.84],
    [0.54, 0.15, -0.09, -0.76, -0.73, -1.02, -0.84, -1.28, -1.01],
    [0.54, -0.39, 1.01, 0.4, 0.35, 1.14, 0.3, 0.53, 0.67],
    [-0.81, -1.77, -2.2, -1.93, -1.64, -2.1, -1.23, -0.92, -1.67],
    [0.69, 1.12, -0.13, -0.25, -0.11, 0.32, -0.6, -0.05, 0.03],
    [-1.11, -0.8, -0.28, -1.24, 0.0, -0.63, 0.36, -0.23, -0.4],
    [-0.67, 1.12, -0.13, 0.25, 0.11, 0.32, -0.6, -0.05, 0.03],
    [-0.86, -0.43, 1.2, 1.86, 0.7, 1.88, 1.28, 0.35, 0.66],
    [-0.48, 0.43, -0.19, 0.51, -0.18, 0.3, -0.09, 0.83, 0.64],
    [0.42, 0.04, -0.09, 1.03, 0.24, 1.24, 0.29, 0.06, -0.1],
    [-0.36, -0.03, -1.25, 0.26, -0.46, -0.48, -0.95, -0.94, -0.36],
    [2.96, 2.96, 0.66, -1.9, 3.36, -1.36, 3.21, 3.42, 3.2],
    [-0.87, -0.45, -1.19, 0.21, -0.58, 0.5, -0.16, -0.27, 0.17],
  ]

  // standard score (2)
  const D2 = [
    [-0.75, -0.92, -1.05, -1.64, 0.17, -0.24, -1.0, -2.01, -0.94],
    [-0.23, -1.37, -0.08, -1.33, -0.67, -0.01, -0.25, -0.26, -0.16],
    [0.74, 0.21, -1.02, 0.17, 0.61, -0.66, -0.35, 0.09, 0.4],
    [1.44, 0.52, -0.19, 0.25, 0.14, -0.72, 1.58, -0.3, -0.68],
    [-0.13, 0.7, -1.54, 0.55, 0.34, -0.66, -0.8, -0.63, -0.53],
    [0.55, 0.35, -0.33, -0.77, 0.39, -0.34, -0.2, -1.11, -1.25],
    [-0.12, 0.02, 1.15, 0.03, 0.7, 0.1, 0.79, 1.76, 0.26],
    [-0.02, 0.36, -0.35, -0.44, -0.14, 0.01, 0.42, -0.19, -0.74],
    [1.3, -0.67, -1.77, 2.48, 0.21, -0.54, -0.62, -0.45, -0.67],
    [-0.88, -1.62, -0.06, -0.93, 0.03, 0.15, -0.82, 1.75, 0.94],
    [0.04, 0.43, -0.09, 1.16, 0.62, -0.36, 1.68, 0.51, -1.13],
    [-0.81, 0.53, 0.45, -0.34, -0.12, 0.16, -0.09, -1.19, -0.7],
    [0.13, 0.91, 1.46, 1.56, -0.12, 1.62, 0.28, 0.69, 1.4],
    [-1.17, -0.45, 0.71, 0.28, 0.43, 1.27, 1.73, -0.13, 0.04],
    [-0.94, -1.06, 1.54, -0.17, 0.24, 1.95, -0.4, 1.0, 0.76],
    [-1.34, -0.7, -0.27, -0.46, 0.93, 0.52, -1.2, 1.15, 0.84],
    [2.48, 2.65, -0.13, -0.32, -3.71, -2.56, -1.61, -0.42, 2.55],
    [-0.28, 0.1, 1.56, -0.1, -0.04, 0.31, 0.84, -0.26, -0.37],
  ]

  let i
  // คะแนนดิบ (1 & 2)
  let x11 = 0
  let x12 = 0
  let x13 = 0
  let x14 = 0
  let x15 = 0
  let x16 = 0
  let x17 = 0
  let x18 = 0
  let x19 = 0
  let x21 = 0
  let x22 = 0
  let x23 = 0
  let x24 = 0
  let x25 = 0
  let x26 = 0
  let x27 = 0
  let x28 = 0
  let x29 = 0

  // จำนวนข้อ (1 & 2)
  let n11 = 0
  let n12 = 0
  let n13 = 0
  let n14 = 0
  let n15 = 0
  let n16 = 0
  let n17 = 0
  let n18 = 0
  let n19 = 0

  let n21 = 0
  let n22 = 0
  let n23 = 0
  let n24 = 0
  let n25 = 0
  let n26 = 0
  let n27 = 0
  let n28 = 0
  let n29 = 0

  // ระดับความเหมาะสม (1 & 2)

  for (i = 0; i < Ans.length; i++) {
    if (Dim[i] === 1) {
      if (Com[i] === 1) {
        x11 += Ans[i]
        n11 += 1
      }
      if (Com[i] === 2) {
        x12 += Ans[i]
        n12 += 1
      }
      if (Com[i] === 3) {
        x13 += Ans[i]
        n13 += 1
      }
      if (Com[i] === 4) {
        x14 += Ans[i]
        n14 += 1
      }
      if (Com[i] === 5) {
        x15 += Ans[i]
        n15 += 1
      }
      if (Com[i] === 6) {
        x16 += Ans[i]
        n16 += 1
      }
      if (Com[i] === 7) {
        x17 += Ans[i]
        n17 += 1
      }
      if (Com[i] === 8) {
        x18 += Ans[i]
        n18 += 1
      }
      if (Com[i] === 9) {
        x19 += Ans[i]
        n19 += 1
      }
    }

    if (Dim[i] === 2) {
      if (Com[i] === 1) {
        x21 += Ans[i]
        n21 += 1
      }
      if (Com[i] === 2) {
        x22 += Ans[i]
        n22 += 1
      }
      if (Com[i] === 3) {
        x23 += Ans[i]
        n23 += 1
      }
      if (Com[i] === 4) {
        x24 += Ans[i]
        n24 += 1
      }
      if (Com[i] === 5) {
        x25 += Ans[i]
        n25 += 1
      }
      if (Com[i] === 6) {
        x26 += Ans[i]
        n26 += 1
      }
      if (Com[i] === 7) {
        x27 += Ans[i]
        n27 += 1
      }
      if (Com[i] === 8) {
        x28 += Ans[i]
        n28 += 1
      }
      if (Com[i] === 9) {
        x29 += Ans[i]
        n29 += 1
      }
    }
  }

  x11 = x11 / n11
  x12 = x12 / n12
  x13 = x13 / n13
  x14 = x14 / n14
  x15 = x15 / n15
  x16 = x16 / n16
  x17 = x17 / n17
  x18 = x18 / n18
  x19 = x19 / n19

  x21 = x21 / n21
  x22 = x22 / n22
  x23 = x23 / n23
  x24 = x24 / n24
  x25 = x25 / n25
  x26 = x26 / n26
  x27 = x27 / n27
  x28 = x28 / n28
  x29 = x29 / n29

  // คะแนนมาตรฐาน (1 & 2)
  let z11,
    z12,
    z13,
    z14,
    z15,
    z16,
    z17,
    z18,
    z19 = 0
  let z21,
    z22,
    z23,
    z24,
    z25,
    z26,
    z27,
    z28,
    z29 = 0

  z11 = (x11 - Mean1[0]) / Std1[0]
  z12 = (x12 - Mean1[1]) / Std1[1]
  z13 = (x13 - Mean1[2]) / Std1[2]
  z14 = (x14 - Mean1[3]) / Std1[3]
  z15 = (x15 - Mean1[4]) / Std1[4]
  z16 = (x16 - Mean1[5]) / Std1[5]
  z17 = (x17 - Mean1[6]) / Std1[6]
  z18 = (x18 - Mean1[7]) / Std1[7]
  z19 = (x19 - Mean1[8]) / Std1[8]

  z21 = (x21 - Mean2[0]) / Std2[0]
  z22 = (x22 - Mean2[1]) / Std2[1]
  z23 = (x23 - Mean2[2]) / Std2[2]
  z24 = (x24 - Mean2[3]) / Std2[3]
  z25 = (x25 - Mean2[4]) / Std2[4]
  z26 = (x26 - Mean2[5]) / Std2[5]
  z27 = (x27 - Mean2[6]) / Std2[6]
  z28 = (x28 - Mean2[7]) / Std2[7]
  z29 = (x29 - Mean2[8]) / Std2[8]

  let z1 =
    Math.pow(z11, 2) +
    Math.pow(z12, 2) +
    Math.pow(z13, 2) +
    Math.pow(z14, 2) +
    Math.pow(z15, 2) +
    Math.pow(z16, 2) +
    Math.pow(z17, 2) +
    Math.pow(z18, 2) +
    Math.pow(z19, 2)
  let z2 =
    Math.pow(z21, 2) +
    Math.pow(z22, 2) +
    Math.pow(z23, 2) +
    Math.pow(z24, 2) +
    Math.pow(z25, 2) +
    Math.pow(z26, 2) +
    Math.pow(z27, 2) +
    Math.pow(z28, 2) +
    Math.pow(z29, 2)

  let r1 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  let r2 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  let r3 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

  for (i = 0; i < 18; i++) {
    // ส่วนต่าง (1 & 2)
    let d11,
      d12,
      d13,
      d14,
      d15,
      d16,
      d17,
      d18,
      d19 = 0
    let d21,
      d22,
      d23,
      d24,
      d25,
      d26,
      d27,
      d28,
      d29 = 0

    d11 = z11 - D1[i][0]
    d12 = z12 - D1[i][1]
    d13 = z13 - D1[i][2]
    d14 = z14 - D1[i][3]
    d15 = z15 - D1[i][4]
    d16 = z16 - D1[i][5]
    d17 = z17 - D1[i][6]
    d18 = z18 - D1[i][7]
    d19 = z19 - D1[i][8]

    d21 = z21 - D2[i][0]
    d22 = z22 - D2[i][1]
    d23 = z23 - D2[i][2]
    d24 = z24 - D2[i][3]
    d25 = z25 - D2[i][4]
    d26 = z26 - D2[i][5]
    d27 = z27 - D2[i][6]
    d28 = z28 - D2[i][7]
    d29 = z29 - D2[i][8]

    let d1 =
      Math.pow(d11, 2) +
      Math.pow(d12, 2) +
      Math.pow(d13, 2) +
      Math.pow(d14, 2) +
      Math.pow(d15, 2) +
      Math.pow(d16, 2) +
      Math.pow(d17, 2) +
      Math.pow(d18, 2) +
      Math.pow(d19, 2)
    let d2 =
      Math.pow(d21, 2) +
      Math.pow(d22, 2) +
      Math.pow(d23, 2) +
      Math.pow(d24, 2) +
      Math.pow(d25, 2) +
      Math.pow(d26, 2) +
      Math.pow(d27, 2) +
      Math.pow(d28, 2) +
      Math.pow(d29, 2)

    r1[i] = (8.343 + z1 - d1) / (8.343 + z1 + d1)
    r2[i] = (8.343 + z2 - d2) / (8.343 + z2 + d2)
    r3[i] = (r1[i] + r2[i]) / 2

    r1[i] = r1[i].toFixed(3)
    r2[i] = r2[i].toFixed(3)
    r3[i] = r3[i].toFixed(3)
  }

  const summary1 = [
    {
      activity: r1[0],
      context: r2[0],
      mean: r3[0],
    },
    {
      activity: r1[1],
      context: r2[1],
      mean: r3[1],
    },
    {
      activity: r1[2],
      context: r2[2],
      mean: r3[2],
    },
    {
      activity: r1[3],
      context: r2[3],
      mean: r3[3],
    },
    {
      activity: r1[4],
      context: r2[4],
      mean: r3[4],
    },
    {
      activity: r1[5],
      context: r2[5],
      mean: r3[5],
    },
    {
      activity: r1[6],
      context: r2[6],
      mean: r3[6],
    },
    {
      activity: r1[7],
      context: r2[7],
      mean: r3[7],
    },
    {
      activity: r1[8],
      context: r2[8],
      mean: r3[8],
    },
    {
      activity: r1[9],
      context: r2[9],
      mean: r3[9],
    },
    {
      activity: r1[10],
      context: r2[10],
      mean: r3[10],
    },
    {
      activity: r1[11],
      context: r2[11],
      mean: r3[11],
    },
    {
      activity: r1[12],
      context: r2[12],
      mean: r3[12],
    },
    {
      activity: r1[13],
      context: r2[13],
      mean: r3[13],
    },
    {
      activity: r1[14],
      context: r2[14],
      mean: r3[14],
    },
    {
      activity: r1[15],
      context: r2[15],
      mean: r3[15],
    },
    {
      activity: r1[16],
      context: r2[16],
      mean: r3[16],
    },
    {
      activity: r1[17],
      context: r2[17],
      mean: r3[17],
    },
  ]

  function genderTF(gender) {
    if (gender === 'ชาย') {
      return true
    } else {
      return false
    }
  }

  // eslint-disable-next-line
  const summary = {
    ipAddr: ip,
    TestId: testId,
    Tit: titles,
    Fname: name,
    Lname: lastName,
    CitzId: cardID,
    Age: parseInt(age),
    Gndr: genderTF(gender),
    EduId: edu,
    BrId: major,
    D1x1: parseFloat(DataActive[0].d0),
    D1x2: parseFloat(DataActive[1].d0),
    D1x3: parseFloat(DataActive[2].d0),
    D1x4: parseFloat(DataActive[3].d0),
    D1x5: parseFloat(DataActive[4].d0),
    D1x6: parseFloat(DataActive[5].d0),
    D1x7: parseFloat(DataActive[6].d0),
    D1x8: parseFloat(DataActive[7].d0),
    D1x9: parseFloat(DataActive[8].d0),
    D2x1: parseFloat(DataContext[0].d0),
    D2x2: parseFloat(DataContext[1].d0),
    D2x3: parseFloat(DataContext[2].d0),
    D2x4: parseFloat(DataContext[3].d0),
    D2x5: parseFloat(DataContext[4].d0),
    D2x6: parseFloat(DataContext[5].d0),
    D2x7: parseFloat(DataContext[6].d0),
    D2x8: parseFloat(DataContext[7].d0),
    D2x9: parseFloat(DataContext[8].d0),
    D1r1: parseFloat(summary1[0].activity),
    D1r2: parseFloat(summary1[1].activity),
    D1r3: parseFloat(summary1[2].activity),
    D1r4: parseFloat(summary1[3].activity),
    D1r5: parseFloat(summary1[4].activity),
    D1r6: parseFloat(summary1[5].activity),
    D1r7: parseFloat(summary1[6].activity),
    D1r8: parseFloat(summary1[7].activity),
    D1r9: parseFloat(summary1[8].activity),
    D1r10: parseFloat(summary1[9].activity),
    D1r11: parseFloat(summary1[10].activity),
    D1r12: parseFloat(summary1[11].activity),
    D1r13: parseFloat(summary1[12].activity),
    D1r14: parseFloat(summary1[13].activity),
    D1r15: parseFloat(summary1[14].activity),
    D1r16: parseFloat(summary1[15].activity),
    D1r17: parseFloat(summary1[16].activity),
    D1r18: parseFloat(summary1[17].activity),
    D2r1: parseFloat(summary1[0].context),
    D2r2: parseFloat(summary1[1].context),
    D2r3: parseFloat(summary1[2].context),
    D2r4: parseFloat(summary1[3].context),
    D2r5: parseFloat(summary1[4].context),
    D2r6: parseFloat(summary1[5].context),
    D2r7: parseFloat(summary1[6].context),
    D2r8: parseFloat(summary1[7].context),
    D2r9: parseFloat(summary1[8].context),
    D2r10: parseFloat(summary1[9].context),
    D2r11: parseFloat(summary1[10].context),
    D2r12: parseFloat(summary1[11].context),
    D2r13: parseFloat(summary1[12].context),
    D2r14: parseFloat(summary1[13].context),
    D2r15: parseFloat(summary1[14].context),
    D2r16: parseFloat(summary1[15].context),
    D2r17: parseFloat(summary1[16].context),
    D2r18: parseFloat(summary1[17].context),
    Ans:
      String(ans1[0].value + 1) +
      String(ans1[1].value + 1) +
      String(ans1[2].value + 1) +
      String(ans1[3].value + 1) +
      String(ans1[4].value + 1) +
      String(ans1[5].value + 1) +
      String(ans1[6].value + 1) +
      String(ans1[7].value + 1) +
      String(ans1[8].value + 1) +
      String(ans1[9].value + 1) +
      String(ans1[10].value + 1) +
      String(ans1[11].value + 1) +
      String(ans1[12].value + 1) +
      String(ans1[13].value + 1) +
      String(ans1[14].value + 1) +
      String(ans1[15].value + 1) +
      String(ans1[16].value + 1) +
      String(ans1[17].value + 1) +
      String(ans1[18].value + 1) +
      String(ans1[19].value + 1) +
      String(ans1[20].value + 1) +
      String(ans1[21].value + 1) +
      String(ans1[22].value + 1) +
      String(ans1[23].value + 1) +
      String(ans1[24].value + 1) +
      String(ans1[25].value + 1) +
      String(ans1[26].value + 1) +
      String(ans1[27].value + 1) +
      String(ans1[28].value + 1) +
      String(ans1[29].value + 1) +
      String(ans1[30].value + 1) +
      String(ans1[31].value + 1) +
      String(ans1[32].value + 1) +
      String(ans1[33].value + 1) +
      String(ans1[34].value + 1) +
      String(ans1[35].value + 1) +
      String(ans1[36].value + 1) +
      String(ans1[37].value + 1) +
      String(ans1[38].value + 1) +
      String(ans1[39].value + 1) +
      String(ans1[40].value + 1) +
      String(ans1[41].value + 1) +
      String(ans1[42].value + 1) +
      String(ans1[43].value + 1) +
      String(ans1[44].value + 1) +
      String(ans1[45].value + 1) +
      String(ans1[46].value + 1) +
      String(ans1[47].value + 1) +
      String(ans1[48].value + 1) +
      String(ans1[49].value + 1) +
      String(ans1[50].value + 1) +
      String(ans1[51].value + 1) +
      String(ans1[52].value + 1) +
      String(ans1[53].value + 1) +
      String(ans1[54].value + 1) +
      String(ans1[55].value + 1) +
      String(ans1[56].value + 1) +
      String(ans1[57].value + 1) +
      String(ans1[58].value + 1) +
      String(ans1[59].value + 1) +
      String(ans1[60].value + 1) +
      String(ans1[61].value + 1) +
      String(ans1[62].value + 1) +
      String(ans1[63].value + 1) +
      String(ans1[64].value + 1) +
      String(ans1[65].value + 1) +
      String(ans1[66].value + 1) +
      String(ans1[67].value + 1) +
      String(ans1[68].value + 1) +
      String(ans1[69].value + 1) +
      String(ans1[70].value + 1) +
      String(ans1[71].value + 1) +
      String(ans1[72].value + 1) +
      String(ans1[73].value + 1) +
      String(ans1[74].value + 1) +
      String(ans1[75].value + 1) +
      String(ans1[76].value + 1) +
      String(ans1[77].value + 1) +
      String(ans1[78].value + 1) +
      String(ans1[79].value + 1) +
      String(ans1[80].value + 1) +
      String(ans1[81].value + 1) +
      String(ans1[82].value + 1) +
      String(ans1[83].value + 1) +
      String(ans1[84].value + 1) +
      String(ans1[85].value + 1) +
      String(ans1[86].value + 1),
    Avg1: parseFloat(summary1[0].mean),
    Avg2: parseFloat(summary1[1].mean),
    Avg3: parseFloat(summary1[2].mean),
    Avg4: parseFloat(summary1[3].mean),
    Avg5: parseFloat(summary1[4].mean),
    Avg6: parseFloat(summary1[5].mean),
    Avg7: parseFloat(summary1[6].mean),
    Avg8: parseFloat(summary1[7].mean),
    Avg9: parseFloat(summary1[8].mean),
    Avg10: parseFloat(summary1[9].mean),
    Avg11: parseFloat(summary1[10].mean),
    Avg12: parseFloat(summary1[11].mean),
    Avg13: parseFloat(summary1[12].mean),
    Avg14: parseFloat(summary1[13].mean),
    Avg15: parseFloat(summary1[14].mean),
    Avg16: parseFloat(summary1[15].mean),
    Avg17: parseFloat(summary1[16].mean),
    Avg18: parseFloat(summary1[17].mean),
  }

  const [test1, setTest1] = useState({
    users: [],
    isFetching: false,
  })
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await add(summary)
        setTest1({
          users: response,
          isFetching: true,
          status: response,
        })
      } catch (response) {
        console.log(response.status)
        setTest1({
          users: test1.users,
          isFetching: false,
          status: response,
        })
      }
    }
    fetchUsers()
    // eslint-disable-next-line
  }, [])

  return (
    <Container maxWidth="sm" alignItems="center">
      <div>
        <Helmet>
          <title>ผลการทำแบบประเมิน</title>
        </Helmet>
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
              id="page"
            >
              <Grid item md={12} xs={12}>
                {test1.status === 404 ||
                test1.status === 500 ||
                test1.status === 501 ? (
                  <Modal
                    status={test1.status}
                    link={
                      'https://job-match.ocsc.go.th/api/post/answersheets/1'
                    }
                  />
                ) : (
                  ''
                )}

                <Grid>
                  <Container fixed alignItems="center" ref={componentRef}>
                    <div>
                      <div alignItems="center">
                        <div className="title">
                          ผลประเมินความสนใจที่มีต่อหน่วยงานราชการ
                        </div>{' '}
                        <h4>
                          ชื่อ {titles}
                          {name} นามสกุล {lastName}
                        </h4>
                      </div>
                      <div className="radar">
                        <h3>คะแนนความชอบในมิติกิจกรรมการทำงาน</h3>
                        <ActiveChart active={active} />
                      </div>

                      <div className="radar">
                        <h3>คะแนนความชอบในมิติบริบทการทำงาน</h3>
                        <ContentChart content={content} />
                      </div>

                      <div className="pagebreak"></div>

                      <div className="radar">
                        <h3>ผลการประเมินความสนใจของบุคคลที่มีต่อราชการไทย</h3>
                        <SummaryChart summary1={summary1} />
                      </div>
                      <div className="info">
                        &nbsp; &nbsp; &nbsp;ผลที่แสดงเป็นเพียงส่วนหนึ่ง
                        เพื่อประกอบการพิจารณาเพื่อเลือกงานที่สนใจทั้งนี้
                        ควรศึกษาหาข้อมูลเพิ่มเติมเพื่อประกอบการตัดสินใจ
                      </div>

                      <div className="pagebreak"></div>
                    </div>
                  </Container>
                </Grid>
              </Grid>
            </Grid>
            <Grid container direction="row" spacing={1}>
              {loadFont(
                'https://fonts.googleapis.com/css2?family=Prompt:wght@300&display=swap',
              )}
              <Grid
                container
                spacing={4}
                direction="row"
                justify="center"
                alignItems="center"
              >
                <Grid item>
                  {/Android/i.test(navigator.userAgent) &&
                  window.screen.width <= 800 ? (
                    <Button
                      style={{
                        borderRadius: '120px',
                        background: 'cornflowerblue',
                        height: '40px',
                        color: 'local',
                      }}
                      alignItems="left"
                      onClick={handlePrint}
                      className={classes.button}
                    >
                      <PrintIcon style={{ color: 'ghostwhite' }} />
                      <div
                        className="button"
                        id="gcpPrint"
                        style={{ color: 'ghostwhite' }}
                      >
                        &nbsp; พิมพ์ผลการประเมิน
                      </div>
                    </Button>
                  ) : (
                    <Button
                      style={{
                        borderRadius: '120px',
                        background: 'cornflowerblue',
                        height: '40px',
                        color: 'local',
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
                              if (/Chrome/i.test(navigator.userAgent)) {
                                pdf.addImage(imgData, 'PNG', 35, 10, 140, 270)
                                window
                                  .open(pdf.output('bloburl'), '_blank')
                                  .print()
                              } else {
                                handlePrint()
                              }
                            })
                          }
                        })
                      }}
                      className={classes.button}
                    >
                      <PrintIcon style={{ color: 'ghostwhite' }} />
                      <div
                        className="button"
                        id="gcpPrint"
                        style={{ color: 'ghostwhite' }}
                      >
                        &nbsp; พิมพ์ผลการประเมิน
                      </div>
                    </Button>
                  )}

                  <Button
                    style={{
                      borderRadius: '120px',
                      background: 'lightcoral',
                      height: '40px',
                      color: 'local',
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
                            let link = document.createElement('a')
                            link.download = 'ผลประเมิน.png'
                            link.href = imgData
                          })
                        }
                      })
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
                            let link = document.createElement('a')
                            link.download = 'ผลประเมิน.png'
                            link.href = imgData

                            // To save manually somewhere in file explorer
                          })
                        }
                      })
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
                            if (
                              /Safari/.test(navigator.userAgent) &&
                              /Apple Computer/.test(navigator.vendor) &&
                              !/Mobi|Android/i.test(navigator.userAgent)
                            ) {
                              domtoimage.toPng(input, param).then((imgData) => {
                                setTimeout(function () {
                                  pdf.addImage(imgData, 'PNG', 35, 10, 140, 270)
                                  window.open(pdf.output('bloburl'), '_blank')
                                  pdf.save('ผลการประเมิน.pdf')
                                }, 950)
                              })
                            }
                            if (
                              /Chrome/i.test(navigator.userAgent) &&
                              /Google Inc/.test(navigator.vendor) &&
                              window.screen.width > 800
                            ) {
                              domtoimage.toPng(input, param).then((imgData) => {
                                setTimeout(function () {
                                  pdf.addImage(imgData, 'PNG', 35, 10, 140, 270)
                                  window.open(pdf.output('bloburl'), '_blank')
                                  pdf.save('ผลการประเมิน.pdf')
                                }, 950)
                              })
                            }
                            if (/iPad/i.test(navigator.userAgent)) {
                              setTimeout(function () {
                                let link = document.createElement('a')
                                link.download = 'ผลประเมิน.png'
                                link.href = imgData
                                link.click()
                                window.saveAs(imgData, 'ผลประเมิน.png')
                              }, 7000)
                            }
                            if (
                              /Android/i.test(navigator.userAgent) &&
                              window.screen.width <= 800
                            ) {
                              setTimeout(function () {
                                let link = document.createElement('a')
                                link.download = 'ผลประเมิน.png'
                                link.href = imgData
                                link.click()
                                window.saveAs(imgData, 'ผลประเมิน.png')
                              }, 7000)
                            } else {
                              if (
                                !(
                                  /Safari/.test(navigator.userAgent) &&
                                  /Apple Computer/.test(navigator.vendor) &&
                                  !/Mobi|Android/i.test(navigator.userAgent)
                                )
                              ) {
                                if (!/Chrome/i.test(navigator.userAgent)) {
                                  setTimeout(function () {
                                    let link = document.createElement('a')
                                    link.download = 'ผลประเมิน.png'
                                    link.href = imgData
                                    link.click()
                                    window.saveAs(imgData, 'ผลประเมิน.png')
                                  }, 7000)
                                }
                              }
                            }
                          })
                        }
                      })
                    }}
                    className={classes.button}
                  >
                    <DescriptionIcon style={{ color: 'ghostwhite' }} />
                    <div className="button" style={{ color: 'ghostwhite' }}>
                      &nbsp; บันทึกไฟล์
                    </div>
                  </Button>

                  <div>
                    <center>
                      <h5>
                        &nbsp; ถ้าไม่สามารถ บันทึกไฟล์ ได้ ขอให้ capture
                        หน้าจอไว้
                      </h5>
                    </center>
                  </div>
                </Grid>
              </Grid>
            </Grid>
          </div>
        </Grid>
      </div>
    </Container>
  )
}
