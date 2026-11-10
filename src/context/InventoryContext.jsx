import { createContext, useContext, useMemo, useState } from 'react';
import { initialProducts } from '../data/products';

const InventoryContext = createContext(null);

function readStorage(key, fallback) {
  try {
    const storedValue = localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : fallback;
  } catch {
    return fallback;
  }
}

export function InventoryProvider({ children }) {
  const [products, setProducts] = useState(() => readStorage('kwik-inventory', initialProducts));
  const [cart, setCart] = useState(() => readStorage('kwik-cart', []));

  const persistProducts = (updater) => {
    setProducts((currentProducts) => {
      const nextProducts = updater(currentProducts);
      localStorage.setItem('kwik-inventory', JSON.stringify(nextProducts));
      return nextProducts;
    });
  };

  const persistCart = (updater) => {
    setCart((currentCart) => {
      const nextCart = updater(currentCart);
      localStorage.setItem('kwik-cart', JSON.stringify(nextCart));
      return nextCart;
    });
  };

  const addProduct = (product) => {
    const id = `${product.name.toLowerCase().trim().replace(/[^a-z0-9]+/g, '-')}-${Date.now()}`;
    persistProducts((currentProducts) => [...currentProducts, { ...product, id }]);
  };

  const addToCart = (productId) => {
    const product = products.find((item) => item.id === productId);
    if (!product || product.stock < 1) return false;

    persistProducts((currentProducts) => currentProducts.map((item) => (
      item.id === productId ? { ...item, stock: item.stock - 1 } : item
    )));
    persistCart((currentCart) => {
      const existingItem = currentCart.find((item) => item.productId === productId);
      return existingItem
        ? currentCart.map((item) => item.productId === productId ? { ...item, quantity: item.quantity + 1 } : item)
        : [...currentCart, { productId, quantity: 1 }];
    });
    return true;
  };

  const decreaseCartItem = (productId) => {
    const cartItem = cart.find((item) => item.productId === productId);
    if (!cartItem) return;

    persistProducts((currentProducts) => currentProducts.map((item) => (
      item.id === productId ? { ...item, stock: item.stock + 1 } : item
    )));
    persistCart((currentCart) => currentCart.flatMap((item) => {
      if (item.productId !== productId) return [item];
      return item.quantity > 1 ? [{ ...item, quantity: item.quantity - 1 }] : [];
    }));
  };

  const removeCartItem = (productId) => {
    const cartItem = cart.find((item) => item.productId === productId);
    if (!cartItem) return;

    persistProducts((currentProducts) => currentProducts.map((item) => (
      item.id === productId ? { ...item, stock: item.stock + cartItem.quantity } : item
    )));
    persistCart((currentCart) => currentCart.filter((item) => item.productId !== productId));
  };

  const cartDetails = useMemo(() => cart.map((cartItem) => {
    const product = products.find((item) => item.id === cartItem.productId);
    return product ? { ...cartItem, product, subtotal: product.price * cartItem.quantity } : null;
  }).filter(Boolean), [cart, products]);

  const value = {
    products,
    cartDetails,
    cartCount: cart.reduce((total, item) => total + item.quantity, 0),
    cartTotal: cartDetails.reduce((total, item) => total + item.subtotal, 0),
    addProduct,
    addToCart,
    decreaseCartItem,
    removeCartItem,
  };

  return <InventoryContext.Provider value={value}>{children}</InventoryContext.Provider>;
}

export function useInventory() {
  const context = useContext(InventoryContext);
  if (!context) throw new Error('useInventory debe utilizarse dentro de InventoryProvider.');
  return context;
}
