import axios from "axios";
import { useState } from "react";
import Data from "../data";
import Header from "./Header";

const FoodList = () => {
  let [data, setData] = useState(Data);
  return (
    <>
      <div>
        <Header />
      </div>

      <button
        onClick={() => {
          axios
            .get("http://43.200.99.107:8080/hello-api")
            .then((result) => {
              console.log(result.data);
              let copy = [...data, ...result.data];
              setData(copy);
            })
            .catch(() => {
              console.log("fail");
            });
        }}
      >
        클릭
      </button>
      {data.map((item, i) => {
        return (
          <div key={i}>
            <div>{item.name}</div>
            <div>{item.age}</div>
            <div>{item.job}</div>
          </div>
        );
      })}
    </>
  );
};

export default FoodList;
