import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom' // Revert to BrowserRouter
import App from './app/App.tsx'
import './styles/index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter> {/* Use BrowserRouter */}
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
