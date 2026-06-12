import Link from "next/link";
import LikeButton from "../LikeButton/LikeButton";
import styles from "./ProductCard.module.css";

export default function ProductCard({ id, nome, preco }) {
  return (
    <div className={styles.card}>
      <h2>{nome}</h2>

      <p>R$ {preco}</p>

<LikeButton id={id} />
      <Link
        className={styles.link}
        href={`/produto/${id}`}
      >
        Ver detalhes
      </Link>
    </div>
  );
}