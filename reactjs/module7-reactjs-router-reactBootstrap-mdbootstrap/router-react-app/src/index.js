import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import 'mdb-react-ui-kit/dist/mdb-react-ui-kit.js'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './components/Home';
import About from './components/About';
import Gallary from './components/Gallary';
import PageNotFound from './components/PageNotFound';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Navbar />}>
        <Route index element={<Home />} />
        <Route path='*' element={<PageNotFound />} />
        <Route path='/About' element={<About />} />
        <Route path='/Gallary' element={<Gallary />} />
      </Route>

      <Route path='/Footer'  element={<Footer />}>

      </Route>
    </Routes>
  </BrowserRouter>
);

reportWebVitals();
