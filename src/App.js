import { BrowserRouter, Routes, Route } from "react-router-dom";
import Title from "./routes/Title";
import Main from "./routes/Main";
import SignUp from "./routes/SignUp";
import Test from "./routes/Test";
import "./style/main.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Title />} />
        <Route path="/main" element={<Main />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
