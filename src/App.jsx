import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Addstudent } from "./Page/addstudent";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Addstudent />} />
      </Routes>
    </Router>
  );
}

export default App;
