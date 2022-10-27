import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Footer.css";

const Footer = () => {
  return (
    <Container className="footer-container container ">
      <div className="footer-wrap ">
        <section className="first-footer">
          <a>개인정보처리방침</a>
          <span className="gray">|</span>
          <a>이용약관</a>
          <span className="gray">|</span>
          <a>위치기반 서비스 이용약관</a>
        </section>

        <section className="second-footer">
          <a className="meal-title">(주)오늘의식사</a>
          <span className="gray">|</span>
          <a>대표이사 : 김회윤,민인규</a>
          <span className="gray">|</span>
          <a>소재지 : 대전광역시 유성구</a>
        </section>

        <section className="third-footer">
          <a>이메일 문의 : ghldbs2311@gmail.com</a>
        </section>

        <section className="fourth-footer">
          <div>
            <p>전화 문의 : 042-123-456(평일:10:00~18:00, 주말/공휴일 제외) </p>
          </div>

          <div className="TodaysMeal">
            <p>Copyright©2022TodaysMeal</p>
          </div>
        </section>

        <div className="hidden">맛있게 먹으면 0칼로리</div>
      </div>
    </Container>
  );
};

export default Footer;
