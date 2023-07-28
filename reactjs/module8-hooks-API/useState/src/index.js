import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import UseStates from './component/useStates';
import UseEffect from './component/useEffectTimer';
import UseEffectCount from './component/useEffectCount';

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UseStates />
    <UseEffect />
    <UseEffectCount />
  </React.StrictMode>
);

reportWebVitals();
