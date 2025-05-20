import React from 'react';

const Home = ({ restaurants }) => {
  return (
    <div>
      <h2>Lista de Restaurantes</h2>
      <div className="row">
        {restaurants.map((rest, index) => (
          <div key={index} className="col-md-6 mb-4">
            <div className="card">
              <img
                  src={rest.imagen}
                  className="card-img-top img-fluid"
                  style={{ height: '200px', objectFit: 'cover' }}
                  alt={rest.nombre}
                />
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
