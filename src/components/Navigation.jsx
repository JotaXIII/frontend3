import { NavLink } from 'react-router-dom';

const links = [
  { to: '/', label: 'Inicio', end: true },
  { to: '/inventario', label: 'Inventario' },
  { to: '/inventario/nuevo', label: 'Agregar producto' },
  { to: '/quienes-somos', label: 'Quiénes somos' },
  { to: '/nuestras-tiendas', label: 'Tiendas' },
];

export default function Navigation() {
  return (
    <nav className="main-nav" aria-label="Navegación principal">
      <div className="container nav-scroll">
        {links.map((link) => (
          <NavLink key={link.to} to={link.to} end={link.end}>{link.label}</NavLink>
        ))}
      </div>
    </nav>
  );
}
