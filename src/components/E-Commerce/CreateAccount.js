import React, { useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

import { collection, addDoc, getDocs } from "firebase/firestore";
import { auth, db } from "../FireBase/FireBaseConfig";
// import "./Style.css";
import "./Demo.css";

import { Button, TextField, InputAdornment, Link } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useNavigate } from "react-router-dom";
import { Grid, Paper, Container } from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function CreateAccount() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  // create account function
  const handleCreateAccount = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      // Firestore database
      const docRef = await addDoc(collection(db, "users"), {
        userEmail: email,
        // userPassword: password, // Avoid storing passwords directly in Firestore
      });

      toast.success("Account created successfully", {
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
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      toast.error("This email is in use. Please try a different email.", {
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
    }
  };

  // sign in function
  // const handleSignIn = async () => {
  //   try {
  //     const userCredential = await signInWithEmailAndPassword(
  //       auth,
  //       email,
  //       password
  //     );
  //     console.log(userCredential.user.email);
  //     alert("User signed in successfully");
  //     navigate("/shop");
  //   } catch (error) {
  //     console.error(error.message);
  //     alert("Incorrect email or password.");
  //   }
  // };

  const redirectToLogin = () => {
    navigate("/login");
  };

  const redirectToShop = () => {
    navigate("/shop");
  };

  const getData = async () => {
    const dataSnapShot = await getDocs(collection(db, "users"));
    const data = dataSnapShot.docs.map((doc) => doc.data());
    console.log(data);
  };

  return (
    <>
      <div className="body">
        <div className="container">
          <div className="header">
            <div className="text"> Sign up</div>
            <div className="underLine"></div>
          </div>

          <div className="inputs">
            <div className="input">
              <TextField
                type="text"
                placeholder="Enter Your Name :"
                size="Normal"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <AccountCircleIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </div>
            <div className="input">
              <TextField
                type="email"
                placeholder="Enter Your Email :"
                size="Normal"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <EmailIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </div>
            <div className="input">
              <TextField
                placeholder="Enter Your Password :"
                size="Normal"
                type={showPassword ? "text" : "password"}
                onChange={(e) => setPassword(e.target.value)}
                value={password}
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
            </div>
          </div>

          <div className="submit-container">
            <div className="submit" onClick={handleCreateAccount}>
              Create Account
            </div>
            <div className="submit" onClick={redirectToShop}>
              As a Guest
            </div>
          </div>

          <div className="forget-password">
            <Link sx={{ textDecoration: "none" }}>
              <div className="jab" onClick={redirectToLogin}>
                Already have an Account ?
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* <Button onClick={getData}>Get Data</Button> */}
    </>
  );
}
