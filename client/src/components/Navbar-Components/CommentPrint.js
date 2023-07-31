import React, { useState } from "react";
import "../../styles/allcomments.css";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";

import axios from "axios";
import { useGetBaseURL } from "../../hooks/useGetBaseURL";
import { useGetUserID } from "../../hooks/useGetUserID";

export const CommentPrint = ({ comment, fetchAllComments, setGetComments }) => {
  const baseUrl = useGetBaseURL();
  const [showRead, setShowRead] = useState(!comment.isRead);
  const userID = useGetUserID();

  const handleRead = async () => {
    try {
      await axios.put(`${baseUrl}/comment/${comment._id}`);
      setShowRead(comment.isRead);
    } catch (error) {
      console.error("Error changing isRead", error);
    }
  };

  const handleDelete = async () => {
    try {
      await axios.delete(`${baseUrl}/comment/${comment._id}`);
      const response = fetchAllComments();
      setGetComments(response.data);
    } catch (error) {
      console.error("Error handling Delete", error);
    }
  };

  return (
    <div className="commentPrint">
      <div className="commentData">
        <span style={{ color: "brown" }}>{comment.email}</span>
        <span>{comment.comment}</span>
      </div>
      {userID && (
        <>
          <div className="readButton-deleteIcon">
            {showRead && (
              <>
                <button
                  variant="outlined"
                  id="markRead-button"
                  onClick={handleRead}
                >
                  Read
                </button>
              </>
            )}

            <DeleteOutlineOutlinedIcon
              style={{ fontSize: "30px", color: "#6527BE" }}
              onClick={handleDelete}
            />
            
          </div>
        </>
      )}
    </div>
  );
};
