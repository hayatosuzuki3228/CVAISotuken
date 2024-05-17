import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Toppage } from "./Page/toppage";
import { LoginPage } from "./Page/Login";
import { TestPage } from "./Page/TestPage";
import { Setting } from "./Page/setting";
import { Lostpass } from "./Page/Lostpass";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Toppage />} />
        <Route path="/LoginPage" element={<LoginPage />} />
        <Route path="/Testpage" element={<TestPage />} />
        <Route path="/Setting" element={<Setting />} />
        <Route path="/Lostpass" element={<Lostpass />} />
      </Routes>
    </Router>
  );
}

export default App;
