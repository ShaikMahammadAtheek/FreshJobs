import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Freshers from "./pages/Freshers";
import Experience from "./pages/Experience";
import Internship from "./pages/Internship";
import Support from "./pages/Support";
import JobDetails from "./pages/JobDetails";
import Footer from "./components/Footer";

//import "./styles/App.css"; // Ensure your styles are in the correct folder

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="main-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/freshers" element={<Freshers />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/internship" element={<Internship />} />
          <Route path="/support" element={<Support />} />
          <Route path="/job/:id" element={<JobDetails />} />
        </Routes>
      </div>

      <Footer />
    </Router>
  );
};

export default App;
