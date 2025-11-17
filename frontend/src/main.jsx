import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Integrator from './Integrator.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
      <Integrator theme="dark">
          <App />
      </Integrator>
  </StrictMode>,
)
