import React from "react";
import { NashvilleDanceScene } from "./components/NashvilleDanceScene";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <BrowserRouter>
    <NashvilleDanceScene />
  </BrowserRouter>
);
