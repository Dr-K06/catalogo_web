import Link from "next/link";

export default function Header() {
  return (
    <header
      style={{
        padding: "20px",
        background: "#222",
      }}
    >
      <nav
        style={{
          display: "flex",
          gap: "20px",
        }}
      >
        <Link href="/">Home</Link>

        <Link href="/produtos">
          Produtos
        </Link>

        <Link href="/sobre">
          Sobre
        </Link>

        <Link href="/favoritos">
          Favoritos
        </Link>

        <Link href="/contato">
          Contato
        </Link>
      </nav>
    </header>
  );
}