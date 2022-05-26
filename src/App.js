import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home, Search, Detail } from './features';

const App = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/search" element={<Search />} />
    <Route path="/detail/:id" element={<Detail />} />
  </Routes>
);

export default App;
