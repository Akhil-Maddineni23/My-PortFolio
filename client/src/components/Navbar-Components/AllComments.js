import React, { useState, useEffect } from "react";
import "../../styles/allcomments.css";
import CommentIcon from "@mui/icons-material/Comment";


import axios from "axios";
import { useGetBaseURL } from "../../hooks/useGetBaseURL";

import { Modal } from "@mui/material";
import { Button } from "@mui/material";
import { Box } from "@mui/material";

import { CommentPrint } from "./CommentPrint";

export const AllComments = () => {
  const baseUrl = useGetBaseURL();
  const [comments, setComments] = useState([]);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [getComments, setGetComments] = useState([])

  const fetchAllComments = async () => {
    try {
      const response = await axios.get(
        `${baseUrl}/comment/get-comments`
      );
      setComments(response.data);
    } catch (error) {
      console.error("Error fetching Comments:", error);
    }
  };

  useEffect(() => {
    fetchAllComments();
  }, [getComments]);

  return (
    <div>
      <CommentIcon
        style={{ fontSize: "50px", color: "#862B0D", position: "relative" }}
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
            left: "65%",
            transform: "translate(-40%, -45%)",
            width: 700,
            height: 500,
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
            overflowY: "auto",
            background: "#E9FFC2",
          }}
        >
          <h2>Comments</h2>
          {comments.length > 0 &&
            comments.map((comment) => (
              <CommentPrint 
              comment = {comment} 
              key={comment._id} 
              fetchAllComments = {fetchAllComments}
              setGetComments = {setGetComments}
              />
            ))}
        </Box>
      </Modal>
    </div>
  );
};
