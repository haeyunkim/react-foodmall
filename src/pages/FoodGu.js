import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Container, Col, Row } from "react-bootstrap";
import Paging from "../components/Paging";
import "./FoodGu.css";
import storeApi from "../apis/storeApi";
import axios from "axios";

const FoodGu = () => {
  const navigate = useNavigate();
  let [guData, setGuData] = useState([]);
  let { name } = useParams();
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

  let findId = title.find((item, i) => {
    return item.id === Number(id);
  });

  let findData = guData.find((item, i) => {
    return item.id === Number(id);
  });

  useEffect(() => {
    handleGuData();
    console.log(guData);
  }, []);

  useEffect(() => {
    if (Array.isArray(guData) && guData.length === 0) return;
    setCount(guData.length);
    setIndexOfFirstPost(indexOfLastPost - postPerPage);
    setIndexOfLastPost(currentPage * postPerPage);
    setCurrentPost(guData.slice(indexOfFirstPost, indexOfLastPost));
  }, [guData, currentPage, indexOfFirstPost, indexOfLastPost, postPerPage]);

  const handleGuData = async () => {
    await storeApi
      .get(`/address?address=${findId.name2}`)
      .then((res) => {
        setGuData(res.data.list);
        console.log(res.data.list);
      })
      .catch((err) => {
        console.log(err, "클릭에러");
      });
  };

  const handlePageChange = (e) => {
    setCurrentPage(e);
  };

  return (
    <>
      <Header />
      <section id="gu-title-container" className="container">
        <div id="foodGu-title">{findId.title}</div>
      </section>

      {currentPost && guData.length > 0 ? (
        currentPost.map((item, i) => (
          <div key={i}>
            <div id="foodGu-list-all" className="container">
              <Row className=" row">
                <Col sm={12} className="col-6" id="foodGu-list-wrapper">
                  <section
                    id="foodGu-list"
                    onClick={() => {
                      navigate(`/store/address/${findId.id}/${item.id}`);
                    }}
                  >
                    <div className="foodGu-img-box">
                      <img id="foodgu-img" src={item.img} />
                    </div>

                    <div className="foodGu-text-container container">
                      <h3 className="foodGu-text-title1">{item.name}</h3>
                      <p className="foodGu-text-title2">{item.address}</p>
                      <p className="foodGu-score">{item.score.toFixed(1)}</p>
                    </div>
                  </section>
                </Col>
              </Row>
            </div>
          </div>
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
