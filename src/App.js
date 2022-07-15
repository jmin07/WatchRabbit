import { Routes, Route } from "react-router-dom";
import Title from "./routes/Title";
import SignUp from "./routes/SignUp";
import "./style/main.css";
import Trace from "./routes/Trace";
import Home from "./routes/Home";
import EasyData from "./routes/EasyData";
import ForgotPW from "./routes/ForgotPW";
import Header from "./components/Header";
import { useLocation } from "react-router-dom";

function App() {
  const location = useLocation();


  return (
    <div>
      <Header />
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Title />} />
          <Route path="home" element={<Home />} />
          <Route path="trace" element={<Trace />} />
          <Route path="data" element={<EasyData />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="forgotpw" element={<ForgotPW />} />
        </Routes>
    </div>
  );
}

export default App;
