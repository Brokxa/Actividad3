import React, { useState } from 'react';
import Swal from 'sweetalert2';

const NewRestaurant = ({ setRestaurants }) => {
  const [formData, setFormData] = useState({
    nombre: '',
    descripcion: '',
    direccion: '',
    imagen: ''
  });

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    setRestaurants(prev => [...prev, formData]);
    Swal.fire('Guardado', 'Restaurante agregado exitosamente', 'success');
    setFormData({ nombre: '', descripcion: '', direccion: '', imagen: '' });
  };

  return (
    <div>
      <h2>Agregar Nuevo Restaurante</h2>
      <form onSubmit={handleSubmit}>
        <input
          className="form-control mb-2"
          type="text"
          name="nombre"
          placeholder="Nombre"
          value={formData.nombre}
          onChange={handleChange}
          required
        />
        <input
          className="form-control mb-2"
          type="text"
          name="descripcion"
          placeholder="Descripción"
          value={formData.descripcion}
          onChange={handleChange}
          required
        />
        <input
          className="form-control mb-2"
          type="text"
          name="direccion"
          placeholder="Dirección"
          value={formData.direccion}
          onChange={handleChange}
          required
        />
        <input
          className="form-control mb-2"
          type="text"
          name="imagen"
          placeholder="URL de imagen"
          value={formData.imagen}
          onChange={handleChange}
          required
        />
        <button className="btn btn-success" type="submit">Guardar</button>
      </form>
    </div>
  );
};

export default NewRestaurant;