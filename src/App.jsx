import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Aupay from "./pages/Aupay";
import Contactus from "./pages/Contactus";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aupay" element={<Aupay />} />
        <Route path="/contactus" element={<Contactus/>}/>
      </Routes>
    </Router>
  );
}

export default App;