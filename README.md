# Kwik-E-Mart

Aplicación de gestión de inventario y carrito de compras desarrollada con React, React Router, Bootstrap y Vite.

## Funcionalidades

- Inventario con nombre, marca, categoría, precio y stock.
- Filtro dinámico por categoría sin modificar los datos originales.
- Formulario validado para agregar productos.
- Detalle individual mediante rutas dinámicas.
- Carrito con aumento, disminución y eliminación de artículos.
- Actualización sincronizada entre cantidades del carrito y stock disponible.
- Persistencia local del inventario y el carrito.
- Navegación accesible, ruta 404 y diseño responsive.

## Tecnologías

- React 19
- React Router
- Bootstrap 5
- Vite
- ESLint
- Local Storage

## Requisitos

- Node.js 22.12 o superior
- npm 10 o superior

## Instalación

```bash
git clone https://github.com/JotaXIII/frontend3.git
cd frontend3
npm install
```

## Ejecución

```bash
npm run dev
```

Vite mostrará la dirección local en la terminal.

## Verificación

```bash
npm run lint
npm run build
npm run preview
```

## Rutas

| Ruta | Contenido |
|---|---|
| `/` | Página de inicio |
| `/inventario` | Inventario y filtro por categoría |
| `/inventario/nuevo` | Formulario para agregar productos |
| `/productos/:productId` | Detalle del producto |
| `/carrito` | Carrito de compras |
| `/quienes-somos` | Presentación del minimercado |
| `/nuestras-tiendas` | Información de la sucursal |

## Flujo del inventario

Agregar una unidad al carrito descuenta una unidad del stock disponible. Disminuir una cantidad o eliminar un artículo del carrito devuelve las unidades correspondientes al inventario. Los controles de aumento se deshabilitan cuando el stock llega a cero.

## Despliegue

El proyecto incluye la ruta base de Vite y el comando para publicar la carpeta `dist` en GitHub Pages:

```bash
npm run deploy
```

Los productos, precios, existencias y direcciones son ficticios. Los personajes y marcas de Los Simpson pertenecen a sus respectivos titulares.
