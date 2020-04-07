import React from 'react';
import { GlobalProvider } from './context/AuthState';
import { Routes } from './routes/Routes'

function App() {
  return (
    <GlobalProvider>
    <Routes>
    </Routes>
    </GlobalProvider>
  );
}

export default App;
