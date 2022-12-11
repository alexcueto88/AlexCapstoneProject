import React from "react";
import { PublicView } from "./PublicView";
import { InstructorsView } from "./InstructorsView";

export const ApplicationViews = () => {
  const localProjectUser = localStorage.getItem("capstone_user");
  const projectUserObject = JSON.parse(localProjectUser);

  if (projectUserObject) {
    return <InstructorsView />;
  } else {
    return <PublicView />;
  }
};
