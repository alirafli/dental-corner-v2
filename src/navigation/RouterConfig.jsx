import React from "react";
import { Routes, Route } from "react-router-dom";

//path
import {
  HOME,
  LOGIN,
  REGISTER,
  ARTICLE,
  BOOKING,
  MEDICALLOG,
  COMPONENTS,
  APPOINTMENT,
  CONSULTATION,
  ARTICLECONTENT,
  PROFILE,
} from "./Path";

//pages
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import Navbar from "../components/Navbar";
import Article from "../pages/Article";
import MedicalLog from "../pages/MedicalLog";
import Booking from "../pages/Booking";
import Component from "../test/Component";
import Consultation from "../pages/Consultation";
import Appointment from "../pages/Appointment";
import ArticleContent from "../pages/ArticleContent";
import Profile from "../pages/Profile";
import PrivateRoute from "./PrivateRoute";
import AuthRoute from "./AuthRoute";

const RouterConfig = () => {
  return (
    <Routes>
      <Route element={<AuthRoute />}>
        <Route exact path={LOGIN} element={<LoginPage />} />
        <Route exact path={REGISTER} element={<RegisterPage />} />
      </Route>
      <Route element={<PrivateRoute />}>
        <Route element={<Navbar />}>
          <Route exact path={COMPONENTS} element={<Component />} />
          <Route exact path={HOME} element={<HomePage />} />
          <Route exact path={ARTICLE} element={<Article />} />
          <Route exact path={ARTICLECONTENT} element={<ArticleContent />} />
          <Route exact path={MEDICALLOG} element={<MedicalLog />} />
          <Route exact path={BOOKING} element={<Booking />} />
          <Route exact path={APPOINTMENT} element={<Appointment />} />
          <Route exact path={CONSULTATION} element={<Consultation />} />
          <Route exact path={PROFILE} element={<Profile />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default RouterConfig;
