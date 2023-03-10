import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import AppIntroduction from "./Components/AppIntroduction/AppIntroduction";

function App() {
  return (
    <div className="app">
      <Navbar />
      <section>
        <AppIntroduction />
      </section>
    </div>
  );
}

export default App;
