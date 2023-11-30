import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import HistoryProvider from './context/HistoryContext';
import PopupProvider from './context/PopupContext';
import TableProvider from './context/TableContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HistoryProvider >
    <PopupProvider>
      <TableProvider>
        <App />
      </TableProvider>
    </PopupProvider>
  </HistoryProvider>
);
