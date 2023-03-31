import React from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import {Home} from "./pages/Home";
import {Dashboard} from "./pages/Dashboard";
import {Login} from "./pages/Login";
import {Register} from "./pages/Register";
import {Header} from "./components/Header/Header";

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
              </Routes>
          </div>
        </Router>
      </>
  );
}

