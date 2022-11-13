import { useState } from "react";
import axios from "axios";
import "./Search.css";
import SearchPage from "../pages/SearchPage";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const [searchList, setSearchList] = useState([
    {
      name: "광천식당",
    },
    {
      name: "미세노센세",
    },
    {
      name: "한영식당",
    },
  ]);
  const [word, setWord] = useState("");
  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
  };

  const onChange = (e) => {
    setWord(e.target.value);
    console.log(word);
  };

  const handleEnter = (e) => {
    if (e.key === "Enter") {
      navigate(`/foodList/:${word}`);
    }
  };

  const onSearch = () => {
    axios
      .post("https://jsonplaceholder.typicode.com/posts", {
        word: word,
      })
      .then((res) => {
        setSearchList(res.data.body);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
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
    </section>
  );
};

export default Search;
