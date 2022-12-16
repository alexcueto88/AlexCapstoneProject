import React from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import { InstructorsPortal } from "../pages/InstructorsPortal";
import { Home } from "../pages/Home";
// import { AddEvent } from "./pages/AddEventForm";
// import { EditEventForm } from "./pages/EditEventForm";

export const InstructorsView = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Outlet />
          </>
        }
      >
        <Route path="/InstructorsPortal" element={<InstructorsPortal />} />
        {/* <Route path="Home" element={<Home />} /> */}
        {/* <Route path="InstructorsPortal/AddEvent" element={<AddEvent />} />
        <Route path="/Instructor/:attractionsId/edit" element={<EditEventForm />} /> */}

      </Route>
    </Routes>
  );
};
