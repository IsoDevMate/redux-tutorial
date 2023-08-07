import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./app"; // Make sure the file name matches the casing of the actual file
import { Provider } from 'react-redux';
import { store } from './apps/stores.jsx'; // Make sure the file name matches the casing of the actual file

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
