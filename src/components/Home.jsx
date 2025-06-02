import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase';

const Home = () => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'restaurantes'));
        const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setRestaurants(data);
      } catch (error) {
        console.error('Error al cargar restaurantes:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Lista de Restaurantes</h2>
      <div className="row">
        {restaurants.map((rest, index) => (
          <div key={index} className="col-md-6 mb-4">
            <div className="card">
              <img src={rest.imagen} className="card-img-top img-fluid" style={{ height: "200px", objectFit: "cover" }} alt={rest.nombre} />
              <div className="card-body">
                <h5 className="card-title">{rest.nombre}</h5>
                <p className="card-text">{rest.descripcion}</p>
                <p><strong>Dirección:</strong> {rest.direccion}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
