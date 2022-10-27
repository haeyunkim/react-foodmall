import logo from "./logo.svg";
import "./App.css";
import Main from "./pages/main";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
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
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/foodList" element={<FoodList />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
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
