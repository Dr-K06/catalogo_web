import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>Catálogo Interativo de Produtos</h1>

      <br />

      <ul>
        <li>
          <Link href="/produtos">
            Produtos
          </Link>
        </li>

        <li>
          <Link href="/sobre">
            Sobre
          </Link>
        </li>

        <li>
          <Link href="/favoritos">
            Favoritos
          </Link>
        </li>

        <li>
          <Link href="/contato">
            Contato
          </Link>
        </li>
      </ul>
    </main>
  );
}