import logo from './logo.svg';
import './App.css';
import React from "react";
import MedHome from './js/MedHome';
import MedCompanyProfile from './js/MedCompanyProfile';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MedHome />} />
        <Route path="company-profile" element={<MedCompanyProfile />} />
      </Routes>
    </BrowserRouter>
  )
}







