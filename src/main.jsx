import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// ⬇️ 1. PRIMERO Bootstrap (CSS + JS)
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// ⬇️ 2. Bootstrap Icons
import 'bootstrap-icons/font/bootstrap-icons.css';

// ⬇️ 3. DESPUÉS tu CSS con Tailwind
import './index.css'

import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)