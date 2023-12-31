import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './Login.js';
import Register from './Register.js';

function App() {
  return (
    <BrowserRouter>
  <Routes>
    <Route path="/" element={<Login />} />
    <Route path="/Register" element={<Register />} />
  </Routes>
</BrowserRouter>

  );
}

export default App;                       