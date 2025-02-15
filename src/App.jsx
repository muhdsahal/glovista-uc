import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ThanksPage from "./pages/ThanksPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/thanks_page" element={<ThanksPage />} />
      </Routes>
    </Router>
  );
};

export default App;
