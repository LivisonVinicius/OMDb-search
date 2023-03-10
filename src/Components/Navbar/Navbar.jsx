import React from "react";
import "./Navbar.css";
import Logo from "../../assets/images/imdb-logo.png";
import { FlexBox } from "@ui5/webcomponents-react";

function Navbar() {
  return (
    <header>
      <FlexBox alignItems="Center" justifyContent="Center" wrap="Wrap">
        <img src={Logo} alt="Logo image" />
        <h1>Searcher</h1>
      </FlexBox>
    </header>
  );
}

export default Navbar;
