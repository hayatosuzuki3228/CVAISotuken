import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { SProfile } from "./Page/profile-st";
import { SEdit } from "./Page/profile-st-edit";
import { SCompany } from "./Page/profile-st-com";
import { SCEdit } from "./Page/profile-st-com-edit";
import { CProfile } from "./Page/profile-com";
import { CEdit } from "./Page/profile-com-edit";
import { Matching } from "./Page/matching";
import { Matchtable } from "./Page/matchtable";
import { Matchscore } from "./Page/matchscore";
import { Conditions } from "./Page/Conditions";
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
          <Route path="/LoginPage" element={<LoginPage />} />
          <Route path="/addstudent" element={<Addstudent />} />
          <Route path="/adduser" element={<Addstudentuser />} />
          <Route path="/addgakka" element={<Addstudentgakka />} />
          <Route path="/addkakunin" element={<Addstudentkakunin />} />
          <Route path="/profile-st" element={<SProfile />} />
          <Route path="/profile-st-edit" element={<SEdit />} />
          <Route path="/profile-st-com" element={<SCompany />} />
          <Route path="/profile-st-com-edit" element={<SCEdit />} />
          <Route path="/profile-com" element={<CProfile />} />
          <Route path="/profile-com-edit" element={<CEdit />} />
        </Routes>
      </Router>
    </MyProvider>
  );
}

export default App;
