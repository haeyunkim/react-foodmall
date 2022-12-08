import { Carousel } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import "./Slide.css";
import storeApi from "../apis/storeApi";
import { useState } from "react";

const Slide = () => {
  const navigate = useNavigate();
  const [korean, setKorean] = useState([]);
  const [Western, setWestern] = useState([]);
  const [dessert, setDessert] = useState([]);

  useEffect(() => {
    handleKorean();
    handleWestern();
    handleDessert();
  }, []);

  const handleKorean = () => {
    storeApi
      .get("/type?type=Korean")
      .then((res) => {
        console.log(res, "한국음식 성공");
        const copyKorean = res.data.list;
        setKorean(copyKorean.splice(0, 1));
      })
      .catch((err) => {
        console.log(err, "한국음식 에러");
      });
  };

  const handleWestern = () => {
    storeApi
      .get("/type?type=Western")
      .then((res) => {
        console.log(res, "서양음식 성공");
        const copyWestern = res.data.list;
        setWestern(copyWestern.splice(0, 1));
      })
      .catch((err) => {
        console.log(err, "서양음식 에러");
      });
  };
  const handleDessert = () => {
    storeApi
      .get("/type?type=Dessert")
      .then((res) => {
        console.log(res, "분식음식 성공");
        const copyDessert = res.data.list;
        setDessert(copyDessert.splice(0, 1));
      })
      .catch((err) => {
        console.log(err, "서양음식 에러");
      });
  };

  const handleKoreanZip = (item, i) => {
    if (korean[i].address.includes("대덕구")) {
      navigate(`/store/address/0/${item.id}`);
      return;
    }
    if (korean[i].address.includes("유성구")) {
      navigate(`/store/address/1/${item.id}`);
      return;
    }
    if (korean[i].address.includes("서구")) {
      navigate(`/store/address/2/${item.id}`);
      return;
    }
    if (korean[i].address.includes("중구")) {
      navigate(`/store/address/3/${item.id}`);
      return;
    }
    if (korean[i].address.includes("동구")) {
      navigate(`/store/address/4/${item.id}`);
      return;
    }
  };

  const handleWesternZip = (item, i) => {
    if (Western[i].address.includes("대덕구")) {
      navigate(`/store/address/0/${item.id}`);
      return;
    }
    if (Western[i].address.includes("유성구")) {
      navigate(`/store/address/1/${item.id}`);
      return;
    }
    if (Western[i].address.includes("서구")) {
      navigate(`/store/address/2/${item.id}`);
      return;
    }
    if (Western[i].address.includes("중구")) {
      navigate(`/store/address/3/${item.id}`);
      return;
    }
    if (Western[i].address.includes("동구")) {
      navigate(`/store/address/4/${item.id}`);
      return;
    }
  };
  const handleDessertZip = (item, i) => {
    if (dessert[i].address.includes("대덕구")) {
      navigate(`/store/address/0/${item.id}`);
      return;
    }
    if (dessert[i].address.includes("유성구")) {
      navigate(`/store/address/1/${item.id}`);
      return;
    }
    if (dessert[i].address.includes("서구")) {
      navigate(`/store/address/2/${item.id}`);
      return;
    }
    if (dessert[i].address.includes("중구")) {
      navigate(`/store/address/3/${item.id}`);
      return;
    }
    if (dessert[i].address.includes("동구")) {
      navigate(`/store/address/4/${item.id}`);
      return;
    }
  };

  return (
    <Carousel id="slide-container">
      {korean.map((item, i) => {
        return (
          <Carousel.Item id="slide-item1">
            <img
              className="d-block"
              src={require("../imgs/mainBg.png")}
              alt="First slide"
              onClick={() => {
                handleKoreanZip(item, i);
              }}
            />
            <Carousel.Caption>
              <h3>Best1</h3>
              <p>한식집</p>
            </Carousel.Caption>
          </Carousel.Item>
        );
      })}

      {Western.map((item, i) => {
        return (
          <Carousel.Item id="slide-item2">
            <img
              className="d-block"
              src={require("../imgs/스파게티.png")}
              alt="Second slide"
              onClick={() => {
                handleWesternZip(item, i);
              }}
            />

            <Carousel.Caption>
              <h3>Best2</h3>
              <p>양식집</p>
            </Carousel.Caption>
          </Carousel.Item>
        );
      })}
      {dessert.map((item, i) => {
        return (
          <Carousel.Item id="slide-item3">
            <img
              className="d-block"
              src={require("../imgs/singupbg.png")}
              alt="Third slide"
              onClick={() => {
                handleDessertZip(item, i);
              }}
            />

            <Carousel.Caption>
              <h3>Best3</h3>
              <p>분식집</p>
            </Carousel.Caption>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
};

export default Slide;
