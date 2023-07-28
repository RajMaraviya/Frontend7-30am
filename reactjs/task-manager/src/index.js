import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import UpdateTask from './updateTask';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />} />
      {/* <Route path='/app/update-task' element={<UpdateTask />} /> */}
      <Route path='/update-task/:id' element={<UpdateTask />} />
    </Routes>
  </BrowserRouter>
);
reportWebVitals();
