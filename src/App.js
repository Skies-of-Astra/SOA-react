import { Routes, Route } from "react-router-dom";
import "./css/tokens.css";
// import "./App.css";

import HomePage from "./pages/HomePage.js";

function App() {
  // window.addEventListener("scroll", () => {
  //   console.log("Scrolling");
  // });
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
