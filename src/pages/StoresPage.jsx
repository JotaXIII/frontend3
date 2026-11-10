export default function StoresPage() {
  return (
    <section className="page-section narrow-page" aria-labelledby="stores-title">
      <span className="eyebrow">SIEMPRE CERCA</span><h1 id="stores-title">Nuestras tiendas</h1><p className="lead-copy">Tu próxima parada está en Springfield.</p>
      <article className="content-card"><div className="d-flex justify-content-between align-items-center gap-3"><span className="eyebrow">SUCURSAL 01</span><span className="stock-badge">Abierto 24 horas</span></div><h2>Kwik-E-Mart Springfield</h2><dl className="store-list"><div><dt>Dirección</dt><dd>Avenida Siempreviva 100, Springfield</dd></div><div><dt>Horario</dt><dd>Lunes a domingo, las 24 horas</dd></div><div><dt>Atención</dt><dd>Compras presenciales y retiro</dd></div></dl></article>
    </section>
  );
}
