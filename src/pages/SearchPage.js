import Header from "../components/Header";
import Search from "../components/Search";
import { useState, useEffect } from "react";
import storeApi from "../apis/storeApi";
import { useParams } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import FoodListDetail from "./foodListDetail";
import { ConstructionOutlined } from "@mui/icons-material";

const SearchPage = () => {
  const [searchList, setSearchList] = useState([]);
  const [count, setCount] = useState("");
  const navigate = useNavigate();
  let { word } = useParams();
  let { id } = useParams();
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

  let findId = title.find((item, i) => {
    return item.id === Number(id);
  });

  useEffect(() => {
    handleSearch();
  }, []);

  const handleSearch = async () => {
    await storeApi
      .get(`name?name=${word.slice(1)}`)
      .then((res) => {
        console.log("검색기능2", res);
        setSearchList(res.data.list);
        setCount(res.data.count);
      })
      .catch((err) => {
        console.log("검색기능2 에러", err);
      });
  };

  const handleNavigate = (item, i) => {
    if (searchList[i].address.includes("대덕구")) {
      navigate(`/store/address/0/${item.id}`);
    }
    if (searchList[i].address.includes("유성구")) {
      navigate(`/store/address/1/${item.id}`);
    }
    if (searchList[i].address.includes("서구")) {
      navigate(`/store/address/2/${item.id}`);
    }
    if (searchList[i].address.includes("중구")) {
      navigate(`/store/address/3/${item.id}`);
    }
    if (searchList[i].address.includes("동구")) {
      navigate(`/store/address/4/${item.id}`);
    }
  };

  return (
    <>
      <Header />
      <section className="count-container container">
        <div>{word.slice(1)}에 대한 음식점입니다</div>
        <p>총{count}건</p>
      </section>
      {searchList.map((item, i) => {
        return (
          <div key={i}>
            <div id="foodGu-list-all" className="container">
              <Row className=" row">
                <Col sm={12} className="col-6" id="foodGu-list-wrapper">
                  <section
                    id="foodGu-list"
                    onClick={() => {
                      handleNavigate(item, i);
                    }}
                  >
                    <div className="foodGu-img-box">
                      <img id="foodgu-img" src="" />
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
        );
      })}
    </>
  );
};

export default SearchPage;
