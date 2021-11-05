import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./Components/header";
import Navbar from "./Components/navbar";
import Slider from "./Components/slider";

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Slider />
    </div>
  );
}

export default App;
