import React from "react";
import { AddEvent } from "./AddEventForm";
import "./InstructorsPortal.css";

export const InstructorsPortal = () => {
  return (
    <>
      <div className="background">
        <h2 className="headerInstructorsPortal">Instructors Portal</h2>
        <AddEvent />
        <p className="portal-info-paragraph">
          This is the Instructors Portal Page.
        </p>
      </div>
    </>
  );
};
