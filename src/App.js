import "./App.css";
import Mockman from "mockman-js";
import { Route, Routes } from "react-router-dom";
import { Homepage } from "./pages/Homepage";
import { Nav } from "./components/Nav";

function App() {
  return (
    <>
      <Nav/>
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
      </Routes>
    </>
  );
}

export default App;
