import React from 'react';
import { createRoot } from 'react-dom/client';
import Disclaimer from './Disclaimer.jsx';
import '../index.css';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Disclaimer />
  </React.StrictMode>
);
