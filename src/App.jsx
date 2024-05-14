import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { SProfile } from "./Page/profile-st";
import { SEdit } from "./Page/profile-st-edit";
import { SCompany } from "./Page/profile-st-com";
import { SCEdit } from "./Page/profile-st-com-edit";
import { CProfile } from "./Page/profile-com";
import { CEdit } from "./Page/profile-com-edit";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/profile-st" element={<SProfile />} />
        <Route path="/profile-st-edit" element={<SEdit />} />
        <Route path="/profile-st-com" element={<SCompany />} />
        <Route path="/profile-st-com-edit" element={<SCEdit />} />
        <Route path="/profile-com" element={<CProfile />} />
        <Route path="/profile-com-edit" element={<CEdit />} />
      </Routes>
    </Router>
  );
}

export default App;
