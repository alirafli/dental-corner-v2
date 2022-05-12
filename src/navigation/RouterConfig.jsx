import React from "react";
import { Routes, Route } from "react-router-dom";

//path
import { HOME, LOGIN, REGISTER, ARTICLE, BOOKING, MEDICALLOG, COMPONENTS } from "./Path";

//pages
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import Navbar from "../components/Navbar";
import Article from "../pages/Article";
import MedicalLog from "../pages/MedicalLog";
import Booking from "../pages/Booking";
import Component from "../test/Component";

const RouterConfig = () => {
  return (
    <Routes>
      <Route exact path={LOGIN} element={<LoginPage />} />
      <Route exact path={REGISTER} element={<RegisterPage />} />
      <Route element={<Navbar />}>
      <Route exact path={COMPONENTS} element={<Component />} />
        <Route exact path={HOME} element={<HomePage />} />
        <Route exact path={ARTICLE} element={<Article />} />
        <Route exact path={MEDICALLOG} element={<MedicalLog />} />
        <Route exact path={BOOKING} element={<Booking />} />
      </Route>
    </Routes>
  );
};

export default RouterConfig;
