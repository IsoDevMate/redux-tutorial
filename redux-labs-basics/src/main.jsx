import React from 'react'
import ReactDOM from 'react-dom/client'
import App from ''
import { Provider } from 'react-redux'
import{ Store } from './app/stores.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <Provider Store={Store}> 
        <App />
      </Provider>
  </React.StrictMode>,
)
