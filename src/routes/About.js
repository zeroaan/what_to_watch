import React from "react";
import "./About.css";

function About() {
  return (
    <div className="about__container">
      <h2 className="about__me">ABOUT ME</h2>
      <a
        href="https://github.com/zeroaan"
        className="about__icon"
        target="__blank"
      >
        <i class="fab fa-github"></i>
      </a>
      <p className="about__desc">
        React로 만든 첫 번째 앱입니다.
        <br />
        컴포넌트를 생성하고 사용하는 방법,
        <br />
        라우터와 라우트를 통해 페이지 이동을 해봤습니다.
      </p>
    </div>
  );
}

export default About;
