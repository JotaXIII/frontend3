import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useInventory } from '../context/InventoryContext';
import { formatPrice } from '../data/products';

export default function ProductDetailPage() {
  const { productId } = useParams();
  const { products, addToCart } = useInventory();
  const [message, setMessage] = useState('');
  const product = products.find((item) => item.id === productId);

  if (!product) {
    return <section className="page-section"><span className="eyebrow">PRODUCTO NO DISPONIBLE</span><h1>Producto no encontrado</h1><p>El artículo solicitado no existe en el inventario.</p><Link className="btn btn-success" to="/inventario">Volver al inventario</Link></section>;
  }

  const handleAdd = () => {
    const added = addToCart(product.id);
    setMessage(added ? `${product.name} fue agregado al carrito.` : 'No hay stock disponible para agregar.');
  };

  return (
    <section className="page-section" aria-labelledby="product-title">
      <Link className="back-link" to="/inventario">← Volver al inventario</Link>
      <article className="product-detail">
        <div className="product-visual" aria-hidden="true">{product.emoji}</div>
        <div>
          <span className="eyebrow">{product.category}</span>
          <h1 id="product-title">{product.name}</h1>
          <p className="product-brand">Marca: {product.brand}</p>
          <p className="product-description">{product.description}</p>
          <dl className="detail-list">
            <div><dt>Precio</dt><dd>{formatPrice.format(product.price)}</dd></div>
            <div><dt>Disponibilidad</dt><dd>{product.stock} unidades</dd></div>
          </dl>
          {message && <div className={product.stock > 0 ? 'alert alert-success' : 'alert alert-warning'} role="status">{message}</div>}
          <div className="d-flex flex-wrap gap-2">
            <button className="btn btn-success" type="button" onClick={handleAdd} disabled={product.stock === 0}>Agregar al carrito</button>
            <Link className="btn btn-outline-success" to="/carrito">Ver carrito</Link>
          </div>
        </div>
      </article>
    </section>
  );
}
