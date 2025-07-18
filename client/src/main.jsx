import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx';
import { AuthProvider } from './context/AuthContext';
import { BookProvider } from './context/BookContext';
import { ToastProvider } from './context/ToastContext';
import { BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <BookProvider>
          <ToastProvider>
            <App />
          </ToastProvider>
        </BookProvider>
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>,
)
