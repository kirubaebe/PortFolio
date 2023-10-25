import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import './styles/Index.css';
import RoutesComponent from './router/Routes';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <Router>
      <RoutesComponent /> {/* Use the RoutesComponent here */}
    </Router>
  </React.StrictMode>
);
