import { Routes, Route } from "react-router-dom";
import "./style/main.css";
// import Trace from "./routes/Trace";
// import Home from "./routes/Home";
// import Header from "./components/Header";
// import EasyData from "./routes/EasyData";
import SignUp from "./routes/SignUp";
import ForgotPW from "./routes/ForgotPW";
import Mainpage from "./routes/Mainpage";
import Datapage from "./routes/Datapage";
import Tracepage from "./routes/Tracepage";
import Title from "./components/Title";

import { useState } from "react";
import { TitleContext } from "./contexts/TitleContext";

function App() {
  const [titleOn, setTitleOn] = useState(true);
  console.log(titleOn);
  return (
    <TitleContext.Provider value={{ titleOn, setTitleOn }}>
      {titleOn ? (
        <Title />
      ) : (
        <Routes>
          <Route path="/" element={<Mainpage />} />
          <Route path="trace" element={<Tracepage />} />
          <Route path="data" element={<Datapage />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="forgotpw" element={<ForgotPW />} />
        </Routes>
      )}
    </TitleContext.Provider>
  );
}

export default App;
