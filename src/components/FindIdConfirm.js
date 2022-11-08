import "./findIdConfirm.css";
import { Container } from "react-bootstrap";

const findIdConfirm = ({
  myId,
  findIdConfirmCloseModal,
  findIdConfirmModal,
}) => {
  return (
    <>
      {findIdConfirmModal ? (
        <div className="container findIdConfirm-wrapper">
          <section className="findIdConfirm-container ">
            <div className="findIdConfirm-header">
              <h2 className="findIdConfirm-title">아이디찾기</h2>
              <button
                className="findIdConfirm-btn"
                onClick={findIdConfirmCloseModal}
              >
                X
              </button>
            </div>

            <div className="findIdConfirm-body">
              <span>내 아이디는</span>
              <span className="findIdConfirm-myid">{myId}</span>
              <span>입니다.</span>
            </div>
          </section>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default findIdConfirm;
