import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./NavBar.css";

export const InstructorsNavBar = () => {
  const navigate = useNavigate();



  return (
    <div className="navImgContainer">
      <div className="navBarLinks">
        <div className="navbar__item active">
          <Link className="navbar__link" to="/InstructorsPortal">
            InstructorsPortal
          </Link>
        </div>
        <div className="navbar__item active">
          <Link className="navbar__link" to="/UpcomingEvents">
            Upcoming Events
          </Link>
        </div>
        <div className="navbar__item active">
          <Link className="navbar__link" to="/FindAClass">
            Find A Class
          </Link>
        </div> 
        {/* <div className="navbar__item active">
          <Link className="navbar__link" to="/Instructors">
            Instructor
          </Link> */}
        {/* </div> */}
        {/* <div className="navbar__item active">
          <Link className="navbar__link" to="/PhotoGallery">
            Photo Gallery
          </Link>
        </div>

        
        {/* <div className="navbar__item active">
          <Link className="navbar__link" to="/Login">
            Log In
          </Link>
        </div> */}
 
 

        {localStorage.getItem("capstone_user") ? (
          <div className="navbar__item navbar__logout">
            <Link
              className="navbar__link"
              to=""
              onClick={() => {
                localStorage.removeItem("capstone_user");
                navigate("/Home", { replace: true });
              }}
            >
              Logout
            </Link>
          </div>
        ) : (
          ""
        )}
      </div>
      {/* <div>
        <img src={require("./Logo.png")} alt="Logo" className="Logo" />
      </div> */}
    </div>
  );
};


