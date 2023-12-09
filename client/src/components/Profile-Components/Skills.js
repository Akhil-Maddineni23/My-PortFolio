import React, { useState } from "react";
import "../../styles/skills.css";
import { skills } from '../../Data/data';

export const Skills = () => {
  return (
    <>
      <div className="main-div-skills-content">
        <div className="div1">
          <div className="left-skills-div">
            <span className="header">Programming Languages</span>
          </div>
          <div className="right-skills-div">
           {
            skills.pl.map((skill , index) => (
              <span key={index}>{skill}</span>
            ))
           }
          </div>
        </div>

        <div className="div2">
          <div className="left-skills-div">
            <span className="header">Technical Proficiency</span>
          </div>
          <div className="right-skills-div">
          {
            skills.fl.map((skill , index) => (
              <span key={index}>{skill}</span>
            ))
           }
          </div>
        </div>

        <div className="div3">
          <div className="left-skills-div">
            <span className="header">Web Technologies/Fw’s</span>
          </div>
          <div className="right-skills-div">
          {
            skills.misl.map((skill , index) => (
              <span key={index}>{skill}</span>
            ))
           }
          </div>
        </div>
      </div>
    </>
  );
};

/*
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import { Box } from "@mui/material";
import { TextField } from "@mui/material";
import { Modal } from "@mui/material";

const [open1, setOpen1] = useState(false);
  const handleOpen1 = () => setOpen1(true);
  const handleClose1 = () => setOpen1(false);

<PlaylistAddIcon style={{ fontSize: "50px" }} onClick={handleOpen1}/>
            <Modal
              open={open1}
              onClose={handleClose1}
              aria-labelledby="modal-title"
              aria-describedby="modal-description"
            >
              <Box
                sx={{
                  position: "absolute",
                  top: "30%",
                  left: "15%",
                  transform: "translate(-50%, -50%)",
                  width: 200,
                  bgcolor: "background.paper",
                  boxShadow: 24,
                  p: 4,
                }}
              >
                <h2 id="modal-title">Add Skill</h2>
                <form>
                  <TextField
                    label="Enter Skill"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                  />
                </form>
              </Box>
            </Modal>
*/
