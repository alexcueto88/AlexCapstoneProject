import React, { useState, useEffect } from "react";
// import { ClassCard } from "./FindAClass";
import "./FindAClass.css";

export const FindAClass = () => {
  const [classType, setClassType] = useState([]);

  useEffect (() => {
    fetch (`http://localhost:8088/classType`)
    .then((response) => response.json())
    .then((classTypeArray) => {
      setClassType(classTypeArray);
    });
  }, []);
 
  return (
    <>
      <div className="background">
        <h2 className="UpcomingClass">Upcoming Classes:</h2>

        <p className="upcoming-events-paragraph">
          This is text page for Upcoming Classes.
          </p>
          <div className="cardContainer">
          {classType.map((classType) => {
            return (
              <div class="container" key={`classType--${classType.id}`}>
                <div className="header"> 
                <h2>{classType.danceStyle}</h2>
                </div>
                <div className="body">
                  <div className="">{classType.danceDescription}</div>
                  <div className="">{classType.classDescription}</div>
                  <div className="">{classType.classsStartTime}</div>
                  <div className="">{classType.classEndTime}</div>
                  <div className="">{classType.classLocation}</div>
                  <div className="">{classType.classPrice}</div>
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





//   **************************
//   return (
//     <>
//       <div className="background">
//         <h2 className="headerFindAClass">Find a Class</h2>

//         <p className="info-paragraph">
//           This is the Find a Class Page.
//         </p>
//       </div>
//     </>
//   );
// };
// *********************************