import React, { useEffect, useReducer } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";

import Information from "./Information";
import Education from "./Education";
import ActivityWork from "./ActivityWork";
import ContextWorks from "./ContextWorks";
import Summary from "./Summary";

import Data from "../../Data/questionData";

import DataTable from "../../Data/tableData";
import DataActive from "../../Data/DimensionActive";
import DataContent from "../../Data/DimensionContent";

import get from "../../service/get";
import getTest from "../../service/getTest";

import Modal from "../../component/user/Modals";

import "../../Css/Information.css";

const useStyles = makeStyles((theme) => ({
  root: {},
  backButton: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

function getSteps() {
  return [
    "ข้อมูลส่วนบุคคล",
    "ประวัติการศึกษา",
    "กิจกรรมการทำงาน",
    "บริบทการทำงาน",
    "ผลการประเมิน",
  ];
}

export default function HorizontalLabelPositionBelowStepper() {
  const classes = useStyles();

  // setStateReact
  const [information, setInformation] = React.useState({
    title: undefined,
    firstName: undefined,
    lastName: undefined,
    idCard: undefined,
    age: undefined,
    gender: undefined,
  });

  const [educations, setEducations] = React.useState({
    educate: undefined,
    majorName: undefined,
  });
  // const [active, setActive] = React.useState(DataCal);
  const [values, setValues] = React.useState(Data);

  //const [values2, setValues2] = React.useState(Data2);

  const [active, setActive] = React.useState(DataActive);

  const [content, setContent] = React.useState(DataContent);

  const [activeStep, setActiveStep] = React.useState(0);
  const [summary, setSummary] = React.useState(DataTable);

  const reducer = (state, payload) => ({ ...state, ...payload });
  const [data1, setData1] = useReducer(reducer, {
    users: [],
    isFetching: false,
    status: 404,
  });

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setData1({
          users: data1.users,
          isFetching: true,
          status: 200,
        });
        const response = await get();
        setData1({
          users: response,
          isFetching: true,
          status: response,
        });
      } catch (response) {
        setData1({
          users: data1.users,
          isFetching: false,
          status: response,
        });
      }
    };

    fetchUsers();
    // eslint-disable-next-line
  }, []);
  const [test1, setTest1] = useReducer(reducer, {
    users: [],
    isFetching: false,
  });
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setTest1({
          users: test1.users,
          isFetching: true,
          status: 200,
        });
        const response = await getTest();
        setTest1({
          users: response,
          isFetching: true,
          status: response,
        });
      } catch (response) {
        setTest1({
          users: test1.users,
          isFetching: false,
          status: response,
        });
      }
    };
    fetchUsers();
    // eslint-disable-next-line
  }, []);
  /*
  useEffect(() => {
    const fetchUsers = async () => {
      setTest1({
        users: test1.users,
        isFetching: true,
        status: 200,
      });
      const response = await getTest();
    
      if (response < 501) {
      }

      setTest1({ users: response, isFetching: false, status: response });
    };

    fetchUsers();
    // eslint-disable-next-line
  }, []);
  */
  // เกี่ยวกับ stepper
  const steps = getSteps();

  const handleNext = (activeStep) => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };
  const [error, setError] = React.useState({
    titleError: undefined,
    firstError: undefined,
    lastError: undefined,
    idError: undefined,
    ageError: undefined,
    genderError: undefined,
  });
  const newArray = { ...error };
  const handleStay = () => {
    if (!validateAge(information.age)) {
    }

    if (!validateTitle(information.title)) {
      newArray.titleError = false;
      // setError({ titleError: false });
    }
    if (!validateFirstName(information.firstName)) {
      newArray.firstError = false;
      // setError({ firstError: false });
    }
    if (!validateGender(information.gender)) {
      newArray.genderError = false;
      // setError({ firstError: false });
    }
    if (!validateLastName(information.lastName)) {
      newArray.lastError = false;
      // setError({ lastError: false });
    }

    if (!validateID(information.idCard)) {
      newArray.idError = false;
    }
    if (!validateAge(information.age)) {
      newArray.ageError = false;
    }
    if (validateTitle(information.title)) {
      newArray.titleError = true;
      // setError({ titleError: false });
    }
    if (validateFirstName(information.firstName)) {
      newArray.firstError = true;
      // setError({ firstError: false });
    }

    if (validateLastName(information.lastName)) {
      newArray.lastError = true;
      // setError({ lastError: false });
    }

    if (validateID(information.idCard)) {
      newArray.idError = true;
    }
    if (validateAge(information.age)) {
      newArray.ageError = true;
    }
    if (validateGender(information.gender)) {
      newArray.genderError = true;
    }
    setError(newArray);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
    newArray.titleError = true;
    newArray.firstError = true;
    newArray.lastError = true;
    newArray.idError = true;
    newArray.ageError = true;

    setError(newArray);
  };

  //  validate
  const validateID = (id) => {
    if (id === undefined || id === null) {
      return false;
    }

    // eslint-disable-next-line eqeqeq
    if (id.length != 13) {
      return false;
    }
    if (id.length === 13) {
      var i, sum;
      for (i = 0, sum = 0; i < 12; i++)
        sum += parseFloat(id.charAt(i)) * (13 - i);
      if ((11 - (sum % 11)) % 10 !== parseFloat(id.charAt(12))) {
        return false;
      }
      return true;
    }
  };

  const validateFirstName = (id) => {
    if (id === undefined || id === null || id === "") {
      return false;
    }
    if (id.length > 50) {
      return false;
    } else {
      return true;
    }
  };

  const validateLastName = (id) => {
    if (id === undefined || id === null || id === "") {
      return false;
    }
    if (id.length > 50) {
      return false;
    } else {
      return true;
    }
  };
  const validateTitle = (id) => {
    if (id === undefined || id === null || id === "") {
      return false;
    } else {
      return true;
    }
  };
  const validateGender = (id) => {
    if (id === undefined || id === null) {
      return false;
    } else {
      return true;
    }
  };
  const validateAge = (id) => {
    if (id === undefined || id === null) {
      return false;
    }
    if (id < 11) {
      return false;
    }
    if (id > 71) {
      return false;
    } else {
      return true;
    }
  };
  const validateEducate = (id) => {
    if (id === undefined || id === null) {
      return false;
    } else {
      return true;
    }
  };
  const validateMajor = (id) => {
    if (id === undefined || id === null) {
      return false;
    } else {
      return true;
    }
  };

  const validateFirstStep = () => {
    if (
      validateTitle(information.title) &&
      validateGender(information.gender) &&
      validateFirstName(information.firstName) &&
      validateLastName(information.lastName) &&
      validateID(information.idCard) &&
      validateAge(information.age)
    ) {
      return true;
    }
  };

  const validateTwoStep = () => {
    if (
      validateEducate(educations.educate) &&
      validateMajor(educations.majorName)
    ) {
      return true;
    }
  };
  const validateChoice = (id) => {
    if (
      id[0].value !== "" &&
      id[1].value !== "" &&
      id[2].value !== "" &&
      id[3].value !== "" &&
      id[4].value !== "" &&
      id[5].value !== "" &&
      id[6].value !== "" &&
      id[7].value !== "" &&
      id[8].value !== "" &&
      id[9].value !== "" &&
      id[10].value !== "" &&
      id[11].value !== "" &&
      id[12].value !== "" &&
      id[13].value !== "" &&
      id[14].value !== "" &&
      id[15].value !== "" &&
      id[16].value !== "" &&
      id[17].value !== "" &&
      id[18].value !== "" &&
      id[19].value !== "" &&
      id[20].value !== "" &&
      id[21].value !== "" &&
      id[22].value !== "" &&
      id[23].value !== "" &&
      id[24].value !== "" &&
      id[25].value !== "" &&
      id[26].value !== "" &&
      id[27].value !== "" &&
      id[28].value !== "" &&
      id[29].value !== "" &&
      id[30].value !== "" &&
      id[31].value !== "" &&
      id[32].value !== "" &&
      id[33].value !== "" &&
      id[34].value !== "" &&
      id[35].value !== "" &&
      id[36].value !== "" &&
      id[37].value !== "" &&
      id[38].value !== "" &&
      id[39].value !== "" &&
      id[40].value !== ""
    )
      return true;
  };
  const validateChoice1 = (id) => {
    if (
      id[41].value !== "" &&
      id[42].value !== "" &&
      id[43].value !== "" &&
      id[44].value !== "" &&
      id[45].value !== "" &&
      id[46].value !== "" &&
      id[47].value !== "" &&
      id[48].value !== "" &&
      id[49].value !== "" &&
      id[50].value !== "" &&
      id[51].value !== "" &&
      id[52].value !== "" &&
      id[53].value !== "" &&
      id[54].value !== "" &&
      id[55].value !== "" &&
      id[56].value !== "" &&
      id[57].value !== "" &&
      id[58].value !== "" &&
      id[59].value !== "" &&
      id[60].value !== "" &&
      id[61].value !== "" &&
      id[62].value !== "" &&
      id[63].value !== "" &&
      id[64].value !== "" &&
      id[65].value !== "" &&
      id[66].value !== "" &&
      id[67].value !== "" &&
      id[68].value !== "" &&
      id[69].value !== "" &&
      id[70].value !== "" &&
      id[71].value !== "" &&
      id[72].value !== "" &&
      id[73].value !== "" &&
      id[74].value !== "" &&
      id[75].value !== "" &&
      id[76].value !== "" &&
      id[77].value !== "" &&
      id[78].value !== "" &&
      id[79].value !== "" &&
      id[80].value !== "" &&
      id[81].value !== "" &&
      id[82].value !== "" &&
      id[83].value !== "" &&
      id[84].value !== "" &&
      id[85].value !== "" &&
      id[86].value !== ""
    )
      return true;
  };

  // ทำ validate ในแต่ละหน้า
  const onSubmit = (step) => {
    if (step === 0) {
      if (validateFirstStep()) {
        return true;
      }
    }
    if (step === 1) {
      if (validateTwoStep()) {
        return true;
      }
    }
    if (step === 2) {
      if (validateChoice(values)) {
        return true;
      }
    }
    if (step === 3) {
      if (validateChoice1(values)) {
        return true;
      }
    }
    if (step === 4) {
      if (validateTwoStep()) {
        return true;
      }
    }
  };

  function getStepContent(stepIndex) {
    switch (stepIndex) {
      case 0:
        return (
          <Information
            data={information}
            setInformation={setInformation}
            validateTitle={validateTitle}
            error={error}
            setError={setError}
          />
        );
      case 1:
        return <Education data={educations} setEducations={setEducations} />;
      case 2:
        return (
          <ActivityWork
            data={values}
            data1={data1}
            setValues={setValues}
            summary={summary}
            setSummary={setSummary}
            active={active}
            setActive={setActive}
          />
        );
      case 3:
        return (
          <ContextWorks
            data1={data1}
            data={values}
            setValues2={setValues}
            summary={summary}
            setSummary={setSummary}
            content={content}
            setContent={setContent}
          />
        );
      case 4:
        return (
          <Summary
            testId={test1.users.id}
            active={active}
            content={content}
            cardID={information.idCard}
            titles={information.title}
            name={information.firstName}
            lastName={information.lastName}
            age={information.age}
            edu={educations.educate.id_education}
            major={educations.majorName.id_major}
            gender={information.gender}
          />
        );

      default:
        return "Unknown stepIndex";
    }
  }

  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{<p>{label}</p>}</StepLabel>
          </Step>
        ))}
      </Stepper>
      {/*{test1.status === 404 || test1.status === 500 || test1.status === 501 ? (
        <Modal
          status={test1.status}
          link={"https://cubioinfo.com/aptitude-test/api/tests/1"}
        />
      ) : (
        ""
      )}*/}
      {data1.status === 404 || data1.status === 500 || data1.status === 501 ? (
        <Modal
          status={data1.status}
          link={"https://cubioinfo.com/aptitude-test/api/testitems/1"}
        />
      ) : (
        ""
      )}
      <Container fixed>
        <Grid container direction="row" justify="center" alignItems="center">
          {activeStep === steps.length ? (
            <div></div>
          ) : (
            <div>
              <Typography className={classes.instructions}>
                {getStepContent(activeStep)}
              </Typography>
              <Button
                type="submit"
                disabled={activeStep === 0 || activeStep === 4}
                onClick={handleBack}
                className={classes.backButton}
              >
                <p>ย้อนกลับ</p>
              </Button>
              {activeStep === 4 ? (
                <Link href={`${process.env.PUBLIC_URL}`}>
                  <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                    width={20}
                  >
                    {activeStep === 4 ? <p>เสร็จสิ้น</p> : <p>ถัดไป</p>}
                  </Button>
                </Link>
              ) : (
                <Button
                  variant="contained"
                  color="primary"
                  type="submit"
                  onClick={onSubmit(activeStep) ? handleNext : handleStay}
                >
                  {activeStep === steps.length - 1 ? (
                    <p className="p1">เสร็จสิ้น</p>
                  ) : (
                    <p className="p1">ถัดไป</p>
                  )}
                </Button>
              )}
            </div>
          )}
        </Grid>
      </Container>
    </div>
  );
}
