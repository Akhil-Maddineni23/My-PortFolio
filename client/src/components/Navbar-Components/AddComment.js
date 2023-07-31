import React, { useState } from "react";
import { Modal } from "@mui/material";
import { Box } from "@mui/material";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import AddCommentIcon from "@mui/icons-material/AddComment";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import axios from "axios";
import { useGetBaseURL } from "../../hooks/useGetBaseURL";

export const AddComment = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const baseUrl = useGetBaseURL();
  const [shareData, setShareData] = useState({
    email: "",
    comment: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setShareData((prevData) => ({
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

    if (!data.comment.trim()) {
      errors.comment = "Comment is Blank";
    }

    if(data.comment.length > 500){
      errors.comment = "Comment length exceeds >500 chars"
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
    const validationErrors = validateForm(shareData);
    if (Object.keys(validationErrors).length === 0) {
      // Login is valid, perform login logic here
      try {
        const response = await axios.post(`${baseUrl}/comment/add-comment`, {
          email: shareData.email,
          comment: shareData.comment,
        });
        
        const data = await response.data;
        if (data.status) {
          setTimeout(() => {
            handleClose();
            toast.success('Comment Submited!.', {
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
        } 
      } catch (err) {
        console.log(err);
      }
      // Clear form fields
      setShareData({
        email: "",
        comment: "",
      });
      setErrors({});
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div className="addComment">
      <AddCommentIcon
        style={{ fontSize: "50px", color: "#6527BE" }}
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
          <h2 id="modal-title">Sent Me a Comment</h2>
          <form>
            <TextField
              label="Email Address"
              variant="outlined"
              fullWidth
              margin="normal"
              type="email"
              required
              name="email"
              value={shareData.email}
              onChange={handleChange}
            />
            {errors.email && <span style={{color:'red'}}>{errors.email}</span>}
            <TextField
              label="Enter Comment"
              variant="outlined"
              fullWidth
              margin="normal"
              multiline
              required
              rows={5}
              name="comment"
              value={shareData.comment}
              onChange={handleChange}
            />
            {errors.comment && <span style={{color:'red'}}>{errors.comment}</span>}
            <br></br>
            <Button variant="contained" onClick={handleSubmit} style={{marginTop : "10px"}}>Share Comment</Button>
          </form>
          <ToastContainer />
        </Box>
      </Modal>
    </div>
  );
};
