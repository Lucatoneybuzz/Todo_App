import { useState } from "react";
import styles from "../components/form.module.css";
export default function Form({ todos, setTodos }) {
  const [todo, setTodo] = useState({ name: "", done: false });
  function handleSubmit(e) {
    e.preventDefault();
    setTodos([...todos, todo]);
    setTodo({ name: "", done: false });
  }
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.container}>
        <input
          className={styles.input}
          onChange={(e) => setTodo({ name: e.target.value, done: false })}
          value={todo.name}
          type="text"
          placeholder="Enter your todo item..."
        />
        <button className={styles.btn} type="submit">
          Add
        </button>
      </div>
    </form>
  );
}
