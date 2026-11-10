export const initialProducts = [
  { id: 'squishee', name: 'Squishee', brand: 'Kwik-E-Mart', category: 'Bebidas', price: 1500, stock: 30, description: 'Bebida congelada disponible en distintos sabores, ideal para refrescar cualquier visita.', emoji: '🥤' },
  { id: 'rosquilla-glaseada', name: 'Rosquilla glaseada', brand: 'Lard Lad', category: 'Panadería', price: 900, stock: 24, description: 'Rosquilla esponjosa con una cubierta dulce y brillante, preparada para disfrutar al instante.', emoji: '🍩' },
  { id: 'krusty-os', name: 'Cereal Krusty-O’s', brand: 'Krusty', category: 'Abarrotes', price: 3000, stock: 15, description: 'Cereal crujiente para comenzar el día con uno de los sabores clásicos de Springfield.', emoji: '🥣' },
  { id: 'buzz-cola', name: 'Buzz Cola', brand: 'Buzz', category: 'Bebidas', price: 1200, stock: 20, description: 'Bebida cola con gas, disponible fría para acompañar comidas y colaciones.', emoji: '🥫' },
  { id: 'duff', name: 'Duff', brand: 'Duff', category: 'Cervezas', price: 1800, stock: 18, description: 'Cerveza de Springfield para mayores de 18 años. Disfruta con responsabilidad.', emoji: '🍺' },
  { id: 'hot-dog', name: 'Hot dog', brand: 'Kwik-E-Mart', category: 'Comida preparada', price: 2000, stock: 16, description: 'Hot dog preparado al momento, servido caliente y listo para llevar.', emoji: '🌭' },
];

export const formatPrice = new Intl.NumberFormat('es-CL', {
  style: 'currency', currency: 'CLP', maximumFractionDigits: 0,
});
