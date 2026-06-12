"use client";

import { useState } from "react";
import ProductCard from "@/components/ProductCard/ProductCard";

export default function Produtos() {
  const [busca, setBusca] = useState("");

  const produtos = [
    { id: 1, nome: "Notebook", preco: 3500 },
    { id: 2, nome: "Mouse", preco: 150 },
    { id: 3, nome: "Teclado", preco: 300 },
    { id: 4, nome: "Monitor", preco: 1200 },
  ];

  const filtrados = produtos.filter((produto) =>
    produto.nome.toLowerCase().includes(busca.toLowerCase())
  );

  return (
    <main>
      <h1>Produtos</h1>

      <input
        type="text"
        placeholder="Pesquisar produto..."
        value={busca}
        onChange={(e) => setBusca(e.target.value)}
      />

      <br />
      <br />

      {filtrados.map((produto) => (
        <ProductCard
          key={produto.id}
          id={produto.id}
          nome={produto.nome}
          preco={produto.preco}
        />
      ))}
    </main>
  );
}