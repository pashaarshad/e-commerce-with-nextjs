'use client';

import React, { useState, useEffect } from 'react';

function TestingDummyJSON() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(res => {
        if (!res.ok) throw new Error('Failed to fetch');
        return res.json();
      })
      .then(data => {
        setProducts(data.products);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold mb-4">Testing Dummy JSON</h1>
      <p className="mb-6">This is a page for displaying products from DummyJSON API.</p>
      
      {loading && <p>Loading products...</p>}
      {error && <p className="text-red-500">Error: {error}</p>}
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map(product => (
          <div key={product.id} className="border rounded-lg p-4 shadow hover:shadow-lg">
            <img 
              src={product.thumbnail} 
              alt={product.title}
              className="w-full h-48 object-cover rounded-md mb-2"
            />
            <h2 className="text-lg font-semibold">{product.title}</h2>
            <p className="text-gray-600 text-sm mb-2 line-clamp-2">{product.description}</p>
            <div className="flex justify-between items-center">
              <p className="text-xl font-bold text-blue-600">${product.price}</p>
              <p className="text-sm">Rating: {product.rating}⭐</p>
            </div>
            <p className="mt-2 text-xs bg-gray-100 inline-block px-2 py-1 rounded">
              {product.category}
            </p>
          </div>
        ))}
      </div>
    </main>
  );
  useEffect(() => {
    // For debugging/console viewing purposes
    fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then(console.log);
      
    fetch('https://dummyjson.com/products/search?q=phone')
      .then(res => res.json())
      .then(console.log);
  }, []);
}

export default TestingDummyJSON;