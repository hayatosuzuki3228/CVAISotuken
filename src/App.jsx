import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Matching } from "./Page/matching";
import { Matchtable } from "./Page/matchtable";
import "normalize.css";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Matching />} />
        <Route path="/Matchtable" element={<Matchtable />} />
      </Routes>
    </Router>
  );
}

export default App;
