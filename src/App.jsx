import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Aupay from "./pages/Aupay";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aupay" element={<Aupay />} />
      </Routes>
    </Router>
  );
}

export default App;