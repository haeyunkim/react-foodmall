import { useParams } from "react-router-dom";
import Header from "../components/Header";
import { Container, Row, Col } from "react-bootstrap";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import { Map, MapMarker } from "react-kakao-maps-sdk";

const FoodDetail = ({ BackList }) => {
  let { id } = useParams();
  let findShop = BackList.find((item, i) => {
    return item.id === Number(id);
  });

  const [selectLat, setSelectLat] = useState({});

  const lat = [
    {
      id: 0,
      lat1: "36.3285",
      lng1: "127.4235",
      lat2: "36.3285686",
      lng2: "127.423584",
    },
    {
      id: 1,
      lat1: "36.3460",
      lng1: "127.3888",
      lat2: "36.3460967",
      lng2: "127.388878",
    },
    {
      id: 2,
      lat1: "36.32343",
      lng1: "127.4107",
      lat2: "36.3234314",
      lng2: "127.410771",
    },
    {
      id: 3,
      lat1: "36.32440",
      lng1: "127.4271",
      lat2: "36.3244014",
      lng2: "127.427181",
    },
    {
      id: 4,
      lat1: "36.32861",
      lng1: "127.4317",
      lat2: "36.3286116",
      lng2: "127.431725",
    },
  ];

  return (
    <div className="back-page">
      <Header />
      <div className="container">
        <section className="back-img-wrapper row">
          <img
            className="back-detail-img col"
            src={findShop.image1}
            width="50%"
          />
          <img
            className="back-detail-img col"
            src={findShop.image2}
            width="50%"
          />
          <img
            className="back-detail-img col"
            src={findShop.image3}
            width="50%"
          />
          <div className="col back-detail-img1">
            <BackdMap lat={lat} id={id} />
          </div>
        </section>
      </div>
      <section className="container back-detail-name">
        <div>{findShop.name}</div>
      </section>

      <table className="shop-title container">
        <tbody className="back-detail-item-wrapper ">
          <tr className="back-detail-item1">
            <span className="back-detail-item-name">주소:</span>
            {findShop.address}
          </tr>
          <tr className="back-detail-item2">
            <span className="back-detail-item-name">전화번호:</span>{" "}
            {findShop.number}
          </tr>
          <tr className="back-detail-item3">
            <span className="back-detail-item-name">음식종류:</span>{" "}
            {findShop.introduce}
          </tr>
          <tr className="back-detail-item4">
            <span className="back-detail-item-name">가격대:</span>
            {findShop.price}
          </tr>
          <tr className="back-detail-item5">
            <span className="back-detail-item-name">휴일:</span>
            {findShop.holiday}
          </tr>
          <tr className="back-detail-item6">
            <span className="back-detail-item-name">영업시간:</span>
            {findShop.time}
          </tr>
        </tbody>
      </table>

      <Footer />
    </div>
  );
};

const BackdMap = ({ lat, id }) => {
  return (
    <>
      {lat.map((item, i) => (
        <>
          {item.id === Number(id) && (
            <>
              <Map
                center={{ lat: Number(item.lat1), lng: Number(item.lng1) }}
                style={{
                  width: "100%",
                  height: "300px",
                }}
                key={i}
              >
                <MapMarker
                  position={{
                    lat: Number(item.lat2),
                    lng: Number(item.lng2),
                  }}
                  key={i + 1}
                ></MapMarker>
              </Map>
            </>
          )}
        </>
      ))}
    </>
  );
};

export default FoodDetail;
