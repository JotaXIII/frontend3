import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return <section className="page-section empty-state"><span className="error-code">404</span><h1>Página no encontrada</h1><p>La dirección ingresada no corresponde a una página disponible.</p><Link className="btn btn-success" to="/">Volver al inicio</Link></section>;
}
