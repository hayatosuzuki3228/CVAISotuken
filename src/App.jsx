import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { TestPage } from "./Page/TestPage";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TestPage />} />
      </Routes>
    </Router>
  );
}

export default App;
