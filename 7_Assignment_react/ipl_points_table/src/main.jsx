import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import IplPoint from './components/IplPoint.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <IplPoint/>
  </StrictMode>,
)
