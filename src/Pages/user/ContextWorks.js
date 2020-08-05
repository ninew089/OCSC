import React, { useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Questionaire1 from "../../component/user/Questionaire1";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({}));

export default function ContextWork({
  data,
  setValues2,
  summary,
  setSummary,
  content,
  setContent,
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
        <h2>ตอนที่ 2 : ประเมินความสนใจของท่านที่มีต่อ</h2>
        <h2>บริบทการทำงาน</h2>
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
                        ข้อคำถามต่อไปนี้เป็นบริบทการทำงานของบุคคลมักต้องเจอในการทำงานตำแหน่ง/หน้าที่ต่างๆ
                        ขอให้ท่านเลือกหมายเลขที่ตรงกับ ลักษณะการทำงาน
                        <div className="strong2">
                          {" "}
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
                <Questionaire1
                  data1={data1}
                  content={content}
                  setContent={setContent}
                  data={data}
                  setValues2={setValues2}
                  summary={summary}
                  setSummary={setSummary}
                />
              </Grid>
            </Grid>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
}
