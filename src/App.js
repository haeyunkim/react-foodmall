import logo from "./logo.svg";
import "./App.css";
import Main from "./pages/main";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import SignUp from "./components/SignUp";
import FoodList from "./pages/foodList";
import FoodDetail from "./pages/FoodDetail";
import { useState } from "react";
import BackList from "./components/backList";
import FoodGu from "./pages/FoodGu";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <div className="app">
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, maximum-scale=1, minimum-scale=1"
      ></meta>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/foodList" element={<FoodList />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/foodList/detail/:id"
          element={<FoodDetail BackList={BackList} />}
        />
        <Route path="/foodList/gu/:id" element={<FoodGu />} />
      </Routes>
      <script
        src="https://cdn.jsdelivr.net/npm/react/umd/react.production.min.js"
        crossorigin
      ></script>
    </div>
  );
}

export default App;
