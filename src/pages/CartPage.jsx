import { Link } from 'react-router-dom';
import { useInventory } from '../context/InventoryContext';
import { formatPrice } from '../data/products';

export default function CartPage() {
  const { cartDetails, cartTotal, addToCart, decreaseCartItem, removeCartItem } = useInventory();

  return (
    <section className="page-section" aria-labelledby="cart-title">
      <span className="eyebrow">TU COMPRA</span>
      <h1 id="cart-title">Carrito de compras</h1>
      <p className="lead-copy">Ajusta las cantidades y el inventario se actualizará automáticamente.</p>
      {cartDetails.length === 0 ? (
        <div className="empty-state"><span aria-hidden="true">🛒</span><h2>Tu carrito está vacío</h2><p>Explora el inventario para agregar productos.</p><Link className="btn btn-success" to="/inventario">Ver productos</Link></div>
      ) : (
        <div className="cart-layout">
          <div className="cart-items">
            {cartDetails.map(({ product, quantity, subtotal }) => (
              <article className="cart-item" key={product.id}>
                <span className="cart-emoji" aria-hidden="true">{product.emoji}</span>
                <div className="cart-info"><h2>{product.name}</h2><p>{formatPrice.format(product.price)} por unidad · Stock disponible: {product.stock}</p></div>
                <div className="quantity-control" aria-label={`Cantidad de ${product.name}`}>
                  <button type="button" onClick={() => decreaseCartItem(product.id)} aria-label={`Disminuir ${product.name}`}>−</button>
                  <span aria-live="polite">{quantity}</span>
                  <button type="button" onClick={() => addToCart(product.id)} disabled={product.stock === 0} aria-label={`Aumentar ${product.name}`}>+</button>
                </div>
                <strong>{formatPrice.format(subtotal)}</strong>
                <button className="remove-button" type="button" onClick={() => removeCartItem(product.id)}>Eliminar</button>
              </article>
            ))}
          </div>
          <aside className="cart-summary" aria-labelledby="summary-cart-title"><h2 id="summary-cart-title">Resumen</h2><div><span>Total</span><strong>{formatPrice.format(cartTotal)}</strong></div><p>El total se actualiza con cada cambio de cantidad.</p></aside>
        </div>
      )}
    </section>
  );
}
