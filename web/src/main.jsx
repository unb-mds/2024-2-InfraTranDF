import { createRoot } from 'react-dom/client'
import './index.css'
import AppRoutes from './AppRoutes.jsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <AppRoutes />
  </BrowserRouter>,
)
