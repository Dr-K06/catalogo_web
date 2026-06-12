import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>Catálogo Interativo de Produtos</h1>
      <p>Bem-vindo ao nosso catálogo feito com Next.js e React.</p>

      <Link href="/produtos">
        Ver produtos
      </Link>
    </main>
  );
}