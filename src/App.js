import React from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import {Home} from "./pages/Home";
import {Dashboard} from "./pages/Dashboard";
import {Login} from "./pages/Login";
import {Register} from "./pages/Register";
import {Header} from "./components/Header/Header";
import {Package} from "./pages/Package";
import {PackageList} from "./pages/PackageList";
import {CreatePackage} from "./pages/CreatePackage";
import {PackageItem} from "./components/Details/PackageItem";

export const App = () => {
  return (
      <>
        <Router>
          <div className="container">
              <Header/>
              <Routes>
                  <Route path='/' element={< Home />} />
                  <Route path='/dashboard' element={< Dashboard />} />
                  <Route path='/register' element={< Register />} />
                  <Route path='/login' element={< Login />} />
                  <Route path='/package/:id' element={< PackageItem />} />
                  <Route path='/packages' element={< Package />}>
                      <Route index element={< PackageList />} />
                      <Route path='create-package' element={< CreatePackage />} />
                  </Route>
              </Routes>
          </div>
        </Router>
        <ToastContainer/>
      </>
  );
}

