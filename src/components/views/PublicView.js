import React from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { UpcomingEvents } from "../pages/UpcomingEvents";
import { FindAClass } from "../pages/FindAClass";
import { Instructors } from "../pages/Instructors";
import { PhotoGallery } from "../pages/PhotoGallery";
import { Login } from "../auth/Login";

export const PublicView = () => {
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
        <Route path="/Home" element={<Home />} />
        <Route path="/UpcomingEvents" element={<UpcomingEvents />} />
        <Route path="/FindAClass" element={<FindAClass />} />
        <Route path="/Instructors" element={<Instructors />} />
        <Route path="/PhotoGallery" element={<PhotoGallery />} />
        <Route path="/Login" element={<Login />} />
      </Route>
    </Routes>
  );
};
