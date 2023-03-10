import React from "react";
import "../Styles/Navbar.css";
import Logo from "../../assets/images/imdb-logo.png";
import ShellBar from "@ui5/webcomponents-fiori/dist/ShellBar";

function Navbar() {
  return (
    <>
      <ShellBar
        logo={<img alt="IMDb Logo" src={Logo} />}
        primaryTitle="IMDb search"
        className="center"
      />
    </>
  );
}

export default Navbar;
