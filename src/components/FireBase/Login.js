import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "./FireBaseConfig";
import React, { useState } from "react";
import { Container, Grid, Button } from "@mui/material";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginHandler = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        alert("login successfully");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert("This Email Is in Use Please Try Different Email");
      });
  };

  const signInHandler = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential.user.email);
        alert("User signin");
      })
      .catch((error) => {
        console.log(error.message);
        // ..
      });
  };

  return (
    <>
      <Container>
        <Grid container justifyContent="center">
          <Grid item xs={12} md={6} textAlign="center">
            <input
              type="text"
              placeholder="Enter First Name"
              style={{ marginBottom: "4%", width: "40%" }}
            />
            <br />
            <input
              type="text"
              placeholder="Enter Last Name"
              style={{ marginBottom: "4%", width: "40%" }}
            />
            <br />
            <input
              type="email"
              placeholder="Enter Email"
              onChange={(e) => setEmail(e.target.value)}
              style={{ marginBottom: "4%", width: "40%" }}
            />
            <br />
            <input
              type="password"
              placeholder="Enter Password"
              onChange={(e) => setPassword(e.target.value)}
              style={{ marginBottom: "3%", width: "40%" }}
            />
            <br />
            <Button
              variant="contained"
              onClick={loginHandler}
              sx={{ marginRight: "2%" }}
            >
              Log In
            </Button>

            <Button variant="contained" onClick={signInHandler}>
              Sign In
            </Button>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
