import { ShellBar } from "@ui5/webcomponents-react";
import "./App.css";
import Logo from "./assets/images/imdb-logo.png";

function App() {
  return (
    <>
      <ShellBar logo={<img alt="IMDb Logo" src={Logo} />} />
    </>
  );
}

export default App;
