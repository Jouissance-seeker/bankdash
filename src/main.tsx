import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './globals.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <p className="font-bold text-red-200">hello world</p>
  </StrictMode>,
);
