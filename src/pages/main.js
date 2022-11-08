import "bootstrap/dist/css/bootstrap.min.css";
import Slide from "../components/Slide";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Editor from "../components/Editor";
import { useEffect } from "react";
import LoginCheck from "../components/LoginCheck";

const Main = () => {
  useEffect(() => {
    if (localStorage.getItem("accessToken")) {
      <LoginCheck />;
    }
  }, []);

  return (
    <div id="main-page-container">
      <Header />
      <Slide />
      <Editor />
      <Footer />
    </div>
  );
};

export default Main;
