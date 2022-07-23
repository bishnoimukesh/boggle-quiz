import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Homepage, Categories, Quiz, Result } from "./pages";
import { Nav } from "./components/Nav";

function App() {
  return (
    <>
      <Nav/>
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/categories" element={<Categories />}></Route>
        <Route path="/quiz/:quizId" element={<Quiz />}></Route>
        <Route path="/result" element={<Result />}></Route>
      </Routes>
    </>
  );
}

export default App;
