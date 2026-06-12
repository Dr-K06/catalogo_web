import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.container}>
      <section className={styles.hero}>
        <h1>Catálogo Interativo de Produtos</h1>

        <p>
          Aplicação desenvolvida com Next.js e React utilizando
          componentização, rotas dinâmicas, Local Storage,
          React Hooks e CSS Modules.
        </p>

        <div className={styles.buttons}>
          <Link
            className={styles.primary}
            href="/produtos"
          >
            Explorar Produtos
          </Link>

          <Link
            className={styles.secondary}
            href="/favoritos"
          >
            Ver Favoritos
          </Link>
        </div>
      </section>

      <section className={styles.features}>
        <div className={styles.card}>
          <h3>Busca Dinâmica</h3>

          <p>
            Filtragem de produtos em tempo real usando useState.
          </p>
        </div>

        <div className={styles.card}>
          <h3>Favoritos</h3>

          <p>
            Produtos curtidos permanecem salvos com Local Storage.
          </p>
        </div>

        <div className={styles.card}>
          <h3>Rotas Dinâmicas</h3>

          <p>
            Navegação por detalhes utilizando produto/[id].
          </p>
        </div>

        <div className={styles.card}>
          <h3>Componentização</h3>

          <p>
            Interface separada em componentes reutilizáveis.
          </p>
        </div>
      </section>
    </main>
  );
}