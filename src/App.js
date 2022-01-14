import logo from './logo.svg';
import './css/App.css';
import React from "react";
import MedHome from './js/MedHome';
import MedCompanyProfile from './js/MedCompanyProfile';
import MedProductDetails from './js/MedProductDetails';
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
        <Route path="products" element={<MedProductDetails />}>
          <Route path=":productId" element={<MedProductDetails />} />
        
          </Route>
      </Routes>
    </BrowserRouter>
  )
}







