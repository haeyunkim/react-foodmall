import "./Editor.css";
import { Container, Row, Col } from "react-bootstrap";
const Editor = () => {
  return (
    <section className="container editor-container">
      <div className="editor-title-wrapper">
        <h2 className="editor-title">대전 대표 음식 Best</h2>
      </div>

      <div className="container editor-wrapper row">
        <div className="editor-box col">
          <img
            src="https://mp-seoul-image-production-s3.mangoplate.com/1623/322577_1564500533408_11790?fit=around|738:738&crop=738:738;*,*&output-format=jpg&output-quality=80"
            className="editor-img"
          />
          <h2 className="editor-item1">칼국수 맛집</h2>
          <p className="editor-item2">구수하이</p>
        </div>

        <div className="editor-box col">
          <img
            src="https://media.istockphoto.com/photos/samgyetang-ginseng-chicken-soup-picture-id475396574?k=20&m=475396574&s=612x612&w=0&h=cRyhGkF8wLKHtWJIjpy0TKC8AyvHD5UZjOo-RiJ6t5Q="
            className="editor-img"
          />
          <h2 className="editor-item1">삼계탕 맛집</h2>
          <p className="editor-item2">쳐</p>
        </div>

        <div className="editor-box col">
          <img
            src="https://t1.daumcdn.net/thumb/R720x0.fjpg/?fname=http://t1.daumcdn.net/brunch/service/user/6V7H/image/co3xWP4HiXvSgy41Fg4RsXWECXM.jpg"
            className="editor-img"
          />
          <h2 className="editor-item1">설렁탕 맛집</h2>
          <p className="editor-item2">죽이누</p>
        </div>
      </div>
    </section>
  );
};

export default Editor;
