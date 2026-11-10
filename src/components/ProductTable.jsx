import ProductRow from './ProductRow';

export default function ProductTable({ products }) {
  if (products.length === 0) {
    return <div className="empty-state" role="status">No hay productos que coincidan con el filtro seleccionado.</div>;
  }

  return (
    <div className="table-responsive inventory-table-wrap border">
      <table className="table inventory-table align-middle mb-0">
        <caption className="visually-hidden">Productos disponibles, precios y existencias</caption>
        <thead>
          <tr>
            <th scope="col">Producto</th>
            <th scope="col">Marca</th>
            <th scope="col">Categoría</th>
            <th scope="col">Precio</th>
            <th scope="col">Stock</th>
            <th scope="col"><span className="visually-hidden">Acciones</span></th>
          </tr>
        </thead>
        <tbody>{products.map((product) => <ProductRow key={product.id} product={product} />)}</tbody>
      </table>
    </div>
  );
}
