import { Route, Routes } from "react-router-dom";
import { Authorized } from "./views/Authorized";
import { ApplicationViews } from "./views/ApplicationViews";
import { NavBar } from "./nav/NavBar";
// import { Login } from "./auth/Login";
// import { Register } from "./auth/Register";
import React from "react";

export const NashvilleDanceScene = () => {
  return (
    <Routes>
      <Route
        path="/unauthorized"
        element={
            <>
              <NavBar />
              <ApplicationViews />
            </>
          }
      />

      
      {/* <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} /> */}

      <Route
        path="*"
        element={
          <Authorized>
            <>
              <NavBar />
              <ApplicationViews />
            </>
          </Authorized>
        }
      />
    </Routes>
  );
};
