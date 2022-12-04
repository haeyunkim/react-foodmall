import axios from "axios";
import { useEffect, useState } from "react";
import Header from "../components/Header";
import { Container, Row, Col } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import Footer from "../components/Footer";
import { Routes, Route } from "react-router-dom";
import FoodDetail from "./FoodDetail";
import Search from "../components/Search";
import "./FoodList.css";
import storeApi from "../apis/storeApi";
import FoodGu from "./FoodGu";
import { setGuData } from "../store/guData";
import { useDispatch, useSelector } from "react-redux";

const FoodList = () => {
  // const [guData, setGuData] = useState([]);
  // const [guCount, setGuCount] = useState("");
  const [list, setList] = useState([
    {
      id: 0,
      image:
        "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=http%3A%2F%2Fcfile9.uf.tistory.com%2Fimage%2F9953D5365C7B2574020128",
      name: "대덕구",
      name2: "Daedeok-gu",
    },
    {
      id: 1,
      image:
        "https://cdn.daejonilbo.com/news/photo/201207/1014602_110031_4728.jpg",
      name: "유성구",
      name2: "Yuseong-gu",
    },
    {
      id: 2,
      image:
        "https://news.imaeil.com/photos/2020/04/29/2020042911344559145_l.jpg",
      name: "서구",
      name2: "Seo-gu",
    },
    {
      id: 3,
      image:
        "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=http%3A%2F%2Fcfile27.uf.tistory.com%2Fimage%2F998F2E405C65038A2688F8",
      name: "중구",
      name2: "jung-gu",
    },
    {
      id: 4,
      image: "https://t1.daumcdn.net/cfile/tistory/225A6940566E28852B",
      name: "동구",
      name2: "Dong-gu",
    },
  ]);
  const [data, setData] = useState([]);

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

  const [searchList, setSearchList] = useState([]);

  useEffect(() => {
    handleData();
  }, []);

  const handleBestZip = (item, i) => {
    if (data[i].address.includes("대덕구")) {
      navigate(`/store/address/0/${item.id}`);
      return;
    }
    if (data[i].address.includes("유성구")) {
      navigate(`/store/address/1/${item.id}`);
      return;
    }
    if (data[i].address.includes("서구")) {
      navigate(`/store/address/2/${item.id}`);
      return;
    }
    if (data[i].address.includes("중구")) {
      navigate(`/store/address/3/${item.id}`);
      return;
    }
    if (data[i].address.includes("동구")) {
      navigate(`/store/address/4/${item.id}`);
      return;
    }
  };

  const handleData = async () => {
    await storeApi
      .get("/all")
      .then((res) => {
        console.log(res, "전체데이터");
        const splitData = res.data.list;
        const splitData2 = splitData.splice(0, 6);
        setData(splitData2);
        setSearchList(splitData2);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const navigate = useNavigate();
  let { id } = useParams();
  const dispatch = useDispatch();

  let guData = useSelector((state) => state.guData);

  const onSubmit = (e) => {
    e.preventDefault();
  };

  const handleGu = (i) => {
    navigate(`/store/address/${i}`);
  };
  return (
    <div id="foodlist-main">
      <Header />
      <Search />

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
                      handleGu(i);
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
          <div className="re-name">인기 맛집 Best6</div>
          <div className="re-wrapper row ">
            {searchList.map((item, i) => {
              return (
                <div
                  className="re-list1 col"
                  key={i}
                  onClick={() => {
                    handleBestZip(item, i);
                  }}
                >
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
    </div>
  );
};

export default FoodList;
