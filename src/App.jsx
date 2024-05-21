import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Toppage } from "./Page/toppage";
import { LoginPage } from "./Page/Login";
import { SearchCompany } from "./Page/SearchCompany";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SearchCompany />} />
        <Route path="/LoginPage" element={<LoginPage />} />
      </Routes>
    </Router>
  );
}

export default App;
