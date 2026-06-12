"use client";

import { useState, useEffect } from "react";
import styles from "./LikeButton.module.css";

export default function LikeButton({ id }) {
  const [curtido, setCurtido] = useState(false);

  useEffect(() => {
    const favoritos =
      JSON.parse(localStorage.getItem("favoritos")) || [];

    setCurtido(favoritos.includes(id));
  }, [id]);

  function alternarCurtida() {
    const favoritos =
      JSON.parse(localStorage.getItem("favoritos")) || [];

    let novosFavoritos;

    if (favoritos.includes(id)) {
      novosFavoritos = favoritos.filter(
        (item) => item !== id
      );
    } else {
      novosFavoritos = [...favoritos, id];
    }

    localStorage.setItem(
      "favoritos",
      JSON.stringify(novosFavoritos)
    );

    setCurtido(!curtido);
  }

  return (
    <button
      className={styles.button}
      onClick={alternarCurtida}
    >
      {curtido ? "❤️ Curtido" : "🤍 Curtir"}
    </button>
  );
}