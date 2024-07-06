import viteLogo from "/vite.svg";
import styles from "./ViteIcon.module.css";
import "./index.css";

export const ViteIcon = () => {
  return (
    <>
      <div className={styles.blue}>ViteIcon</div>
      <a href="https://vitejs.dev" target="_blank">
        <img src={viteLogo} className="logo" alt="Vite logo" />
      </a>
    </>
  );
};
