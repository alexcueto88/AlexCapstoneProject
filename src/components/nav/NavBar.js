import React from "react";
import { PublicNavBar } from "./PublicNavBar";
import { InstructorsNavBar } from "./InstructorsNavBar";
import "./NavBar.css"

export const NavBar = () => {
  const localProjectUser = localStorage.getItem("project_user");
  const projectUserObject = JSON.parse(localProjectUser);

  if (projectUserObject) {
    return <InstructorsNavBar />;
   } else {
    return <PublicNavBar />;
  }
};
