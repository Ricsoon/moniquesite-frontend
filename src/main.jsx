import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'

// Usa o BASE_URL do Vite (ajustado em vite.config.js) como basename do Router,
// garantindo que as rotas funcionem tanto em dev quanto no GitHub Pages.
const basename = import.meta.env.BASE_URL || '/'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename={basename}>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
