import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import '@fontsource/inter/400.css'; // Defaults to weight 400
// Or specify a different weight and style
import '@fontsource/inter/700.css'; // Weight 700
import '@fontsource/inter/700-italic.css'; // Weight 700, italic style


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
