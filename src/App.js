import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import AppIntroduction from "./Components/AppIntroduction/AppIntroduction";
import MainContent from "./Components/MainContent/MainContent";

function App() {
  return (
    <div className="app">
      <Navbar />
      <section>
        <AppIntroduction />
        <MainContent />
      </section>
    </div>
  );
}

export default App;
