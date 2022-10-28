import Header from "./Header";
import Footer from "./Footer";
import "./Revise.css";
import { Container } from "react-bootstrap";

const Revise = ({ openModal, closeModal, modal }) => {
  return (
    <>
      {modal ? (
        <div className="revise-wrapper">
          <section className="revise-container container">
            <div className="revise-title-wrapper">
              <h2 className="revise-title">기본정보 수정</h2>
              <div className="revise-close-btn-wrapper">
                <button className="revise-close-btn" onClick={closeModal}>
                  x
                </button>
              </div>
            </div>

            <div className="revise-body">
              <div className="revise-item">
                <span className="revise-name">이름</span>
                <input type="text" className="revise-input-name"></input>
              </div>

              <div className="revise-item">
                <span className="revise-name">휴대폰 번호</span>
                <input
                  type="text"
                  oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1')"
                  className="revise-input-number"
                ></input>
              </div>

              <div className="revise-item">
                <span className="revise-name">비밀번호</span>
                <input type="" className="revise-input-pw"></input>
              </div>

              <div className="revise-item">
                <span className="revise-name">출생년도</span>
                <input type="date" className="revise-input-birth"></input>
              </div>
            </div>

            <div>
              <button className="revise-basic-button">기본정보 수정하기</button>
            </div>
          </section>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default Revise;
