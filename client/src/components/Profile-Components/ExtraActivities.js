import React from "react";
import "../../styles/extra-activities.css";
import { activities } from "../../Data/data";

export const ExtraActivities = () => {
  return (
    <div className="main-div-activities-content">
      <div className="inner-activities-div">
        <ul className="activities-list">
          {
            activities.map((activity , index) => (
              <li key={index}>{activity}</li>
            ))
          }
        </ul>
      </div>
    </div>
  );
};

/*
import NoteAddIcon from '@mui/icons-material/NoteAdd';
<div className="addActivity">
<NoteAddIcon style={{ fontSize: "60px", color: "#000000" , marginBottom:"20px" }} />
</div>
*/