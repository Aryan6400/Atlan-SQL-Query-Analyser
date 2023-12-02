import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import HistoryProvider from './context/HistoryContext';
import PopupProvider from './context/PopupContext';
import TableProvider from './context/TableContext';
import ThemeProvider from './context/ThemeContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider>
    <HistoryProvider >
      <PopupProvider>
        <TableProvider>
          <App />
        </TableProvider>
      </PopupProvider>
    </HistoryProvider>
  </ThemeProvider>
);
