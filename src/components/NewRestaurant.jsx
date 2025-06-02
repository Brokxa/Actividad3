import React, { useState } from 'react';
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase";
import Swal from "sweetalert2";

const NewRestaurant = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    descripcion: '',
    direccion: '',
    imagen: ''
  });

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "restaurantes"), formData);
      Swal.fire("Guardado", "Restaurante agregado exitosamente", "success");
      setFormData({ nombre: '', descripcion: '', direccion: '', imagen: '' });
    } catch (error) {
      console.error("Error al agregar el restaurante:", error);
      Swal.fire("Error", "No se pudo guardar el restaurante", "error");
    }
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
