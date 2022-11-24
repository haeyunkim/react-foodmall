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

const FoodListDetail = () => {
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
    sendScore();
  }, [guData, clicked]);

  const handleGuData = async () => {
    await storeApi
      .get(`/address?address=${findId.name2}`)
      .then((res) => {
        setGuData(res.data.list);
      })
      .catch((err) => {
        console.log(err, "클릭에러");
      });
  };

  // useEffect(() => {
  //   sendScore();
  // }, [clicked]);

  const sendScore = () => {
    let score = clicked.filter(Boolean).length;

    let scoreId = findData.id;
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
    const cloneReplyList = [...replyList];
    cloneReplyList.push(reply);
    setReplyList(cloneReplyList);
    setReply("");
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

              <img
                width="20%"
                alt=""
                className="col-3 foodListDetail-detail-img4 col-sm-6"
              ></img>
            </section>
          </div>

          <section className="container foodListDetail-detail-name">
            <div className="foodListDetail-name">{findData.name}</div>

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
                {replyList.map((item, i) => {
                  return (
                    <article className="reply-area" key={i}>
                      <div className="replyList-id">{}</div>
                      <div className="replyList-foodListDetail-comment">
                        {item}
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

export default FoodListDetail;
