import React, { useState } from "react";
import "../../styles/workexp.css";

export const WorkExperience = () => {

  return (
    <>
      <div className="main-div-exp-content">
        <div className="left-exp-div">
          <span className="companyName">Advance Micro Devices</span>
          <span className="role">Internship</span>
        </div>

        <div className="right-exp-div">
          <span className="role">Software Developer</span>
          <span className="timeline">Timeline:</span>{" "}
          <span>May 2022 - May 2023</span>
          <span className="location">Location:</span>
          <span>Hyderabad</span>
          <span className="des">Description of the Work:</span>
          <span>
            Triggering, Debugging and Packaging of graphic driver component
            builds. Worked on back-end development tasks of build server.
          </span>
        </div> 
      </div>
    </>
  );
};

/*

import DeleteIcon from "@mui/icons-material/Delete";
import NoteAddIcon from "@mui/icons-material/NoteAdd";
import { Modal } from "@mui/material";
import { Box } from "@mui/material";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
const [open, setOpen] = useState(false);

const handleOpen = () => {
  setOpen(true);
};

const handleClose = () => {
  setOpen(false);
};

<div className="noteAdd">
<NoteAddIcon
  style={{
    fontSize: "75px",
    color: "black",
    marginLeft: "50%",
    marginTop: "10px",
  }}
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
    <h2 id="modal-title">Add Work Experience</h2>
    <form>
      <TextField
        label="Comapny Name"
        variant="outlined"
        fullWidth
        margin="normal"
      />
      <TextField
        label="Employment Type"
        variant="outlined"
        fullWidth
        margin="normal"
      />
      <TextField
        label="Role"
        variant="outlined"
        fullWidth
        margin="normal"
      />
      <TextField
        label="Location"
        variant="outlined"
        fullWidth
        margin="normal"
      />
      <TextField
        label="Description of the Work"
        variant="outlined"
        fullWidth
        margin="normal"
        multiline
        rows={4}
      />
      <Button variant="contained">Add Experience</Button>
    </form>
  </Box>
</Modal>
</div>
*/