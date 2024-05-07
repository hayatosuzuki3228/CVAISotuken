import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Toppage } from "./Page/toppage";
import { TestPage } from "./Page/TestPage";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Toppage />} />
        <Route path="/test" element={<TestPage />} />
      </Routes>
    </Router>
  );
}

export default App;
