import { ShellBar } from "@ui5/webcomponents-react";
import "./App.scss";
import Logo from "./assets/images/imdb-logo.png";

function App() {
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

export default App;
