import Header from "../components/Header";
import Footer from "../components/Footer";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const FoodListDetail = () => {
  let { id } = useParams();
  const guData = useSelector((state) => state.guData);
  let findData = guData.find((item, i) => {
    return item.id === Number(id);
  });

  return (
    <div>
      <Header />
      {findData ? (
        <div>
          <div>
            <section>
              <img width="20%" />
              사진
              <img width="20%" />
              사진
              <img width="20%" />
              사진
              <div></div>
            </section>
          </div>

          <section>
            <div>{findData.name}</div>
          </section>

          <div>
            <section>
              <div>
                <span>주소:</span>
                {findData.address}
              </div>
              <div>
                <span>전화번호:</span>
                {findData.tell}
              </div>
              <div>
                <span>음식종류:</span>
                {findData.type}
              </div>

              <div>
                <span>대표메뉴:</span>
                {findData.representative_menu}
              </div>
              <div>
                <span>영업시간:</span>
                {findData.operating_time}
              </div>
            </section>
          </div>
        </div>
      ) : (
        <div></div>
      )}

      <Footer />
    </div>
  );
};

export default FoodListDetail;
