import { Carousel } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./Slide.css";

const Slide = () => {
  let navigate = useNavigate();

  return (
    <Carousel id="slide-container">
      <Carousel.Item id="slide-item1">
        <img
          className="d-block"
          src={require("../imgs/mainBg.png")}
          alt="First slide"
          onClick={() => {
            navigate("/foodList");
          }}
        />
        <Carousel.Caption>
          <h3>Best1</h3>
          <p>삼겹살 집</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item id="slide-item2">
        <img
          className="d-block "
          src={require("../imgs/스파게티.png")}
          alt="Second slide"
          onClick={() => {
            navigate("/foodList");
          }}
        />

        <Carousel.Caption>
          <h3>Best2</h3>
          <p>양식집</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item id="slide-item3">
        <img
          className="d-block"
          src={require("../imgs/singupbg.png")}
          alt="Third slide"
          onClick={() => {
            navigate("/foodList");
          }}
        />

        <Carousel.Caption>
          <h3>Best3</h3>
          <p>떡볶이집</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Slide;
