import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Container, Col, Row } from "react-bootstrap";
import Paging from "../components/Paging";
import "./FoodGu.css";

const FoodGu = () => {
  const [title, setTitle] = useState([
    {
      id: 0,
      title: "대덕구 음식점",
    },
    {
      id: 1,
      title: "유성구 음식점",
    },
    {
      id: 2,
      title: "서구 음식점",
    },
    {
      id: 3,
      title: "중구 음식점",
    },
    {
      id: 4,
      title: "동구 음식점",
    },
  ]);

  const [test, setTest1] = useState([
    {
      img: "https://mp-seoul-image-production-s3.mangoplate.com/2039075_1629353806675235.jpg?fit=around|512:512&crop=512:512;*,*&output-format=jpg&output-quality=80",
      title: "사과",
      address: "븅신",
      content: "나는 병신",
    },
    {
      img: "https://mp-seoul-image-production-s3.mangoplate.com/2039075_1629353805535208.jpg?fit=around|512:512&crop=512:512;*,*&output-format=jpg&output-quality=80",
      title: "파인애플",
      address: "병신",
      content: "너도병신",
    },
    {
      img: "https://mp-seoul-image-production-s3.mangoplate.com/supporters_admin/srfp-oodne1g-w.jpg?fit=around|512:512&crop=512:512;*,*&output-format=jpg&output-quality=80",
      title: "복숭아",
      address: "가나다",
      content: "우린병신",
    },
    {
      img: "https://mp-seoul-image-production-s3.mangoplate.com/16835/1097442_1635663674187_29399?fit=around|512:512&crop=512:512;*,*&output-format=jpg&output-quality=80",
      title: "포도",
      address: "유성구",
      content: "아자아자",
    },
    {
      img: "https://mp-seoul-image-production-s3.mangoplate.com/16835/1097442_1635663674187_29399?fit=around|512:512&crop=512:512;*,*&output-format=jpg&output-quality=80",
      title: "포도",
      address: "유성구",
      content: "아자아자",
    },
    {
      img: "https://mp-seoul-image-production-s3.mangoplate.com/16835/1097442_1635663674187_29399?fit=around|512:512&crop=512:512;*,*&output-format=jpg&output-quality=80",
      title: "포도",
      address: "유성구",
      content: "아자아자",
    },
    {
      img: "https://mp-seoul-image-production-s3.mangoplate.com/16835/1097442_1635663674187_29399?fit=around|512:512&crop=512:512;*,*&output-format=jpg&output-quality=80",
      title: "포도",
      address: "유성구",
      content: "아자아자",
    },
    {
      img: "https://mp-seoul-image-production-s3.mangoplate.com/16835/1097442_1635663674187_29399?fit=around|512:512&crop=512:512;*,*&output-format=jpg&output-quality=80",
      title: "포도",
      address: "유성구",
      content: "아자아자",
    },
    {
      img: "https://mp-seoul-image-production-s3.mangoplate.com/16835/1097442_1635663674187_29399?fit=around|512:512&crop=512:512;*,*&output-format=jpg&output-quality=80",
      title: "포도",
      address: "유성구",
      content: "아자아자",
    },
    {
      img: "https://mp-seoul-image-production-s3.mangoplate.com/16835/1097442_1635663674187_29399?fit=around|512:512&crop=512:512;*,*&output-format=jpg&output-quality=80",
      title: "포도",
      address: "유성구",
      content: "아자아자",
    },
    {
      img: "https://mp-seoul-image-production-s3.mangoplate.com/16835/1097442_1635663674187_29399?fit=around|512:512&crop=512:512;*,*&output-format=jpg&output-quality=80",
      title: "포도",
      address: "유성구",
      content: "아자아자",
    },
    {
      img: "https://mp-seoul-image-production-s3.mangoplate.com/16835/1097442_1635663674187_29399?fit=around|512:512&crop=512:512;*,*&output-format=jpg&output-quality=80",
      title: "포도",
      address: "유성구",
      content: "아자아자",
    },
  ]);
  let { id } = useParams();
  const [item, setItem] = useState([]); //아이템
  const [count, setCount] = useState(); //아이템 총 수
  const [currentPage, setCurrentPage] = useState(1); //현재 페이지
  const [postPerPage] = useState(10); //페이지당 게시물 개수
  const [indexOfFirstPost, setIndexOfFirstPost] = useState(0); //현재 페이지의 첫번째 아이템 인덱스
  const [indexOfLastPost, setIndexOfLastPost] = useState(0); //현재 페이지의 마지막 아이템 인덱스
  const [currentPost, setCurrentPost] = useState(0); //현재 페이지에서 보여지는 아이템들

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setItem(data));
  }, []);

  useEffect(() => {
    setCount(item.length);
    setIndexOfFirstPost(indexOfLastPost - postPerPage);
    setIndexOfLastPost(currentPage * postPerPage);
    setCurrentPost(item.slice(indexOfFirstPost, indexOfLastPost));
  }, [currentPage, indexOfFirstPost, indexOfLastPost, item, postPerPage]);

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
      {currentPost && item.length > 0 ? (
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
                      <h3 className="foodGu-text-title1">{item.title}</h3>
                      <p className="foodGu-text-title2">{item.id}</p>
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
