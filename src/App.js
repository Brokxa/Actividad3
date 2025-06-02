import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Search from './components/Search';
import NewRestaurant from './components/NewRestaurant';

const App = () => {
  return (
    <div className="container mt-4">
      <h1>
        Restaurant<span className="text-warning">Search</span>
      </h1>
      <nav className="mb-4">
        <Link to="/" className="btn btn-primary me-2">Inicio</Link>
        <Link to="/buscar" className="btn btn-primary me-2">Buscar</Link>
        <Link to="/nuevo" className="btn btn-success">Nuevo Restaurante</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/buscar" element={<Search />} />
        <Route path="/nuevo" element={<NewRestaurant />} />
      </Routes>
    </div>
  );
};

export default App;
