import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Addstudent } from "./Page/NewUser/addstudent";
import { Addstudentuser } from "./Page/NewUser/addstudentuser";
import { Addstudentgakka } from "./Page/NewUser/addstudentgakka";
import { Addstudentkakunin } from "./Page/NewUser/addstudentkakunin";
function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Addstudent />} />
      <Route path="/adduser" element={<Addstudentuser />} />
      <Route path="/addgakka" element={<Addstudentgakka />} />
      <Route path="/addkakunin" element={<Addstudentkakunin />} />
      </Routes>
    </Router>
  );
}

export default App;
