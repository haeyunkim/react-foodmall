import "./App.css";
import Main from "./pages/main";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import FoodList from "./pages/foodList";
import FoodDetail from "./pages/FoodDetail";
import { createContext } from "react";
import BackList from "./components/backList";
import FoodGu from "./pages/FoodGu";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import SearchPage from "./pages/SearchPage";
import FoodListDetail from "./pages/foodListDetail";

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
        <Route path="/store/address/:id" element={<FoodGu />} />
        <Route path="/foodList/:word" element={<SearchPage />} />
        <Route path="/store/address/:name/:id" element={<FoodListDetail />} />
      </Routes>

      <script
        src="https://cdn.jsdelivr.net/npm/react/umd/react.production.min.js"
        crossorigin
      ></script>
    </div>
  );
}

export default App;
