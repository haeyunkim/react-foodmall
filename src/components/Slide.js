import { Carousel } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Slide = () => {
  let navigate = useNavigate();

  return (
    <Carousel id="slide-container">
      <Carousel.Item>
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
      <Carousel.Item>
        <img
          className="d-block "
          src={require("../imgs/meat.png")}
          alt="Second slide"
          onClick={() => {
            navigate("/foodList");
          }}
        />

        <Carousel.Caption>
          <h3>Best2</h3>
          <p>목살집</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
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
          <p>껍데기집</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Slide;
