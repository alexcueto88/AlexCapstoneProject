import { Route, Routes } from "react-router-dom";
import { Authorized } from "./views/Authorized";
import { ApplicationViews } from "./views/ApplicationViews";
import { NavBar } from "./nav/NavBar";
import React from "react";
import { InstructorsView } from "./views/InstructorsView";
import { InstructorsNavBar } from "./nav/InstructorsNavBar";
import { Login } from "./auth/Login";
import { Register } from "./auth/Register";


export const NashvilleDanceScene = () => {
  return (
    <Routes> 
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route
        path="*"
        element={
            <>
              <NavBar />
              <ApplicationViews />
            </>
          }
      />

      <Route
        path="/"
        element={
          <Authorized>
            <>
              <InstructorsNavBar />
              <InstructorsView />
            </>
          </Authorized>
        }
      />
    </Routes>
  );
};
