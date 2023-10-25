import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { CurrentNumberProvider } from './providers/NumberProvider';
import { GameStartedProvider } from './providers/GameStartedProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CurrentNumberProvider>
      <GameStartedProvider>
        <App />
      </GameStartedProvider>
    </CurrentNumberProvider>
  </React.StrictMode>,
);
