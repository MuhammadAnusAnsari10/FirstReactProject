import React from "react";
import { updatePassword } from "firebase/auth";
import { auth } from "../FireBase/FireBaseConfig";
import { useState } from "react";
import { Button, Grid, TextField, Paper, InputAdornment } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import "./Demo.css";

export default function ResetPassword() {
  const [resetPassword, setesetPassword] = useState("");

  const resetPasswordHandler = () => {
    const user = auth.currentUser;

    updatePassword(user, resetPassword)
      .then(() => {
        // Update successful.
        alert("Password Change");
        setesetPassword(resetPassword);
      })
      .catch((error) => {
        // An error ocurred
        // ...
        console.log(error);
      });
  };

  const paperStyle = {
    padding: "20",
    height: "85vh",
    width: "340px",
    margin: "20px auto",
  };
  return (
    <>
      {/* <div className="bodyreset">
        <Grid conatiner>
          <Grid item lg={12} sx={{}}>
            <TextField
              type="email"
              value={resetPassword}
              placeholder="Reset Password"
              onChange={(e) => setesetPassword(e.target.value)}
              style={{ width: "230px" }}
            />
            <br />
            <Button variant="contained" onClick={resetPasswordHandler}>
              Reset Password
            </Button>
          </Grid>
        </Grid>
      </div> */}

      <Grid className="body1">
        <Grid style={{ marginTop: "2%" }}>
          <Paper evelation={10} style={paperStyle}>
            <div className="header">
              <div
                className="text"
                style={{ marginTop: "6%", textAlign: "center" }}
              >
                Reset Password
              </div>
              <div className="underLine" style={{ marginBottom: "7%" }}></div>
            </div>
            <TextField
              type="email"
              value={resetPassword}
              placeholder="Enter Your Email"
              onChange={(e) => setesetPassword(e.target.value)}
              sx={{ paddingLeft: "10%", margin: "4% 0" }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <EmailIcon />
                  </InputAdornment>
                ),
              }}
            />

            <Button
              onClick={resetPasswordHandler}
              variant="contained"
              style={{ marginLeft: "24%", marginTop: "9%" }}
            >
              Reset Password{" "}
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
}
