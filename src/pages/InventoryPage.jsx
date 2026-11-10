import { useMemo, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import ProductTable from '../components/ProductTable';
import { useInventory } from '../context/InventoryContext';

export default function InventoryPage() {
  const { products } = useInventory();
  const location = useLocation();
  const [selectedCategory, setSelectedCategory] = useState('Todas');
  const categories = useMemo(() => ['Todas', ...new Set(products.map((product) => product.category))], [products]);
  const filteredProducts = selectedCategory === 'Todas'
    ? products
    : products.filter((product) => product.category === selectedCategory);

  return (
    <section className="page-section" aria-labelledby="inventory-title">
      <div className="page-heading">
        <div><span className="eyebrow">EN NUESTRAS ESTANTERÍAS</span><h1 id="inventory-title">Inventario de productos</h1></div>
        <Link className="btn btn-success" to="/inventario/nuevo">Agregar producto</Link>
      </div>
      <p className="lead-copy">Revisa la información completa y filtra el inventario sin modificar sus datos originales.</p>
      {location.state?.message && <div className="alert alert-success" role="status">{location.state.message}</div>}
      <div className="filter-panel">
        <label className="form-label fw-bold" htmlFor="category-filter">Filtrar por categoría</label>
        <select id="category-filter" className="form-select" value={selectedCategory} onChange={(event) => setSelectedCategory(event.target.value)}>
          {categories.map((category) => <option key={category}>{category}</option>)}
        </select>
        <span className="result-count" role="status">{filteredProducts.length} de {products.length} productos</span>
      </div>
      <ProductTable products={filteredProducts} />
    </section>
  );
}
