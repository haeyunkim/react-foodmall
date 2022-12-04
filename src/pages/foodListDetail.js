import Header from "../components/Header";
import Footer from "../components/Footer";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./FoodListDetail.css";
import { Container, Row, Col } from "react-bootstrap";
import { FaStar } from "react-icons/fa";
import Score from "../apis/score";
import reply from "../apis/reply";
import storeApi from "../apis/storeApi";
import axios from "axios";
import replyApi from "../apis/reply";
import { useNavigate } from "react-router-dom";
import { Map, MapMarker } from "react-kakao-maps-sdk";

const FoodListDetail = () => {
  const navigate = useNavigate();
  let { name } = useParams();
  let { id } = useParams();
  const [reply, setReply] = useState("");
  const [replyList, setReplyList] = useState([]);
  const array = [0, 1, 2, 3, 4];
  const [clicked, setClicked] = useState([false, false, false, false, false]);
  const [title, setTitle] = useState([
    {
      id: 0,
      title: "대덕구 음식점",
      name2: "Daedeok-gu",
    },
    {
      id: 1,
      title: "유성구 음식점",
      name2: "Yuseong-gu",
    },
    {
      id: 2,
      title: "서구 음식점",
      name2: "Seo-gu",
    },
    {
      id: 3,
      title: "중구 음식점",
      name2: "jung-gu",
    },
    {
      id: 4,
      title: "동구 음식점",
      name2: "Dong-gu",
    },
  ]);
  let [guData, setGuData] = useState([]);
  const myName = localStorage.getItem("myName");
  const email = localStorage.getItem("email");
  const [writeTime, setWriteTime] = useState("");
  const [dbReply, setDbReply] = useState([]);
  const atk = localStorage.getItem("accessToken");

  let findId = title.find((item, i) => {
    return item.id === Number(name);
  });

  let findData = guData.find((item, i) => {
    return item.id === Number(id);
  });

  useEffect(() => {
    handleGuData();
  }, []);

  useEffect(() => {
    if (Array.isArray(guData) && guData.length === 0) return;
    handleReply();
    sendScore();
  }, [guData, clicked]);

  const notLogin = () => {
    if (!localStorage.getItem("accessToken")) {
      window.alert("로그인 후 이용해주세요!");
      navigate("/");
    }
  };

  const handleDelete = async (i) => {
    await replyApi
      .post("/remove", {
        ano: dbReply[i].ano,
      })
      .then((res) => {
        console.log("삭제 url 성공", res);
        handleReply();
      })
      .catch((err) => {
        console.log("삭제 url 실패", err);
      });
  };

  const handleGuData = async () => {
    await storeApi
      .get(`/address?address=${findId.name2}`)
      .then((res) => {
        console.log(res.data.list, "gudata");
        setGuData(res.data.list);
        console.log(findData);
      })
      .catch((err) => {
        console.log(err, "클릭에러");
      });
  };

  const handleReply = async () => {
    await storeApi
      .get(`/id?id=${findData.id}`)
      .then((res) => {
        console.log(res.data, "댓글 가져오기");
        setDbReply(res.data.list);
      })
      .catch((err) => {
        console.log(err, "댓글가져오기실패");
      });
  };

  const sendScore = () => {
    let score = clicked.filter(Boolean).length;

    let scoreId = findData.id;
    if (score > 0) {
      Score.post("/", {
        score: score,
        id: scoreId,
      })
        .then((res) => {
          console.log(res, "score 성공");
        })
        .catch((err) => {
          console.log(err, "score 에러");
        });
    }
  };

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
    if (reply.length === 0) {
      window.alert("댓글을 입력해주세요!");
    } else {
      const cloneReplyList = [...dbReply];
      cloneReplyList.push(reply);
      setDbReply(cloneReplyList);

      setReply("");
      replyApi
        .post("/add", {
          content: reply,
          id: findData.id,
          email: email,
        })
        .then((res) => {
          console.log(res, "댓글추가 성공");
          handleReply();
        })
        .catch((err) => {
          console.log(err, "댓글 추가 실패");
        });
    }
  };

  const handleStarClick = (item) => {
    let clickStates = [...clicked];
    for (let i = 0; i < 5; i++) {
      clickStates[i] = i <= item ? true : false;
    }
    if (!localStorage.getItem("accessToken")) {
      window.alert("로그인 후 이용해주세요!");
    } else {
      setClicked(clickStates);
    }
  };

  return (
    <div>
      <Header />
      {findData ? (
        <div className="foodListDetail-page">
          <div className="container">
            <section className="foodListDetail-img-wrapper row">
              <img
                width="20%"
                alt=""
                className="foodListDetail-detail-img1 col-sm-6 col"
              />

              <img
                width="20%"
                alt=""
                className="foodListDetail-detail-img2 col col-sm-6"
              />

              <img
                width="20%"
                alt=""
                className="foodListDetail-detail-img3 col col-sm-6"
              />

              <div className="col-3 back-detail-img4 col-sm-6">
                <BackdMap guData={guData} findData={findData} />
              </div>
            </section>
          </div>

          <section className="container foodListDetail-detail-name">
            <article className="foodListDetail-name-container">
              <div className="foodListDetail-name">{findData.name}</div>
              <div className="foodListDetail-score">
                {findData.score.toFixed(1)}
              </div>
            </article>

            <div className="stars-container">
              {array.map((item, i) => {
                return (
                  <FaStar
                    id="star"
                    key={i}
                    onClick={() => handleStarClick(item)}
                    className={clicked[item] && "yellowStar"}
                  />
                );
              })}
            </div>
          </section>

          <div className="foodListDetail-title container">
            <section className="foodListDetail-detail-item-wrapper ">
              <div className="foodListDetail-detail-item1">
                <span className="foodListDetail-detail-item-name">주소:</span>
                {findData.address}
              </div>
              <div className="foodListDetail-detail-item2">
                <span className="foodListDetail-detail-item-name">
                  전화번호:
                </span>
                {findData.tell}
              </div>
              <div className="foodListDetail-detail-item3">
                <span className="foodListDetail-detail-item-name">
                  음식종류:
                </span>
                {findData.type}
              </div>

              <div className="foodListDetail-detail-item4">
                <span className="foodListDetail-detail-item-name">
                  대표메뉴:
                </span>
                {findData.representative_menu}
              </div>
              <div className="foodListDetail-detail-item5">
                <span className="foodListDetail-detail-item-name">
                  영업시간:
                </span>
                {findData.operating_time}
              </div>
            </section>
          </div>
          <section className="reply-foodListDetail-wrapper container">
            <h3 className="foodListDetail-reply-title">댓글</h3>
            <div className="reply-foodListDetail-container container">
              <div className="replyList">
                {dbReply.map((item, i) => {
                  return (
                    <article className="reply-area" key={i}>
                      <section className="replyList-delete-area">
                        <div className="replyList-id">{item.name}</div>
                        {atk ? (
                          <div
                            className="replyList-delete-btn"
                            onClick={() => {
                              handleDelete(i);
                            }}
                          >
                            X
                          </div>
                        ) : (
                          <></>
                        )}
                      </section>
                      <div className="replyList-foodListDetail-comment">
                        {item.content}
                      </div>
                      <div className="replyList-writeTime">
                        {item.writeTime}
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>
          </section>

          <div className="foodListDetail-textarea-container container">
            <textarea
              className="foodListDetail-textarea-content"
              placeholder="댓글을 남겨주세요"
              value={reply}
              onClick={notLogin}
              onChange={onchange}
              onKeyPress={handleReplyEnter}
            ></textarea>

            <div className="foodListDetail-register-btn-container">
              <button
                type="button"
                onClick={register}
                className="foodListDetail-register-btn"
              >
                댓글 등록하기
              </button>
            </div>
          </div>

          <Footer />
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

const BackdMap = ({ guData, findData }) => {
  return (
    <>
      {/* {guData.map((item, i) => { */}
      <div className="backMap-wrapper">
        <Map
          className="foodListDetail-map-container container"
          center={{
            lat: Number(36.3285),
            lon: Number(127.4235),
          }}
          // key={i}
        >
          <MapMarker
            position={{
              lat: Number(36.3285686),
              lon: Number(127.423584),
            }}
            // key={i + 1}
          ></MapMarker>
        </Map>
      </div>
      ;{/* })} */}
    </>
  );
};

export default FoodListDetail;
