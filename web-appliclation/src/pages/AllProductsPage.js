import React, { useState, useEffect } from 'react';
import { getProducts } from '../api';
import ProductCard from '../components/ProductCard';
import './AllProductsPage.css';

const AllProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [filters, setFilters] = useState({
    company: 'AMZ',
    category: 'Laptop',
    topN: 10,
    minPrice: 1,
    maxPrice: 10000,
  });

  useEffect(() => {
    fetchProducts();
  }, [filters]);

  const fetchProducts = async () => {
    const products = await getProducts(
      filters.company,
      filters.category,
      filters.topN,
      filters.minPrice,
      filters.maxPrice
    );
    setProducts(products);
  };

  const handleFilterChange = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="all-products-page">
      <h1>All Products</h1>
      <div className="filters">
        <select name="company" onChange={handleFilterChange}>
          <option value="AMZ">Amazon</option>
          <option value="FLP">Flipkart</option>
          <option value="SNP">Snapdeal</option>
          <option value="MYN">Myntra</option>
          <option value="AZO">Azon</option>
        </select>
        <select name="category" onChange={handleFilterChange}>
          <option value="Laptop">Laptop</option>
          <option value="Phone">Phone</option>
          <option value="TV">TV</option>
          <option value="Earphone">Earphone</option>
          <option value="Tablet">Tablet</option>
        </select>
        <input
          type="number"
          name="topN"
          placeholder="Top N"
          value={filters.topN}
          onChange={handleFilterChange}
        />
        <input
          type="number"
          name="minPrice"
          placeholder="Min Price"
          value={filters.minPrice}
          onChange={handleFilterChange}
        />
        <input
          type="number"
          name="maxPrice"
          placeholder="Max Price"
          value={filters.maxPrice}
          onChange={handleFilterChange}
        />
      </div>
      <div className="product-list">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default AllProductsPage;