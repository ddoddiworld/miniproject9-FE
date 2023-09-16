import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import MyHome from "../pages/MyHome";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/:nickname" element={<MyHome></MyHome>}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
