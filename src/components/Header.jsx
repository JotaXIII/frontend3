import { Link } from 'react-router-dom';
import logo from '../assets/kwik-e-mart.png';
import { useInventory } from '../context/InventoryContext';

export default function Header() {
  const { cartCount } = useInventory();

  return (
    <header className="container site-header">
      <Link to="/" aria-label="Kwik-E-Mart, inicio">
        <img src={logo} alt="Kwik-E-Mart" />
      </Link>
      <div className="header-actions">
        <span className="store-hours d-none d-sm-inline">SPRINGFIELD · ABIERTO 24/7</span>
        <Link className="cart-link" to="/carrito" aria-label={`Carrito con ${cartCount} artículos`}>
          <span aria-hidden="true">🛒</span> Carrito
          <span className="cart-count">{cartCount}</span>
        </Link>
      </div>
    </header>
  );
}
