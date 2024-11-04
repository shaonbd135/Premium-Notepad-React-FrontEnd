import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Routes from './routes/Routes';
import ContextProvider from './contexts/ContextProvider';



function App() {
  

  return (
    <ContextProvider>
      <Routes />
    </ContextProvider>

  );
}

export default App;


