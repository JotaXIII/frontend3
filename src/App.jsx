import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import InventoryPage from './pages/InventoryPage';
import NewProductPage from './pages/NewProductPage';
import ProductDetailPage from './pages/ProductDetailPage';
import CartPage from './pages/CartPage';
import AboutPage from './pages/AboutPage';
import StoresPage from './pages/StoresPage';
import NotFoundPage from './pages/NotFoundPage';
import { InventoryProvider } from './context/InventoryContext';

export default function App() {
  return (
    <InventoryProvider>
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <Routes>
          <Route element={<MainLayout />}>
            <Route index element={<HomePage />} />
            <Route path="inventario" element={<InventoryPage />} />
            <Route path="inventario/nuevo" element={<NewProductPage />} />
            <Route path="productos/:productId" element={<ProductDetailPage />} />
            <Route path="carrito" element={<CartPage />} />
            <Route path="quienes-somos" element={<AboutPage />} />
            <Route path="nuestras-tiendas" element={<StoresPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </InventoryProvider>
  );
}
