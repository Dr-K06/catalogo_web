export default function ProdutoDetalhe({ params }) {
  return (
    <main>
      <h1>Detalhes do Produto</h1>
      <p>ID do produto: {params.id}</p>
    </main>
  );
}