import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Matching } from "./Page/matching";
import "normalize.css";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Matching />} />
      </Routes>
    </Router>
  );
}

export default App;
