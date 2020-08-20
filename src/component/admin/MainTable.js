import React, { useState } from 'react'

import Box from '@material-ui/core/Box'

import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'

import Table from '../../component/admin/TableMain'
import InputDate from '../../component/admin/InputDate'
import '../../index.css'
import get from '../../service/getTable'
import Modal from '../../component/admin/Modals'


export default function Dashboard() {

  var today = new Date()
  var dd = String(today.getDate()).padStart(2, '0')
  var mm = String(today.getMonth() + 1).padStart(2, '0') //January is 0!
  var yyyy = today.getFullYear()

  today = yyyy + '-' + mm + '-' + dd

  const [date, setDate] = useState({
    startdate: '2020-01-01',
    enddate: today,
  })
 

  const [data, setData] = useState({ datas: [] })
  const [stat, setStatus] = useState({
    status: 200,
    fetch: true,
    text: 'ok',
  })
  const url =
    'https://job-match.ocsc.go.th/api/answersheets/' +
    date.startdate +
    '/' +
    date.enddate
  const onSubmit = async () => {
    const result = await get(date.startdate, date.enddate)
    const newStatus = stat

    if (result === 404) {
      newStatus.status = 404
      newStatus.text = 'หาไม่พบ'
      setData({ ...data, datas: [] })
      setStatus(newStatus)
    }
    if (result === 500) {
      newStatus.status = 500
      newStatus.text = 'โปรแกรมผิดพลาด'
      setStatus(newStatus)
    }
    if (result === 999) {
      newStatus.status = 999
      newStatus.text = 'เกิดความผิดพลาด'
      setStatus(newStatus)
    }
    if (result !== 404 || result !== 500 || result !== 501) {
      for (var i in result) {
        if (result[i].gndr) {
          result[i].gndr = 'ชาย'
        } else {
          result[i].gndr = 'หญิง'
        }
      }
      // eslint-disable-next-line
      for (var i in result) {
        var choice = []
        for (var s = 0; s < result[i].ans.length; s++) {
          choice.push(result[i].ans.charAt(s))
        }
        result[i].ch1_no1 = choice[0]
        result[i].ch1_no2 = choice[1]
        result[i].ch1_no3 = choice[2]
        result[i].ch1_no4 = choice[3]
        result[i].ch1_no5 = choice[4]
        result[i].ch1_no6 = choice[5]
        result[i].ch1_no7 = choice[6]
        result[i].ch1_no8 = choice[7]
        result[i].ch1_no9 = choice[8]
        result[i].ch1_no10 = choice[9]
        result[i].ch1_no11 = choice[10]
        result[i].ch1_no12 = choice[11]
        result[i].ch1_no13 = choice[12]
        result[i].ch1_no14 = choice[13]
        result[i].ch1_no15 = choice[14]
        result[i].ch1_no16 = choice[15]
        result[i].ch1_no17 = choice[16]
        result[i].ch1_no18 = choice[17]
        result[i].ch1_no19 = choice[18]
        result[i].ch1_no20 = choice[19]
        result[i].ch1_no21 = choice[20]
        result[i].ch1_no22 = choice[21]
        result[i].ch1_no23 = choice[22]
        result[i].ch1_no24 = choice[23]
        result[i].ch1_no25 = choice[24]
        result[i].ch1_no26 = choice[25]
        result[i].ch1_no27 = choice[26]
        result[i].ch1_no28 = choice[27]
        result[i].ch1_no29 = choice[28]
        result[i].ch1_no30 = choice[29]
        result[i].ch1_no31 = choice[30]
        result[i].ch1_no32 = choice[31]
        result[i].ch1_no33 = choice[32]
        result[i].ch1_no34 = choice[33]
        result[i].ch1_no35 = choice[34]
        result[i].ch1_no36 = choice[35]
        result[i].ch1_no37 = choice[36]
        result[i].ch1_no38 = choice[37]
        result[i].ch1_no39 = choice[38]
        result[i].ch1_no40 = choice[39]
        result[i].ch1_no41 = choice[40]
        result[i].ch2_no1 = choice[41]
        result[i].ch2_no2 = choice[42]
        result[i].ch2_no3 = choice[43]
        result[i].ch2_no4 = choice[44]
        result[i].ch2_no5 = choice[45]
        result[i].ch2_no6 = choice[46]
        result[i].ch2_no7 = choice[47]
        result[i].ch2_no8 = choice[48]
        result[i].ch2_no9 = choice[49]
        result[i].ch2_no10 = choice[50]
        result[i].ch2_no11 = choice[51]
        result[i].ch2_no12 = choice[52]
        result[i].ch2_no13 = choice[53]
        result[i].ch2_no14 = choice[54]
        result[i].ch2_no15 = choice[55]
        result[i].ch2_no16 = choice[56]
        result[i].ch2_no17 = choice[57]
        result[i].ch2_no18 = choice[58]
        result[i].ch2_no19 = choice[59]
        result[i].ch2_no20 = choice[60]
        result[i].ch2_no21 = choice[61]
        result[i].ch2_no22 = choice[62]
        result[i].ch2_no23 = choice[63]
        result[i].ch2_no24 = choice[64]
        result[i].ch2_no25 = choice[65]
        result[i].ch2_no26 = choice[66]
        result[i].ch2_no27 = choice[67]
        result[i].ch2_no28 = choice[68]
        result[i].ch2_no29 = choice[69]
        result[i].ch2_no30 = choice[70]
        result[i].ch2_no31 = choice[71]
        result[i].ch2_no32 = choice[72]
        result[i].ch2_no33 = choice[73]
        result[i].ch2_no34 = choice[74]
        result[i].ch2_no35 = choice[75]
        result[i].ch2_no36 = choice[76]
        result[i].ch2_no37 = choice[77]
        result[i].ch2_no38 = choice[78]
        result[i].ch2_no39 = choice[79]
        result[i].ch2_no40 = choice[80]
        result[i].ch2_no41 = choice[81]
        result[i].ch2_no42 = choice[82]
        result[i].ch2_no43 = choice[83]
        result[i].ch2_no44 = choice[84]
        result[i].ch2_no45 = choice[85]
        result[i].ch2_no46 = choice[86]
        choice = []
      }
      setData({ ...data, datas: result })
    }
  }
  return (
 
        <Container >
          <Grid container spacing={3}>
            {/* รับวันที่ */}
            <InputDate date={date} setDate={setDate} onSubmit={onSubmit} />
          </Grid>

          <Box pt={4}>
            {stat.status === 500 || stat.status === 501 ? (
              <Modal status={stat.status} link={url} />
            ) : (
              <Table date={data} />
            )}
          </Box>
        </Container>

  )
}
