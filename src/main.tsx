import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { browserRouter } from './routes/index.tsx';
import './styles/global.style.css';
import './styles/index.css';
import { I18nextProvider } from 'react-i18next';
import i18n from './locales/i18n.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <I18nextProvider i18n={i18n}>
      <RouterProvider router={browserRouter} />
    </I18nextProvider>
  </React.StrictMode>
);
