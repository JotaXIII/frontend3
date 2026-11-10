import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function MainLayout() {
  return (
    <>
      <a className="skip-link" href="#main-content">Saltar al contenido</a>
      <Header />
      <Navigation />
      <main id="main-content" className="container"><Outlet /></main>
      <Footer />
    </>
  );
}
