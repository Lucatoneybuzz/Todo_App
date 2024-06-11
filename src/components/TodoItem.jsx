import styles from "./todoitem.module.css";

export default function ({ item, todos, setTodos }) {
  function handleDelete(item) {
    setTodos(todos.filter((todo) => todo !== item));
    console.log("The delete button for was clicked for item:", item);
  }
  function handleClick(name) {
    setTodos(
      todos.map((todo) =>
        todo.name === name ? { ...todo, done: !todo.done } : todo
      )
    );
  }
  const classLine = item.done ? styles.completed : ''

  return (
    <div className={styles.item}>
      <div className={styles.itemName}>
        <span className={classLine} onClick={() => handleClick(item.name)}>
          {item.name}
        </span>
        <span>
          <button
            onClick={() => handleDelete(item)}
            className={styles.deletebtn}
          >
            x
          </button>
        </span>
      </div>

      <hr className={styles.line} />
    </div>
  );
}
