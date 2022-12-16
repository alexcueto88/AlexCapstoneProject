import React, { useState, useEffect } from "react";
import "./Instructors.css";

export const Instructors = () => {
  const [instructor, setInstructors] = useState([]);
  
  useEffect (() => {
    fetch (`http://localhost:8088/instructors`)
    .then((response) => response.json())
    .then((instructorsArray) => {
      setInstructors(instructorsArray);
    });
  }, []);
 
  return (
    <>
      <div className="background">
        <h2 className="HeaderMeetOurInstuctors">Meet Our Instructors!</h2>

        <p className="intro-paragraph">
          This is text page for Meet Our Instructors.
          </p>
          <div className="cardContainer">
          {instructor.map((instructor) => {
            return (
              <div class="container" key={`instructor--${instructor.id}`}>
                <div className="header"> 
                <h2>{instructor.teacherName}</h2>
                </div>
                <div className="body">
                  <div className="">{instructor.teacherBio}</div>
                </div>
     
              </div>
            )
          })
          }
          </div>
 
      </div>
    </>
  );
};
