import React from "react";
import "../../styles/education.css";

export const Education = () => {
  return (
    <>
      <div className="main-div-education-content">
        <div className="inner-education-div">
          <div className="left-education-div">
            <span className="collage">
              Indian Institute of Information Technology, Design and
              Manufacturing, Kancheepuram, Chennai, Tamilnadu
            </span>
          </div>
          <div className="education-line"></div>
          <div className="right-education-div">
            <span className="course">
              Dual Degree (B. Tech + M. Tech in Computer Science and Engneering)
            </span>
            <span className="grade">CGPA : 7.89</span>
            <span className="timeline">TimeLine :</span>
            <span className="period">August 2018 - May 2023</span>
          </div>
        </div>

        <div className="inner-education-div">
          <div className="left-education-div">
            <span className="collage">
              Narayana Educational Institutions, Vijayawada, Andhra Pradesh
            </span>
          </div>
          <div className="education-line"></div>
          <div className="right-education-div">
            <span className="course">Board of Intermediate Education</span>
            <span className="grade">Marks : 962/1000</span>
            <span className="timeline">TimeLine :</span>
            <span className="period">May 2016 - May 2018</span>
          </div>
        </div>

        <div className="inner-education-div">
          <div className="left-education-div">
            <span className="collage">
              Viswabharati High School, Gudivada, Andhra Pradesh
            </span>
          </div>
          <div className="education-line"></div>
          <div className="right-education-div">
            <span className="course">Board of Secondary Education</span>
            <span className="grade">GPA : 9.5</span>
            <span className="timeline">TimeLine :</span>
            <span className="period">June 2015 - May 2016</span>
          </div>
        </div>
      </div>
    </>
  );
};
