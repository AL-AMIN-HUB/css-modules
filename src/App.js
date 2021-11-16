import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Appointments from "./components/Appointments/Appointments";
import Doctors from "./components/Doctors/Doctors";
import Home from "./components/Home/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Link to="/home">Home</Link>
        <Link to="/appointment">Appointment</Link>
        <Link to="/doctor">Doctor</Link>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/appointment" element={<Appointments />} />
          <Route path="/doctor" element={<Doctors />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
