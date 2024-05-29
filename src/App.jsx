import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Matching } from "./Page/matching";
import { Conditions } from "./Page/Conditions";
import { Conditions2 } from "./Page/Conditions2";
import { Toppage } from "./Page/toppage";
import { LoginPage } from "./Page/Login";
import { TestPage } from "./Page/TestPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Toppage />} />
        <Route path="/Matching" element={<Matching />} />
        <Route path="/Conditions" element={<Conditions />} />
        <Route path="/Conditions2" element={<Conditions2 />} />
        <Route path="/LoginPage" element={<LoginPage />} />
        <Route path="/Testpage" element={<TestPage />} />
      </Routes>
    </Router>
  );
}

export default App;
