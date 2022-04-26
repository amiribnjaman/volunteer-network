import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home/Home";
import NavBar from "./Components/Shared/NavBar/NavBar";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
