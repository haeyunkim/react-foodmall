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
    <>
      <Header />
      <Slide />
      <Editor />
      <Footer />
    </>
  );
};

export default Main;
