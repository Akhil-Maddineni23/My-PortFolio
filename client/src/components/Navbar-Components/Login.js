import React, { useState } from "react";
import LoginIcon from "@mui/icons-material/Login";
import { Modal } from "@mui/material";
import { Box } from "@mui/material";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";

import axios from "axios";
import { useCookies } from "react-cookie";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useGetBaseURL } from "../../hooks/useGetBaseURL";

export const Login = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const baseUrl = useGetBaseURL();
  const [_, setCookies] = useCookies(["access_token"]);
  
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [loginError, setLoginError] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validateForm = (data) => {
    const errors = {};

    if (!data.email.trim()) {
      errors.email = "Email is required";
    } else if (!isValidEmail(data.email)) {
      errors.email = "Invalid email address";
    }

    if (!data.password.trim()) {
      errors.password = "Password is required";
    }

    return errors;
  };

  const isValidEmail = (email) => {
    // Basic email validation using regular expression
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm(loginData);
    if (Object.keys(validationErrors).length === 0) {
      // Login is valid, perform login logic here
      try {
        const response = await axios.post(`${baseUrl}/auth/login`, {
          email: loginData.email,
          password: loginData.password,
        });
        const data = await response.data;
        if (data.status) {
          setCookies("access_token", response.data.token);
          window.sessionStorage.setItem("userID", response.data.userID);
          window.sessionStorage.setItem("userName", response.data.userName);

          setTimeout(() => {
            handleClose();
            toast.success('😁Login Successfully !..', {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",
              });
          }, 1000);

        } else {
          setLoginError(true);
        }
      } catch (err) {
        console.log(err);
      }
  
      // Clear form fields
      setLoginData({
        email: "",
        password: "",
      });
      setErrors({});
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div className="login">
      <LoginIcon
        style={{ fontSize: "50px", color: "blue" }}
        onClick={handleOpen}
      />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
          }}
        >
          <h2 id="modal-title">Admin Login</h2>
          <form>
            <TextField
              label="Email Address"
              variant="outlined"
              fullWidth
              margin="normal"
              type="email"
              name="email"
              value={loginData.email}
              onChange={handleChange}
              required
            />
            {errors.email && <span style={{color:'red'}}>{errors.email}</span>}
            {loginError && <span style={{color:'red'}}>Invalid Email or Password</span>}

            <TextField
              label="Enter Password"
              variant="outlined"
              fullWidth
              margin="normal"
              type="password"
              name="password"
              value={loginData.password}
              onChange={handleChange}
              required
            />
            {loginError && <span style={{color:'red'}}>Invalid Email or Password</span>}
            <br></br>
            <Button variant="contained" onClick={handleSubmit} style={{marginTop : "10px"}}>Login</Button>
          </form>
          <ToastContainer />
        </Box>
      </Modal>
    </div>
  );
};
