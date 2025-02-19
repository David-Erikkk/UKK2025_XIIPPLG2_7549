import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router';
import Login from './components/Login.jsx';
import Registrasi from './components/Registrasi.jsx';
// import Tambahtugas from '../components/Tambahtugas.jsx';
// import Tugas from './components/Tugas.jsx';
import Home from './components/Home';



createRoot(document.getElementById('root')).render(
  <StrictMode>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/login" element={<Login />} />
      <Route path="/registrasi" element={<Registrasi />} />
      {/* <Route path="/tambahtugas" element={<Tambahtugas />} />
      <Route path="/tugas" element={<Tugas />} /> */}
      <Route path="/home" element={<Home />} />

    </Routes>
  </BrowserRouter>
  </StrictMode>
)
