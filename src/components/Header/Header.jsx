import Link from "next/link";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link className={styles.link} href="/">
          Home
        </Link>

        <Link className={styles.link} href="/produtos">
          Produtos
        </Link>

        <Link className={styles.link} href="/sobre">
          Sobre
        </Link>

        <Link className={styles.link} href="/favoritos">
          Favoritos
        </Link>

        <Link className={styles.link} href="/contato">
          Contato
        </Link>
      </nav>
    </header>
  );
}