import React from "react";
import { TextArea, Button } from "@ui5/webcomponents-react";

function AppIntroduction() {
  return (
    <div className="container">
      <TextArea
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
      />
    </div>
  );
}

export default AppIntroduction;
