// import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar.jsx';
import NotFound from './components/NotFound.jsx';
import HomePage from './pages/HomePage';

function App() {
  return (
    <div className="App">
      {/* Navigation Bar - แสดงในทุกหน้า */}
      <Navbar />
      <main className="main-content">
      <Routes>
        <Route path="/" element={<HomePage />} />

        {/* หน้า 404 - สำหรับ URL ที่ไม่มีอยู่ */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      </main>
      {/* Footer - แสดงในทุกหน้า */}
      {/* <Footer /> */}
    </div>
  );
}

export default App;