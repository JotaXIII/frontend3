import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useInventory } from '../context/InventoryContext';

const initialForm = { name: '', brand: '', category: '', price: '', stock: '', description: '', emoji: '🛍️' };

export default function NewProductPage() {
  const { addProduct } = useInventory();
  const navigate = useNavigate();
  const [form, setForm] = useState(initialForm);
  const [validated, setValidated] = useState(false);

  const updateField = (event) => setForm({ ...form, [event.target.name]: event.target.value });

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!event.currentTarget.checkValidity()) {
      setValidated(true);
      return;
    }
    addProduct({ ...form, price: Number(form.price), stock: Number(form.stock) });
    navigate('/inventario', { state: { message: `${form.name} fue agregado al inventario.` } });
  };

  return (
    <section className="page-section narrow-page" aria-labelledby="new-product-title">
      <span className="eyebrow">GESTIÓN DE INVENTARIO</span>
      <h1 id="new-product-title">Agregar producto</h1>
      <p className="lead-copy">Completa todos los datos para incorporar un nuevo artículo.</p>
      <form className={`content-card row g-3 ${validated ? 'was-validated' : ''}`} noValidate onSubmit={handleSubmit}>
        <div className="col-md-7"><label className="form-label" htmlFor="name">Nombre</label><input className="form-control" id="name" name="name" value={form.name} onChange={updateField} required maxLength="60" /><div className="invalid-feedback">Ingresa el nombre.</div></div>
        <div className="col-md-5"><label className="form-label" htmlFor="brand">Marca</label><input className="form-control" id="brand" name="brand" value={form.brand} onChange={updateField} required maxLength="40" /><div className="invalid-feedback">Ingresa la marca.</div></div>
        <div className="col-md-6"><label className="form-label" htmlFor="category">Categoría</label><input className="form-control" id="category" name="category" value={form.category} onChange={updateField} required maxLength="40" /><div className="invalid-feedback">Ingresa la categoría.</div></div>
        <div className="col-md-3"><label className="form-label" htmlFor="price">Precio</label><input className="form-control" id="price" name="price" type="number" min="1" step="1" value={form.price} onChange={updateField} required /><div className="invalid-feedback">Usa un precio mayor que cero.</div></div>
        <div className="col-md-3"><label className="form-label" htmlFor="stock">Stock</label><input className="form-control" id="stock" name="stock" type="number" min="0" step="1" value={form.stock} onChange={updateField} required /><div className="invalid-feedback">Usa un stock válido.</div></div>
        <div className="col-12"><label className="form-label" htmlFor="description">Descripción</label><textarea className="form-control" id="description" name="description" rows="4" value={form.description} onChange={updateField} required maxLength="240" /><div className="invalid-feedback">Ingresa una descripción.</div></div>
        <div className="col-12 d-flex gap-2"><button className="btn btn-success" type="submit">Guardar producto</button><button className="btn btn-outline-secondary" type="button" onClick={() => navigate('/inventario')}>Cancelar</button></div>
      </form>
    </section>
  );
}
