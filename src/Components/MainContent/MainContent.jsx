import { Title, Icon } from "@ui5/webcomponents-react";
import React from "react";

function MainContent() {
  return (
    <div className="containerContent">
      <div className="titleBar">
        <Title>Titulo</Title>
        <Icon name="heart-2" style={{ color: "red", "font-size": "16px" }} />
      </div>
    </div>
  );
}

export default MainContent;
