import React from 'react';
import { createRoot } from 'react-dom/client';
import PrivacyPolicy from './PrivacyPolicy.jsx';
import '../index.css';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PrivacyPolicy />
  </React.StrictMode>
);
