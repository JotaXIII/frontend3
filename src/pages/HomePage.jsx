import { Link } from 'react-router-dom';
import apu from '../assets/apu.webp';
import { useInventory } from '../context/InventoryContext';

export default function HomePage() {
  const { products } = useInventory();

  return (
    <>
      <section className="hero" aria-labelledby="home-title">
        <div className="hero-copy">
          <span className="eyebrow">TU MINIMERCADO EN SPRINGFIELD</span>
          <h1 id="home-title">Lo de todos los días.<br /><span>Con sabor a Springfield.</span></h1>
          <p>Encuentra tus favoritos, revisa sus existencias y prepara tu compra sin perder tiempo.</p>
          <div className="d-flex flex-wrap gap-2">
            <Link className="btn btn-success" to="/inventario">Explorar inventario</Link>
            <Link className="btn btn-outline-success" to="/inventario/nuevo">Agregar producto</Link>
          </div>
          <p className="hero-detail">Abierto las 24 horas · Todos los días</p>
        </div>
        <div className="apu-wrap">
          <span className="welcome">¡Bienvenido!</span>
          <img src={apu} alt="Apu dando la bienvenida con las manos juntas" />
        </div>
      </section>
      <section className="summary-section" aria-labelledby="summary-title">
        <div>
          <span className="eyebrow">INVENTARIO ACTUALIZADO</span>
          <h2 id="summary-title">Todo listo para tu compra</h2>
          <p>Consulta categorías, revisa cada producto y agrega unidades al carrito.</p>
        </div>
        <div className="summary-card"><strong>{products.length}</strong><span>productos registrados</span></div>
        <div className="summary-card"><strong>{new Set(products.map((product) => product.category)).size}</strong><span>categorías disponibles</span></div>
      </section>
    </>
  );
}
