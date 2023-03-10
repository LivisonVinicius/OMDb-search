import "./App.css";
import Navbar from "./Components/Navbar/Navbar";

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
