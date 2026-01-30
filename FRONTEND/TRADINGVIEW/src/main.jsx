import React from 'react'
import ReactDom from 'react-dom/client'
import Trading from './App.jsx'
import './App.css';


ReactDom.createRoot(document.getElementById('root')).
  render(
  <React.StrictMode>
    <Trading />
  </React.StrictMode>,
)