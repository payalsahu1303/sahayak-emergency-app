import { Routes, Route, Navigate } from "react-router-dom";
import Emergency from "./pages/Emergency";
// import other pages here later (Home, About, etc.)

function App() {
  return (
    <Routes>
      {/* Default page */}
      <Route path="/" element={<Navigate to="/emergency" replace />} />

      {/* Emergency page */}
      <Route path="/emergency" element={<Emergency />} />

      {/* Add more pages here */}
      {/* <Route path="/home" element={<Home />} /> */}
    </Routes>
    
  );
}

export default App;
