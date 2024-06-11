import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from "./components/Header"
import Footer from "./components/Footer"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import './styles/main.scss'
import Contact from './pages/Contact';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <BrowserRouter>
    <Header />

    <Routes>
      <Route path="/" element={<About />} />
      <Route path="/about" element={<Home />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="*" element={<About />} />
    </Routes >
    <Footer />

  </BrowserRouter>

  // </React.StrictMode>
);

