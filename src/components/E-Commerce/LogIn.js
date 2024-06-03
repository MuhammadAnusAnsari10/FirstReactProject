import React, { useState } from "react";
import { auth } from "../FireBase/FireBaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";
import {
  Button,
  Container,
  Grid,
  Paper,
  TextField,
  InputAdornment,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import "./Style.css";
import EmailIcon from "@mui/icons-material/Email";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function LogIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSignIn = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential.user.email);
        toast.success("User Login Successfully", {
          position: "top-left",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          style: {
            backgroundColor: "green",
            color: "white",
          },
        });
        navigate("/shop");
      })

      .catch((error) => {
        toast.error("Correct Your Email Or Passowrd.", {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          style: {
            backgroundColor: "red",
            color: "white",
          },
        });
        setEmail("");
        setPassword("");
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
      <Grid className="body1">
        <Grid style={{ marginTop: "2%" }}>
          <Paper evelation={10} style={paperStyle}>
            <div className="header">
              <div className="text" style={{ marginTop: "10%" }}>
                Log In
              </div>
              <div className="underLine" style={{ marginBottom: "7%" }}></div>
            </div>
            <TextField
              placeholder="Enter Your Email"
              onChange={(e) => setEmail(e.target.value)}
              style={{ marginBottom: "4%", width: "80%", marginLeft: "10%" }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <EmailIcon />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              placeholder="Enter Your Password"
              type={showPassword ? "text" : "password"}
              onChange={(e) => setPassword(e.target.value)}
              style={{ marginTop: "5%", width: "80%", marginLeft: "10%" }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    {showPassword ? (
                      <VisibilityIcon
                        onClick={() => setShowPassword(!showPassword)}
                        style={{ cursor: "pointer" }}
                      />
                    ) : (
                      <VisibilityOffIcon
                        onClick={() => setShowPassword(!showPassword)}
                        style={{ cursor: "pointer" }}
                      />
                    )}
                  </InputAdornment>
                ),
              }}
            />

            <Link sx={{ textDecoration: "none" }}>
              <Button
                onClick={handleSignIn}
                variant="contained"
                style={{ marginLeft: "35%", marginTop: "7%" }}
              >
                Log In{" "}
              </Button>
            </Link>
            <br />
            <Link to="/resetPassword">
              <Button
                variant="contained"
                style={{ marginLeft: "19%", marginTop: "5%" }}
              >
                Forget Password ?
              </Button>
            </Link>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
}
