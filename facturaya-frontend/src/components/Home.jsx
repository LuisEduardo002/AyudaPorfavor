import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import imagen from '../assets/descarga.svg';
import nevera from '../assets/nevera.png';

function Home() {
  const navigator = useNavigate();
  const [products, setProducts] = useState([]); // Productos originales
  const [searchTerm, setSearchTerm] = useState(''); // Estado para el término de búsqueda
  const [filteredProducts, setFilteredProducts] = useState([]); // Productos filtrados

  // Función para abrir el carrito
  function abrirCarrito() {
    navigator(`/carrito`);
  }

  // Cargar productos desde el backend
  useEffect(() => {
    fetch('http://localhost:8080/api/productos') // URL del backend para obtener productos
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setFilteredProducts(data); // Inicialmente, todos los productos visibles
      })
      .catch((error) => console.error('Error fetching products:', error));
  }, []);

  // Filtrar productos según el término de búsqueda
  useEffect(() => {
    const lowerCaseTerm = searchTerm.toLowerCase();
    const filtered = products.filter((product) => 
      (product.descripcion && product.descripcion.toLowerCase().includes(lowerCaseTerm)) || // Buscar por nombre
      (product.id && product.id.toString().includes(lowerCaseTerm)) || // Buscar por código
      (product.categoria && product.categoria.nombre && product.categoria.nombre.toLowerCase().includes(lowerCaseTerm)) // Buscar por categoría
    );
    setFilteredProducts(filtered);
  }, [searchTerm, products]);

  return (
    <div>
      <h1>Lista de Productos</h1>

      {/* Botón del carrito */}
      <button
        className="btn btn-danger"
        onClick={() => abrirCarrito()}
        style={{ marginLeft: '10px' }}
      >
        Carrito
      </button>

      {/* Cuadro de búsqueda */}
      <input
        type="text"
        placeholder="Buscar por nombre, código o categoría"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{
          margin: '20px 0',
          padding: '10px',
          width: '300px',
          borderRadius: '5px',
          border: '1px solid #ddd',
        }}
      />

      {/* Productos filtrados */}
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {filteredProducts.map((product) => (
          <div key={product.id} className="card" style={{ width: '18rem', margin: '10px' }}>
            <img className="card-img-top" src={imagen} alt="Producto" />
            <div className="card-body">
              <h5 className="card-title">{product.nombre}</h5>
              <p className="card-text">{product.descripcion}</p>
              <p>Precio: ${product.precioVenta}</p>
              <Link to={`/product/${product.id}`} className="btn btn-primary">
                Ver Detalles
              </Link>
            </div>
          </div>
        ))}
        {filteredProducts.length === 0 && (
          <p>No se encontraron productos para la búsqueda "{searchTerm}".</p>
        )}
      </div>
    </div>
  );
}

export default Home;
