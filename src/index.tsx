import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
//import About from './screens/About';
//import App from './screens/App';
//import Contact from './screens/Contact';
//import Courses from './screens/Courses';
//import CoursesSchedules from './screens/CoursesSchedules';
import Home from "./screens/Home";
import Login from "./screens/Login";
//import Users from './screens/Users';
//import UsersNew from './screens/UsersNew';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="login" element={<Login />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
