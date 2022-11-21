import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Container, Col, Row } from "react-bootstrap";
import Paging from "../components/Paging";
import "./FoodGu.css";
import storeApi from "../apis/storeApi";
import { setGuData } from "../store/guData";
import { useDispatch, useSelector } from "react-redux";

const FoodGu = () => {
  const dispatch = useDispatch();

  let guData = useSelector((state) => state.guData);

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

  let { id } = useParams();
  const [item, setItem] = useState(); //아이템
  const [currentPage, setCurrentPage] = useState(1); //현재 페이지
  const [postPerPage] = useState(10); //페이지당 게시물 개수
  const [indexOfFirstPost, setIndexOfFirstPost] = useState(0); //현재 페이지의 첫번째 아이템 인덱스
  const [indexOfLastPost, setIndexOfLastPost] = useState(0); //현재 페이지의 마지막 아이템 인덱스
  const [currentPost, setCurrentPost] = useState(0); //현재 페이지에서 보여지는 아이템들
  const [count, setCount] = useState("");

  useEffect(() => {
    setCount(guData.length);
    setIndexOfFirstPost(indexOfLastPost - postPerPage);
    setIndexOfLastPost(currentPage * postPerPage);
    setCurrentPost(guData.slice(indexOfFirstPost, indexOfLastPost));
  }, [currentPage, indexOfFirstPost, indexOfLastPost, postPerPage]);

  const handlePageChange = (e) => {
    setCurrentPage(e);
  };

  return (
    <>
      <Header />
      {title.map((item, i) => {
        return (
          <>
            {Number(id) === item.id && (
              <section key={i} id="gu-title-container" className="container">
                <div id="foodGu-title">{item.title}</div>
              </section>
            )}
          </>
        );
      })}
      {currentPost && guData.length > 0 ? (
        currentPost.map((item) => (
          <>
            <div id="foodGu-list-all" className="container">
              <Row className=" row" id="">
                <Col sm={12} className="col-6" id="foodGu-list-wrapper">
                  <section id="foodGu-list">
                    <div className="foodGu-img-box">
                      <img id="foodgu-img" src={item.img} />
                    </div>

                    <div className="foodGu-text-container">
                      <h3 className="foodGu-text-title1">{item.name}</h3>
                      <p className="foodGu-text-title2">{item.address}</p>
                      <p>{item.content}</p>
                    </div>
                  </section>
                </Col>
              </Row>
            </div>
          </>
        ))
      ) : (
        <div></div>
      )}
      <Paging page={currentPage} count={count} setPage={handlePageChange} />

      <Footer />
    </>
  );
};

export default FoodGu;
