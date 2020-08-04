import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import "../../index.css";
import Alert from "@material-ui/lab/Alert";
import put from "../../service/put";
const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function Reset() {
  const classes = useStyles();

  const [reset, setReset] = React.useState({
    oldpassword: "",
    newpassword: "",
    comfirmpassword: "",
  });
  const [error, setError] = React.useState({ error: "" });
  const onSubmit = async () => {
    console.log("re", reset);
    if (reset.newpassword !== reset.comfirmpassword) {
      setError({ ...error, error: false });
    } else {
      const result = await put({
        oldPwd: reset.oldpassword,
        newPwd: reset.newpassword,
      });
      setError({ ...error, error: true });
      if (result === 401) {
        setError({ ...error, error: 401 });
      }
    }
  };
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>

        <h2>เปลี่ยนรหัสผ่าน</h2>
        {error.error === false ? (
          <Alert severity="error">รหัสผ่านไม่เหมือนกัน</Alert>
        ) : (
          ""
        )}
        {error.error === 401 ? (
          <Alert severity="error">รหัสผ่านเดิมผิด</Alert>
        ) : (
          ""
        )}
        {error.error === true ? (
          <Alert severity="success">เปลี่ยนรหัสผ่านสำเร็จ</Alert>
        ) : (
          ""
        )}
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            name="old-password"
            type="password"
            label={<p>รหัสผ่านเก่า</p>}
            id="oldpassword"
            autoComplete="current-password"
            onChange={(e) =>
              setReset({ ...reset, oldpassword: e.target.value })
            }
          />
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            name="password"
            label={<p>รหัสผ่านใหม่ (1)</p>}
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={(e) =>
              setReset({ ...reset, newpassword: e.target.value })
            }
          />
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            name="comfirmpassword"
            label={<p>รหัสผ่านใหม่ (2)</p>}
            type="password"
            id="comfirmpassword"
            autoComplete="current-password"
            onChange={(e) =>
              setReset({ ...reset, comfirmpassword: e.target.value })
            }
          />
        </form>

        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
          onClick={onSubmit}
        >
          <h2>เปลี่ยนรหัสผ่าน</h2>
        </Button>
      </div>
    </Container>
  );
}
