import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import GlobalStyle from './GlobalStyles.tsx'
import SchoolsProvider from './context/SchoolContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <SchoolsProvider>
      <BrowserRouter>
        <GlobalStyle />
        <App />
      </BrowserRouter>
    </SchoolsProvider>
  </React.StrictMode>,
)
