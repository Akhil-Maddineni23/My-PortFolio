import React from "react";
import { Link } from "react-router-dom";

export const ContentsBar = () => {
  return (
    <>
      <div className="contents-bar">
        <Link to="/about-me" style={{ textDecoration: "none" }}>
          <div
            className="contentCircle"
            style={{
              backgroundColor: "yellow",
              cursor: "pointer",
              transition: "background-color 0.3s", // Optional: Add a transition for smooth color change
            }}
            onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "white")}
            onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "yellow")}
          >
            <span>About Me</span>
          </div>
        </Link>

        <Link to="/work-experience" style={{ textDecoration: "none" }}>
          <div
            className="contentCircle"
            style={{
              backgroundColor: "#FD8D14",
              cursor: "pointer",
              transition: "background-color 0.3s", // Optional: Add a transition for smooth color change
            }}
            onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "white")}
            onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#FD8D14")}
          >
            <span>Work</span>
            <span>Experience</span>
          </div>
        </Link>

        <Link to="/education" style={{ textDecoration: "none" }}>
          <div
            className="contentCircle"
            style={{
              backgroundColor: "#91C8E4",
              cursor: "pointer",
              transition: "background-color 0.3s", // Optional: Add a transition for smooth color change
            }}
            onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "white")}
            onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#91C8E4")}
          >
            <span>Education</span>
          </div>
        </Link>

        <Link to="/skills" style={{ textDecoration: "none" }}>
          <div
            className="contentCircle"
            style={{
              backgroundColor: "#FBA1B7",
              cursor: "pointer",
              transition: "background-color 0.3s", // Optional: Add a transition for smooth color change
            }}
            onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "white")}
            onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#FBA1B7")}
          >
            <span>Skills</span>
          </div>
        </Link>

        <Link to="/projects" style={{ textDecoration: "none" }}>
          <div
            className="contentCircle"
            style={{
              backgroundColor: "#CD6688",
              cursor: "pointer",
              transition: "background-color 0.3s", // Optional: Add a transition for smooth color change
            }}
            onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "white")}
            onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#CD6688")}
          >
            <span>Projects</span>
          </div>
        </Link>

        <Link to="/extra-activities" style={{ textDecoration: "none" }}>
          <div
            className="contentCircle"
            style={{
              backgroundColor: "#FFC95F",
              cursor: "pointer",
              fontSize : "22px",
              transition: "background-color 0.3s", // Optional: Add a transition for smooth color change
            }}
            onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "white")}
            onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#FFC95F")}
          >
            <span>Extracurricular</span>
            <span>Activities</span>
          </div>
        </Link>

        <Link to="/contact-me" style={{ textDecoration: "none" }}>
          <div
            className="contentCircle"
            style={{
              backgroundColor: "#F24C3D",
              cursor: "pointer",
              transition: "background-color 0.3s", // Optional: Add a transition for smooth color change
            }}
            onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "white")}
            onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#F24C3D")}
          >
            <span>Contact Me</span>
          </div>
        </Link>
      </div>
      <div className="main-line"></div>
    </>
    
  );
};
