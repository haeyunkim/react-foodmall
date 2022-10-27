import axios from "axios";
import { useState } from "react";
import Data from "../data";
import Header from "../components/Header";
import { Container, Row, Col } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import Footer from "../components/Footer";
import { Routes, Route } from "react-router-dom";
import FoodDetail from "./FoodDetail";
import "./FoodList.css";

const FoodList = () => {
  const [data, setData] = useState(Data);
  const [list, setList] = useState([
    {
      image:
        "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=http%3A%2F%2Fcfile9.uf.tistory.com%2Fimage%2F9953D5365C7B2574020128",
      name: "대덕구",
    },
    {
      image:
        "https://cdn.daejonilbo.com/news/photo/201207/1014602_110031_4728.jpg",
      name: "유성구",
    },
    {
      image:
        "https://news.imaeil.com/photos/2020/04/29/2020042911344559145_l.jpg",
      name: "서구",
    },
    {
      image:
        "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=http%3A%2F%2Fcfile27.uf.tistory.com%2Fimage%2F998F2E405C65038A2688F8",
      name: "중구",
    },
    {
      image: "https://t1.daumcdn.net/cfile/tistory/225A6940566E28852B",
      name: "동구",
    },
  ]);

  const [list2, setList2] = useState([
    {
      image:
        "https://mp-seoul-image-production-s3.mangoplate.com/35606/454813_1456624978791_1929?fit=around|512:512&crop=512:512;*,*&output-format=jpg&output-quality=80",
      name: "오문창 순대국밥",
      address: "대전광역시 대덕구 한밭대로 1153",
    },
    {
      image:
        "https://mp-seoul-image-production-s3.mangoplate.com/623746_1591624863080130.jpg?fit=around|359:240&crop=359:240;*,*&output-format=jpg&output-quality=80",
      name: "일당 감자탕",
      address: "대전광역시 유성구 계룡로59번길 36",
    },
    {
      image:
        "https://mp-seoul-image-production-s3.mangoplate.com/573545_1594446229880774.jpg?fit=around|512:512&crop=512:512;*,*&output-format=jpg&output-quality=80",
      name: "토미아",
      address: "대전광역시 서구 청사서로 14",
    },
    {
      image:
        "https://mp-seoul-image-production-s3.mangoplate.com/610330_1592103089600282.jpg?fit=around|512:512&crop=512:512;*,*&output-format=jpg&output-quality=80",
      name: "한영식당",
      address: "대전광역시 중구 계룡료874번길 6",
    },
    {
      image:
        "https://mp-seoul-image-production-s3.mangoplate.com/1593527_1633873900871388.jpg?fit=around|512:512&crop=512:512;*,*&output-format=jpg&output-quality=80",
      name: "성심당",
      address: "대전광역시 동구 중앙로 215 대전역 KTX라운지 옆 2F",
    },
    {
      image:
        "https://mp-seoul-image-production-s3.mangoplate.com/522207_1628495150107028.jpg?fit=around|512:512&crop=512:512;*,*&output-format=jpg&output-quality=80",
      name: "원조 태평소국밥",
      address: "	대전광역시 중구 태평로 116",
    },
  ]);

  const [list3, setList3] = useState([
    {
      id: 0,
      image:
        "https://steemitimages.com/DQmQwJ6sg2LRsNmYB917hiq2k1qFVd19B6AnwStU1os75rF/20180203_181957.jpg",
      name: "광천식당",
      address: "대전 중구 대종로505번길 29",
      number: "042-226-4751",
    },
    {
      id: 1,
      image:
        "https://mp-seoul-image-production-s3.mangoplate.com/supporters_admin/srfp-oodne1g-w.jpg?fit=around|512:512&crop=512:512;*,*&output-format=jpg&output-quality=80",
      name: "미세노센세",
      address: "대전 서구 계룡로553번안길 65",
      number: "042-482-0366",
    },
    {
      id: 2,
      image:
        "https://mp-seoul-image-production-s3.mangoplate.com/16924/1835160_1618148911566_10600",
      name: "한영식당",
      address: "대전 중구 계룡로874번길 6",
      number: "042-533-2644",
    },
    {
      id: 3,
      image:
        "https://mp-seoul-image-production-s3.mangoplate.com/2266618_1655130360317882.jpg",
      name: "미소본가 스마일 칼국수",
      address: "대전 중구 보문로230번길 82",
      number: "042-221-1845",
    },
    {
      id: 4,
      image:
        "https://mp-seoul-image-production-s3.mangoplate.com/714097_1508052474953399.jpg",
      name: "개천식당",
      address: "대전 중구 대전로 779번길 37",
      number: "042-256-1003",
    },
  ]);

  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();
  let { id } = useParams();

  const handleEnter = (e) => {
    if (e.key === "Enter") {
      navigate("/Login");
    }
  };
  const onSubmit = (e) => {
    e.preventDefault();
  };

  const onChange = (e) => {
    setInputValue(e.target.value);
    console.log(e.target.value);
  };
  return (
    <>
      <Header />
      <section className="search-input-wrapper">
        <form className="search-input-container" onSubmit={onSubmit}>
          <input
            className="search-input"
            type="text"
            placeholder="맛집을 검색하세요"
            size="10"
            autoFocus
            onChange={onChange}
            onKeyPress={handleEnter}
          ></input>
          <button type="submit" className="input-btn"></button>
        </form>
      </section>

      <section className="gu-area container">
        <div className="gu-container">
          <div className="gu-name">대전 맛집 찾기</div>
          <div className="gu-wrapper row">
            {list.map((item, i) => {
              return (
                <div className="gu-list1 col" key={i}>
                  <img
                    className="gu-img"
                    src={item.image}
                    width="50%"
                    onClick={() => {
                      navigate(`/foodList/gu/${i}`);
                    }}
                  />
                  <p className="gu-title">{item.name}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="re-area container">
        <div className="re-container">
          <div className="re-name">인기 맛집</div>
          <div className="re-wrapper row ">
            {list2.map((item, i) => {
              return (
                <div className="re-list1 col" key={i}>
                  <img className="re-img" src={item.image} width="50%" />
                  <p className="re-title">{item.name}</p>
                  <p className="re-address">{item.address}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="back-area container">
        <div className="back-container">
          <div className="back-name">백종원 3대천왕 추천 맛집</div>
          <div className="back-wrapper row ">
            {list3.map((item, i) => {
              return (
                <div className="back-list1 col" key={i}>
                  <img
                    className="back-img"
                    src={item.image}
                    width="50%"
                    onClick={() => {
                      navigate(`/foodList/detail/${i}`);
                    }}
                  />
                  <p className="back-title">{item.name}</p>
                  <p className="back-address">{item.address}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />

      {/* <button
        onClick={() => {
          axios
            .get("http://43.200.99.107:8080/hello-api")
            .then((result) => {
              console.log(result.data);
              let copy = [...data, ...result.data];
              setData(copy);
            })
            .catch(() => {
              console.log("fail");
            });
        }}
      >
        클릭
      </button>
      {data.map((item, i) => {
        return (
          <div key={i}>
            <div>{item.name}</div>
            <div>{item.age}</div>
            <div>{item.job}</div>
          </div>
        );
      })} */}
    </>
  );
};

export default FoodList;
