import Link from "next/link";
import LikeButton from "../LikeButton/LikeButton";

export default function ProductCard({ id, nome, preco }) {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        padding: "20px",
        marginBottom: "15px",
        borderRadius: "10px",
      }}
    >
      <h2>{nome}</h2>

      <p>R$ {preco}</p>

      <LikeButton />

      <br />
      <br />

      <Link href={`/produto/${id}`}>
        Ver detalhes
      </Link>
    </div>
  );
}