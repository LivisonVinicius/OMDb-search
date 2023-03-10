import React from "react";
import { Text, Title } from "@ui5/webcomponents-react";

function AppIntroduction() {
  return (
    <div>
      <Title
        className="title"
        style={{
          color: "black",
          "font-size": "24px",
          "font-family": "Arial, Helvetica, sans-serif",
          "font-weight": "bold",
          "margin-top": "30px",
          "margin-bottom": "15px",
          "text-align": "center",
        }}
      >
        Buscador de filmes
      </Title>
      <Text>Digite no na barra de pesquisa o título de filme desejado.</Text>
    </div>
  );
}

export default AppIntroduction;
