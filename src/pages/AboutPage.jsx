import { Link } from 'react-router-dom';

export default function AboutPage() {
  return (
    <section className="page-section narrow-page" aria-labelledby="about-title">
      <span className="eyebrow">PARTE DEL BARRIO</span><h1 id="about-title">Quiénes somos</h1><p className="lead-copy">Una parada cotidiana para los vecinos de Springfield.</p>
      <div className="content-card"><h2>Bienvenido a Kwik-E-Mart</h2><p>Somos un minimercado de barrio donde encontrarás bebidas, golosinas y productos esenciales para tus compras diarias.</p><p>Buscamos que cada visita sea cercana y sencilla, desde la primera hora del día hasta un antojo de medianoche.</p><h2>Los clásicos de siempre</h2><p>Un Squishee, una Buzz Cola o unos Krusty-O’s forman parte de los favoritos de Springfield.</p><Link className="btn btn-outline-success" to="/inventario">Ver nuestros productos</Link></div>
    </section>
  );
}
