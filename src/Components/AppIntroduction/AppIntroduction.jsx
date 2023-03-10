import React from "react";
import { Button, Input } from "@ui5/webcomponents-react";
import "./AppIntroduction.css";

function AppIntroduction() {
  return (
    <div className="container">
      <Input
        accessibleName="film"
        accessibleNameRef="film"
        onInput={function state() {}}
        placeholder="Movie's name here"
        value="film"
        className="searchBar"
      />
      <Button
        icon="sap-icon://search"
        onClick={function search() {}}
        accessibleName="search"
        style={{
          color: "white",
          "background-color": "#cee000",
          "margin-left": "10px",
        }}
      >
        Search
      </Button>
    </div>
  );
}

export default AppIntroduction;
