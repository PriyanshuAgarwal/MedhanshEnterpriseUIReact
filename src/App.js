import logo from './logo.svg';
import './css/App.css';
import React from "react";
import MedHome from './js/MedHome';
import MedCompanyProfile from './js/MedCompanyProfile';
import MedProductDetails from './js/MedProductDetails';
import { createBrowserHistory } from "history";
import {
  Router,
  Route
} from "react-router-dom";

const history = createBrowserHistory();

export default function App() {
  return (
    <Router history={history}>
        <Route path="/"  exact component={MedHome} />
        <Route path="/company-profile" component={MedCompanyProfile} />
        <Route path="/products" component={MedProductDetails}>   
          </Route>
    </Router>
  )
}







