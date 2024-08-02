import React from 'react'
import ReactDOM from 'react-dom/client'
import { GoogleOAuthProvider } from '@react-oauth/google'
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
	<GoogleOAuthProvider clientId='34635483648-06m5uiqm1i86cfa64f3blpo6fhb2qllq.apps.googleusercontent.com'>
  <React.StrictMode>
  <Router>
    <App />
	</Router>
  </React.StrictMode>
  </GoogleOAuthProvider>,
)
