import "./findIdConfirm.css";
import axios from "axios";
import { Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { changeFindIdConfirmMode } from "../store/loginModal";

const FindIdConfirm = ({ myId }) => {
  const dispatch = useDispatch();
  let findIdConfirmModal = useSelector((state) => state.findIdConfirmModal);

  return (
    <>
      {findIdConfirmModal ? (
        <div className="container findIdConfirm-wrapper">
          <section className="findIdConfirm-container ">
            <div className="findIdConfirm-header">
              <h2 className="findIdConfirm-title">아이디찾기</h2>
              <button
                className="findIdConfirm-btn"
                onClick={() => {
                  dispatch(changeFindIdConfirmMode(false));
                }}
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

export default FindIdConfirm;
