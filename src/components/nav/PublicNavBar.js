import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./NavBar.css";

export const PublicNavBar = () => {
  const navigate = useNavigate();

  return (
    <div className="navImgContainer">
      <div className="navBarLinks">
        <div className="navbar__item active">
          <Link className="navbar__link" to="Home">
            Home
          </Link>
        </div>
        <div className="navbar__item active">
          <Link className="navbar__link" to="UpcomingEvents">
            Upcoming Events
          </Link>
        </div>
        <div className="navbar__item active">
          <Link className="navbar__link" to="/FindAClass">
            Find A Class
          </Link>
        </div>
        <div className="navbar__item active">
          <Link className="navbar__link" to="/Instructors">
            Instructor
          </Link>
        </div>
        <div className="navbar__item active">
          <Link className="navbar__link" to="/PhotoGallery">
            Photo Gallery
          </Link>
        </div>

      

        <div className="navbar__item active">
          <Link className="navbar__link" to="/Login">

            Log In
          </Link>
        </div>
        



      </div>
      <div>
        {/* <img src={require("./Logo.png")} alt="Logo" className="Logo" /> */}
      </div>
    </div>
  );
};
