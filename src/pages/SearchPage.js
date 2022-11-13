import Header from "../components/Header";
import Search from "../components/Search";
import { useState, useEffect } from "react";

const SearchPage = () => {
  useEffect(() => {}, []);

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
  return (
    <>
      <Header />
      <Search />
      <div></div>
    </>
  );
};

export default SearchPage;
