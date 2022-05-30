import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "../App";
import Test from "./test";
import Product from "./Data";
import Home from "./Home";
import Comments from "./Comments";
import Apply from "./apply";
import Graph from "./graph";
import Links from "./links";

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<App />}></Route>
      <Route path="/WhyScoir" element={<Test />}></Route>
      <Route path="/Data" element={<Product />}></Route>
      <Route path="/Home" element={<Home />}></Route>
      <Route path="/Comments" element={<Comments />}></Route>
      <Route path="/Apply" element={<Apply />}></Route>
      <Route path="/Graph" element={<Graph />}></Route>
      <Route path="/Links" element={<Links />}></Route>
    </Routes>
  </BrowserRouter>
);

export default Router;
