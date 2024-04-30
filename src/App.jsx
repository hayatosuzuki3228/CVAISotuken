import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Toppage } from "./Page/toppage";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Toppage />} />
      </Routes>
    </Router>
  );
}

export default App;
