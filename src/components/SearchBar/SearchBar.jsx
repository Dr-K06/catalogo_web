import styles from "./SearchBar.module.css";

export default function SearchBar({ busca, setBusca }) {
  return (
    <input
      className={styles.input}
      type="text"
      placeholder="Pesquisar produto..."
      value={busca}
      onChange={(e) => setBusca(e.target.value)}
    />
  );
}