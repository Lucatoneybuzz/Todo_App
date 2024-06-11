import styles from "./footer.module.css";
export default function ({ completedTodos, totalTodos }) {
  return (
    <div className={styles.footer}>
      <span className={styles.items}>Total Todos:{totalTodos} </span>
      <span className={styles.items}>Completed Todos:{completedTodos}</span>
    </div>
  );
}
