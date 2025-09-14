import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Components/HomePage";
import LovePage from "./Components/LovePage"; 
import Last from "./Components/Last"; // Right image component


function App() {
  return (
    <Router>
      

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/memories" element={<LovePage />} /> {/* button redirect */}
        <Route path="/last" element={<Last />} /> 
      </Routes>
    </Router>
  );
}

export default App;
