import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Matching } from "./Page/matching";
import { Matchtable } from "./Page/matchtable";
import { Matchscore } from "./Page/matchscore";
import { Conditions } from "./Page/Conditions";
import { Conditions2 } from "./Page/Conditions2";
import { Toppage } from "./Page/toppage";
import { LoginPage } from "./Page/Login";
import { MyProvider } from "./provider/provider";
import { Addstudent } from "./Page/NewUser/addstudent";
import { Addstudentuser } from "./Page/NewUser/addstudentuser";
import { Addstudentgakka } from "./Page/NewUser/addstudentgakka";
import { Addstudentkakunin } from "./Page/NewUser/addstudentkakunin";
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
          <Route path="/addstudent" element={<Addstudent />} />
          <Route path="/adduser" element={<Addstudentuser />} />
          <Route path="/addgakka" element={<Addstudentgakka />} />
          <Route path="/addkakunin" element={<Addstudentkakunin />} />
        </Routes>
      </Router>
    </MyProvider>
  );
}

export default App;
