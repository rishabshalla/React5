import "./App.css";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Student from "./Components/Student";
import Contact from "./Components/Contact";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import AddStudent from "./Components/AddStudent";
import { StudentAPI } from "./Components/StudentContext";
import UpdateStudent from "./Components/UpdateStudent";

function App() {
  return (
    <StudentAPI>
      <div className="App">
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/home" element={<Home />} />
            <Route exact path="/student" element={<Student />} />
            <Route path="/student/addStudent" element={<AddStudent />} />
            <Route path="/student/edit/:ID" element={<UpdateStudent />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/*" element={<Navigate to="/home" />} />
          </Routes>
        </Router>
      </div>
    </StudentAPI>
  );
}

export default App;
