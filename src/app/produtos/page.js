"use client";

import { useState } from "react";
import ProductCard from "@/components/ProductCard/ProductCard";
import SearchBar from "@/components/SearchBar/SearchBar";

export default function Produtos() {
  const [busca, setBusca] = useState("");

  const produtos = [
    { id: 1, nome: "Notebook", preco: 3500 },
    { id: 2, nome: "Mouse", preco: 150 },
    { id: 3, nome: "Teclado", preco: 300 },
    { id: 4, nome: "Monitor", preco: 1200 },
  ];

  const produtosFiltrados = produtos.filter((produto) =>
    produto.nome.toLowerCase().includes(busca.toLowerCase())
  );

  return (
    <main>
      <h1>Produtos</h1>

      <SearchBar busca={busca} setBusca={setBusca} />

      {produtosFiltrados.map((produto) => (
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