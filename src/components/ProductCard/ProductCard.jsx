import Link from "next/link";

export default function ProductCard({ id, nome, preco }) {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        padding: "20px",
        marginBottom: "10px",
        borderRadius: "10px",
      }}
    >
      <h2>{nome}</h2>

      <p>R$ {preco}</p>

      <Link href={`/produto/${id}`}>
        Ver detalhes
      </Link>
    </div>
  );
}