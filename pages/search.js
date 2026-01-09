 import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Search() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();
    // Simulamos resultados de búsqueda
    const mockResults = [
      { id: '1', name: 'Producto 1', description: 'Descripción del producto 1' },
      { id: '2', name: 'Producto 2', description: 'Descripción del producto 2' },
    ];
    // Filtramos según la query
    const filtered = mockResults.filter(product =>
      product.name.toLowerCase().includes(query.toLowerCase())
    );
    setResults(filtered);
  };

  return (
    <div>
      <h1>Búsqueda de Productos</h1>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Buscar productos..."
        />
        <button type="submit">Buscar</button>
      </form>
      <div>
        {results.map((product) => (
          <div key={product.id}>
            <Link to={`/item/${product.id}`}>{product.name}</Link> {/* Enlace a detalle */}
            <p>{product.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
