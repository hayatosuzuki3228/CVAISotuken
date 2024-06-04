import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Matching } from "./Page/matching";
import { Matchtable } from "./Page/matchtable";
import { Matchscore } from "./Page/matchscore";
import { Conditions } from "./Page/Conditions";
import { Conditions2 } from "./Page/Conditions2";
import { Toppage } from "./Page/toppage";
import { LoginPage } from "./Page/Login";
import { MyProvider } from "./provider/provider";
import "normalize.css";
function App() {
  return (
    <MyProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Toppage />} />
          <Route path="/Matchtable" element={<Matchtable />} />
          <Route path="/Matching" element={<Matching />} />
          <Route path="/Matchscore" element={<Matchscore />} />
          <Route path="/Conditions" element={<Conditions />} />
          <Route path="/Conditions2" element={<Conditions2 />} />
          <Route path="/LoginPage" element={<LoginPage />} />
        </Routes>
      </Router>
    </MyProvider>
  );
}

export default App;
