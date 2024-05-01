import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Profile } from "./Page/profile";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={< Profile />} />
      </Routes>
    </Router>
  );
}

export default App;
