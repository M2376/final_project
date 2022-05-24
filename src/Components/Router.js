import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "../App";
import Test from "./test";
const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route exact path="/" elementS={<App />}></Route>
      <Route path="/WhyScoir" element={<Test />}></Route>
    </Routes>
  </BrowserRouter>
);

export default Router;
