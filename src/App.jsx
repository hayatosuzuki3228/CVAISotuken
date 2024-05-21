import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Matching } from "./Page/matching";
import { Conditions } from "./Page/Conditions";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Matching />} />
        <Route path="/Conditions" element={<Conditions />} />
      </Routes>
    </Router>
  );
}

export default App;
