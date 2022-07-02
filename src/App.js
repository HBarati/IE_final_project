import * as React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Search, Detail, Login, Category } from './features';

const App = () => (
  <Routes>
    <Route path="/" element={<Navigate to="/login" />} />
    <Route path="/category" element={<Category />} />
    <Route path="/home" element={<Search />} />
    <Route path="/login" element={<Login />} />
    <Route path="/detail/:id" element={<Detail />} />
  </Routes>
);

export default App;
