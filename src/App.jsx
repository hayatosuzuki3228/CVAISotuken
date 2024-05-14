import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Toppage } from "./Page/toppage";
import { LoginPage } from "./Page/Login";
import { TestPage } from "./Page/TestPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Toppage />} />
        <Route path="/LoginPage" element={<LoginPage />} />
        <Route path="/Testpage" element={<TestPage />} />
      </Routes>
    </Router>
  );
}

export default App;
