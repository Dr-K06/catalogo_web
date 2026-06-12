"use client";

import { useState } from "react";

export default function LikeButton() {
  const [curtido, setCurtido] = useState(false);

  function alternarCurtida() {
    setCurtido(!curtido);
  }

  return (
    <button onClick={alternarCurtida}>
      {curtido ? "❤️ Curtido" : "🤍 Curtir"}
    </button>
  );
}