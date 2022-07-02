import * as React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Home, Search, Detail, Login } from './features';

const App = () => (
  <Routes>
    <Route path="/" element={<Navigate to="/login" />} />
    <Route path="/home" element={<Home />} />
    <Route path="/login" element={<Login />} />
    <Route path="/search" element={<Search />} />
    <Route path="/detail/:id" element={<Detail />} />
  </Routes>
);

export default App;
