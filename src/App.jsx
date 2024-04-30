import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { toppage } from "./Page/toppage";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<toppage />} />
      </Routes>
    </Router>
  );
}

export default App;
