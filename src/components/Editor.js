import "./Editor.css";
import { Container, Row, Col } from "react-bootstrap";
import { useEffect } from "react";
import storeApi from "../apis/storeApi";
import { useState } from "react";
const Editor = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    handleAllStoreData();
  }, []);

  const handleAllStoreData = () => {
    storeApi
      .get("/all")
      .then((res) => {
        console.log(res, "전체데이터 성공");
        setData(res.data.list);
      })
      .catch((err) => {
        console.log(err, "전체 데이터 에러");
      });
  };

  return (
    <div className="container editor-container">
      <div className="editor-title-wrapper">
        <h2 className="editor-title">양식 대표 맛집 Best5</h2>
      </div>
      {data.map((item, i) => {
        return (
          <div className="container editor-wrapper row">
            <div className="editor-box col">
              <img
                src="https://mp-seoul-image-production-s3.mangoplate.com/1623/322577_1564500533408_11790?fit=around|738:738&crop=738:738;*,*&output-format=jpg&output-quality=80"
                className="editor-img"
              />
              <h2 className="editor-item1">칼국수 맛집</h2>
              <p className="editor-item2">1</p>
            </div>
          </div>
        );
      })}

      {/* <div className="editor-box col">
          <img
            src="https://media.istockphoto.com/photos/samgyetang-ginseng-chicken-soup-picture-id475396574?k=20&m=475396574&s=612x612&w=0&h=cRyhGkF8wLKHtWJIjpy0TKC8AyvHD5UZjOo-RiJ6t5Q="
            className="editor-img"
          />
          <h2 className="editor-item1">삼계탕 맛집</h2>
          <p className="editor-item2">2</p>
        </div>

        <div className="editor-box col">
          <img
            src="https://t1.daumcdn.net/thumb/R720x0.fjpg/?fname=http://t1.daumcdn.net/brunch/service/user/6V7H/image/co3xWP4HiXvSgy41Fg4RsXWECXM.jpg"
            className="editor-img"
          />
          <h2 className="editor-item1">설렁탕 맛집</h2>
          <p className="editor-item2">3</p>
        </div> */}
    </div>
  );
};

export default Editor;
