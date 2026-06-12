"use client";

import { useEffect, useState } from "react";
import ProductCard from "@/components/ProductCard/ProductCard";

export default function Favoritos() {
  const [favoritos, setFavoritos] = useState([]);

  const produtos = [
    { id: 1, nome: "Notebook", preco: 3500 },
    { id: 2, nome: "Mouse", preco: 150 },
    { id: 3, nome: "Teclado", preco: 300 },
    { id: 4, nome: "Monitor", preco: 1200 },
  ];

  useEffect(() => {
    const ids =
      JSON.parse(localStorage.getItem("favoritos")) || [];

    const filtrados = produtos.filter((produto) =>
      ids.includes(produto.id)
    );

    setFavoritos(filtrados);
  }, []);

  return (
    <main>
      <h1>Favoritos</h1>

      {favoritos.length === 0 ? (
        <p>Nenhum produto curtido.</p>
      ) : (
        favoritos.map((produto) => (
          <ProductCard
            key={produto.id}
            id={produto.id}
            nome={produto.nome}
            preco={produto.preco}
          />
        ))
      )}
    </main>
  );
}