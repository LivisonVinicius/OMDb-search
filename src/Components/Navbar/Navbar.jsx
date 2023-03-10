import React from "react";
import "./Navbar.css";
import Logo from "../../assets/images/imdb-logo.png";
import { FlexBox } from "@ui5/webcomponents-react";

function Navbar() {
  return (
    <header>
      <FlexBox>
        <img src={Logo} alt="Logo image" />
        <h1>IMDb searcher</h1>
      </FlexBox>
    </header>
  );
}

export default Navbar;
