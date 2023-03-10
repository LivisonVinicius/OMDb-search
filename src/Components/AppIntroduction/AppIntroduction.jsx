import React from "react";
import { TextArea, Button, Input } from "@ui5/webcomponents-react";

function AppIntroduction() {
  return (
    <div className="container">
      <Input
        accessibleName="film"
        accessibleNameRef="film"
        onInput={function state() {}}
        placeholder="Movie's name here"
        value="film"
      />
      <Button
        design="Default"
        icon="search"
        onClick={function search() {}}
        accessibleName="search"
        style={{
          color: "white",
          "background-color": "#cee000",
        }}
      />
    </div>
  );
}

export default AppIntroduction;
