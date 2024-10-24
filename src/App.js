import React from 'react';

import { Reset } from 'styled-reset';
import Header from './components/Header/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainSample from './components/MainSample/MainSample';
import Details from './components/Details/Details';

function App() {
  return (
    <BrowserRouter> 
      <Reset />
      <Header />
      <Routes>
        <Route path="/" element={<MainSample />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
