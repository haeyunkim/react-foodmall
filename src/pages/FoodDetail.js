import { useParams } from "react-router-dom";
import Header from "../components/Header";
import { Container, Row, Col } from "react-bootstrap";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import { Map, MapMarker } from "react-kakao-maps-sdk";
import api from "../apis/axios";
import "./FoodList.css";

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
  const [reply, setReply] = useState("");
  const [replyList, setReplyList] = useState([]);
  const name = localStorage.getItem("name");

  const onchange = (e) => {
    setReply(e.target.value);
  };

  const handleReplyEnter = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      register();
      event.target.value = "";
    }
  };

  const register = (event) => {
    const cloneReplyList = [...replyList];
    cloneReplyList.push(reply);
    setReplyList(cloneReplyList);
    setReply("");
  };

  return (
    <div className="back-page">
      <Header />

      <div className="container">
        <section className="back-img-wrapper row">
          <img
            className="back-detail-img1 col-sm-6 col"
            src={findShop.image1}
            width="20%"
          />
          <img
            className="back-detail-img2 col col-sm-6"
            src={findShop.image2}
            width="20%"
          />
          <img
            className="back-detail-img3 col col-sm-6"
            src={findShop.image3}
            width="20%"
          />
          <div className="col-3 back-detail-img4 col-sm-6">
            <BackdMap lat={lat} id={id} />
          </div>
        </section>
      </div>
      <section className="container back-detail-name">
        <div>{findShop.name}</div>
      </section>

      <div className="shop-title container">
        <section className="back-detail-item-wrapper ">
          <div className="back-detail-item1">
            <span className="back-detail-item-name">??????:</span>
            {findShop.address}
          </div>
          <div className="back-detail-item2">
            <span className="back-detail-item-name">????????????:</span>{" "}
            {findShop.number}
          </div>
          <div className="back-detail-item3">
            <span className="back-detail-item-name">????????????:</span>{" "}
            {findShop.introduce}
          </div>
          <div className="back-detail-item4">
            <span className="back-detail-item-name">?????????:</span>
            {findShop.price}
          </div>
          <div className="back-detail-item5">
            <span className="back-detail-item-name">??????:</span>
            {findShop.holiday}
          </div>
          <div className="back-detail-item6">
            <span className="back-detail-item-name">????????????:</span>
            {findShop.time}
          </div>
        </section>
      </div>

      <section className="reply-wrapper container">
        <h3 className="reply-title">??????</h3>
        <div className="reply-container container">
          <div className="replyList">
            {replyList.map((item, i) => {
              return (
                <article className="reply-area " key={i}>
                  <div className="replyList-id">{name}</div>
                  <div className="replyList-comment">{item}</div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <div className="textarea-container container">
        <textarea
          className="textarea-content"
          placeholder="????????? ???????????????"
          value={reply}
          onChange={onchange}
          onKeyPress={handleReplyEnter}
        ></textarea>

        <div className="register-btn-container">
          <button type="button" onClick={register} className="register-btn">
            ?????? ????????????
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

const BackdMap = ({ lat, id }) => {
  return (
    <>
      {lat.map((item, i) => (
        <div className="backMap-wrapper" key={i}>
          {item.id === Number(id) && (
            <>
              <Map
                className="backMap-container container"
                center={{ lat: Number(item.lat1), lng: Number(item.lng1) }}
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
        </div>
      ))}
    </>
  );
};

export default FoodDetail;
