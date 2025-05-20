import React, { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Search from './components/Search';
import NewRestaurant from './components/NewRestaurant';

const App = () => {
  const [restaurants, setRestaurants] = useState([
    {
      nombre: "Mar y Fuego",
      descripcion: "Tiene asientos al aire libre · Ofrece buenos cócteles y platos veganos",
      direccion: "Cra. 37 #10b-4, El Poblado, Medellín",
      imagen: "https://imgur.com/7YcMbKR.jpg"
    },

    {
      nombre: "Restaurante Okus",
      descripcion: "Especialidad en asados y sushí, además ofrecemos una gran variedad de cocteles",
      direccion: "Cl. 14 #30-190, El Poblado, Medellín",
      imagen: "https://imgur.com/vUUqKOr.jpg"
    },
    {
      nombre: "Alambique",
      descripcion: "Restaurante de lujo con temática de jardín, que prepara platos creativos y cocteles adornados con flores.",
      direccion: "Calle10#43a-30, El Poblado, Medellín",
      imagen: "https://imgur.com/Bex6eDA.jpg"
    },
    {
      nombre: "Bárbaro Cocina Primitiva",
      descripcion: "Elegante restaurante de asados, chorizos y todo tipo de cortes de carne",
      direccion: "Cra. 76 #73b-39, Laureles - Estadio, Medellín",
      imagen: "https://imgur.com/drD7mSG.jpg"
    }
  ]);

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
        <Route path="/" element={<Home restaurants={restaurants} />} />
        <Route path="/buscar" element={<Search restaurants={restaurants} />} />
        <Route path="/nuevo" element={<NewRestaurant setRestaurants={setRestaurants} />} />
      </Routes>
    </div>
  );
};

export default App;