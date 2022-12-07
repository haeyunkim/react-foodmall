import "./Editor.css";
import { Container, Row, Col } from "react-bootstrap";
import { useEffect } from "react";
import storeApi from "../apis/storeApi";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Editor = () => {
  const navigate = useNavigate();
  const [allData, setAllData] = useState([]);
  const [Korean, setKorean] = useState([]);
  const [Western, setWestern] = useState([]);
  const [chinese, setChinese] = useState([]);
  const [japanese, setJapanese] = useState([]);

  useEffect(() => {
    // handleAllData();
    handleKoreanData();
    handleWesternData();
    handleChineseData();
    handleJapaneseData();
  }, []);

  const handleKoreanData = () => {
    storeApi
      .get("/type?type=Korean")
      .then((res) => {
        console.log(res, "한국음식 성공");

        const copyKorean = res.data.list;
        setKorean(copyKorean.splice(0, 5));
      })
      .catch((err) => {
        console.log(err, "한국음식 에러");
      });
  };

  const handleWesternData = () => {
    storeApi
      .get("/type?type=Western")
      .then((res) => {
        console.log(res, "서양음식 성공");

        const copyWestern = res.data.list;
        setWestern(copyWestern.splice(0, 5));
      })
      .catch((err) => {
        console.log(err, "서양음식 에러");
      });
  };

  const handleChineseData = () => {
    storeApi
      .get("/type?type=Chinese")
      .then((res) => {
        console.log(res, "중국음식 성공");

        const copyChinese = res.data.list;
        setChinese(copyChinese.splice(0, 5));
      })
      .catch((err) => {
        console.log(err, "중국음식 에러");
      });
  };

  const handleJapaneseData = () => {
    storeApi
      .get("/type?type=Japanese")
      .then((res) => {
        console.log(res, "일본음식 성공");

        const copyJapanese = res.data.list;
        setJapanese(copyJapanese.splice(0, 5));
      })
      .catch((err) => {
        console.log(err, "일본음식 에러");
      });
  };

  const handleKoreanZip = (item, i) => {
    if (Korean[i].address.includes("대덕구")) {
      navigate(`/store/address/0/${item.id}`);
      return;
    }
    if (Korean[i].address.includes("유성구")) {
      navigate(`/store/address/1/${item.id}`);
      return;
    }
    if (Korean[i].address.includes("서구")) {
      navigate(`/store/address/2/${item.id}`);
      return;
    }
    if (Korean[i].address.includes("중구")) {
      navigate(`/store/address/3/${item.id}`);
      return;
    }
    if (Korean[i].address.includes("동구")) {
      navigate(`/store/address/4/${item.id}`);
      return;
    }
  };

  const handleWesternZip = (item, i) => {
    if (Western[i].address.includes("대덕구")) {
      navigate(`/store/address/0/${item.id}`);
      return;
    }
    if (Western[i].address.includes("유성구")) {
      navigate(`/store/address/1/${item.id}`);
      return;
    }
    if (Western[i].address.includes("서구")) {
      navigate(`/store/address/2/${item.id}`);
      return;
    }
    if (Western[i].address.includes("중구")) {
      navigate(`/store/address/3/${item.id}`);
      return;
    }
    if (Western[i].address.includes("동구")) {
      navigate(`/store/address/4/${item.id}`);
      return;
    }
  };

  const handleJapaneseZip = (item, i) => {
    if (japanese[i].address.includes("대덕구")) {
      navigate(`/store/address/0/${item.id}`);
      return;
    }
    if (japanese[i].address.includes("유성구")) {
      navigate(`/store/address/1/${item.id}`);
      return;
    }
    if (japanese[i].address.includes("서구")) {
      navigate(`/store/address/2/${item.id}`);
      return;
    }
    if (japanese[i].address.includes("중구")) {
      navigate(`/store/address/3/${item.id}`);
      return;
    }
    if (japanese[i].address.includes("동구")) {
      navigate(`/store/address/4/${item.id}`);
      return;
    }
  };

  const handleChineseZip = (item, i) => {
    if (chinese[i].address.includes("대덕구")) {
      navigate(`/store/address/0/${item.id}`);
      return;
    }
    if (chinese[i].address.includes("유성구")) {
      navigate(`/store/address/1/${item.id}`);
      return;
    }
    if (chinese[i].address.includes("서구")) {
      navigate(`/store/address/2/${item.id}`);
      return;
    }
    if (chinese[i].address.includes("중구")) {
      navigate(`/store/address/3/${item.id}`);
      return;
    }
    if (chinese[i].address.includes("동구")) {
      navigate(`/store/address/4/${item.id}`);
      return;
    }
  };

  return (
    <div className="container editor-container">
      <div className="editor-title-wrapper">
        <h2 className="editor-title">한식 대표 맛집 Best5</h2>
      </div>
      <section className="korean-container container">
        {Korean.map((item, i) => {
          return (
            <div className="container editor-wrapper row" key={i}>
              <div
                className="editor-box col"
                onClick={() => {
                  handleKoreanZip(item, i);
                }}
              >
                <img className="editor-img" />
                <h2 className="editor-item1">{item.name}</h2>
                <p className="editor-item2">{item.address}</p>
              </div>
            </div>
          );
        })}
      </section>
      <div className="editor-title-wrapper">
        <h2 className="editor-title">양식 대표 맛집 Best5</h2>
      </div>
      <section className="western-container container">
        {Western.map((item, i) => {
          return (
            <div className="container editor-wrapper row" key={i}>
              <div
                className="editor-box col"
                onClick={() => {
                  handleWesternZip(item, i);
                }}
              >
                <img className="editor-img" />
                <h2 className="editor-item1">{item.name}</h2>
                <p className="editor-item2">{item.address}</p>
              </div>
            </div>
          );
        })}
      </section>

      <div className="editor-title-wrapper">
        <h2 className="editor-title">중식 대표 맛집 Best5</h2>
      </div>

      <section className="chinese-container container">
        {chinese.map((item, i) => {
          return (
            <div className="container  row" key={i}>
              <div
                className="editor-box col"
                onClick={() => {
                  handleChineseZip(item, i);
                }}
              >
                <img className="editor-img" />
                <h2 className="editor-item1">{item.name}</h2>
                <p className="editor-item2">{item.address}</p>
              </div>
            </div>
          );
        })}
      </section>

      <div className="editor-title-wrapper">
        <h2 className="editor-title">일식 대표 맛집 Best5</h2>
      </div>
      <section className="japanese-container container">
        {japanese.map((item, i) => {
          return (
            <div className="container editor-wrapper row" key={i}>
              <div
                className="editor-box col"
                onClick={() => {
                  handleJapaneseZip(item, i);
                }}
              >
                <img className="editor-img" />
                <h2 className="editor-item1">{item.name}</h2>
                <p className="editor-item2">{item.address}</p>
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default Editor;
