import React from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import { InstructorsPortal } from "../pages/InstructorsPortal";
import { Home } from "../pages/Home";
import { AddEvent } from "../pages/AddEventForm";
import { UpcomingEvents } from "../pages/UpcomingEvents";
import { EditEvent } from "../pages/EditEventForm";


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
        <Route path="Home" element={<Home />} /> 
        <Route path="addEvent" element={<AddEvent />} />
        <Route path="upComingEvents" element={<UpcomingEvents />} />
        <Route path="editEvent/:eventId" element={<EditEvent />} />

      </Route>
    </Routes>
  );
};
