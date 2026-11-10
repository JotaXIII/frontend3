import { Link } from 'react-router-dom';
import { formatPrice } from '../data/products';

export default function ProductRow({ product }) {
  return (
    <tr>
      <th scope="row"><span className="product-emoji" aria-hidden="true">{product.emoji}</span>{product.name}</th>
      <td>{product.brand}</td>
      <td>{product.category}</td>
      <td>{formatPrice.format(product.price)}</td>
      <td><span className={product.stock > 0 ? 'stock-badge' : 'stock-badge out'}>{product.stock} unidades</span></td>
      <td className="text-end"><Link className="btn btn-sm btn-outline-success" to={`/productos/${product.id}`}>Ver detalle</Link></td>
    </tr>
  );
}
