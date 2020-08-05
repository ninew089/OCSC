import React, { useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Questionaire from "../../component/user/Questionaire";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import "../../Css/Work.css";

const useStyles = makeStyles((theme) => ({}));

export default function ActivityWork({
  data,
  setValues,
  summary,
  setSummary,
  active,
  setActive,
  data1,
}) {
  const classes = useStyles();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Container maxWidth="sm" alignItems="center">
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        spacing={1}
      >
        <h2>ตอนที่ 1 : ประเมินความสนใจของท่านที่มีต่อ</h2>
        <h2>กิจกรรมการทำงาน</h2>
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
                      <h4>
                        ข้อคำถามต่อไปนี้เป็นกิจกรรมที่บุคคลมักต้องเจอในการทำงานตำแหน่ง/หน้าที่ต่างๆ
                        ขอให้ท่านเลือกหมายเลขที่ตรงกับ
                        ระดับความยาก/ความซับซ้อนของง่าน (job demand)
                        <div className="strong2">
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
                <Questionaire
                  data={data}
                  data1={data1}
                  setValues={setValues}
                  summary={summary}
                  setSummary={setSummary}
                  active={active}
                  setActive={setActive}
                />
              </Grid>
            </Grid>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
}
