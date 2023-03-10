import { Title, Icon, RatingIndicator } from "@ui5/webcomponents-react";
import React from "react";
import "./MainContent.css";

function MainContent() {
  return (
    <div className="containerContent">
      <div className="titleBar">
        <Title>Titulo</Title>
        <Icon name="heart-2" style={{ color: "red", "font-size": "16px" }} />
      </div>
      <div className="content">
        <div className="leftContent">
          <img src="" alt="Poster" />
          <RatingIndicator value={0} style={{ "font-size": "28px" }} />
        </div>
        <div className="rightContent">
          <p>
            Actor: <span> </span>
          </p>
          <p>
            Sinopse:<span> </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default MainContent;
