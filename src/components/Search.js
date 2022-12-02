import { useState } from "react";
import axios from "axios";
import "./Search.css";
import SearchPage from "../pages/SearchPage";
import { useNavigate } from "react-router-dom";
import storeApi from "../apis/storeApi";
import { useEffect } from "react";

const Search = () => {
  const [searchList, setSearchList] = useState([]);
  const [word, setWord] = useState("");
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  useEffect(() => {
    handleData();
  }, []);

  useEffect(() => {
    let filterData = searchList.filter((item) => {
      return item.name.includes(word);
    });
    let sliceFilterData = filterData.slice(0, 5);
    console.log(searchList, "전체데이터 searchlist");
    console.log(filterData, "필터링된 데이터");
    console.log(sliceFilterData, "필터링된 데이터 5개 자르기");
    setData(sliceFilterData);
  }, [word]);

  const handleData = async () => {
    await storeApi
      .get("/all")
      .then((res) => {
        console.log(res, "전체데이터");
        setSearchList(res.data.list);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onSubmit = (e) => {
    e.preventDefault();
  };

  const onChange = (e) => {
    setWord(e.target.value);
    console.log(word);
  };

  const handleEnter = async (e) => {
    if (e.key === "Enter") {
      if (!word) {
        window.alert("검색어를 입력하세요!");
        return;
      }
      navigate(`/foodList/:${word}`);
    }
  };

  return (
    <>
      <section className="search-input-wrapper">
        <form className="search-input-container" onSubmit={onSubmit}>
          <input
            className="search-input"
            type="text"
            value={word}
            placeholder="맛집을 검색하세요"
            size="10"
            autoFocus
            onChange={onChange}
            onKeyPress={handleEnter}
          ></input>
          <button type="submit" className="input-btn"></button>
        </form>
        {word.length > 0 && word ? (
          <section className="autoSearch-container">
            <div className="autoSearch">
              {data.map((item, i) => {
                return <p>{item.name}</p>;
              })}
            </div>
          </section>
        ) : (
          <></>
        )}
      </section>
    </>
  );
};

export default Search;
