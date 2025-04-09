import Styles from "./todoitem.module.css";
export default function TodoItem({ item, todos, setTodos }) {
  function handleDelete(item) {
    setTodos(todos.filter((todo) => todo !== item));
  }
  function handleClick(name) {
    setTodos(
      todos.map((todo) =>
        todo.name === name ? { ...todo, done: !todo.done } : todo
      )
    );
    console.log(todos);
  }
  const className = item.done ? Styles.completed : "";
  return (
    <div className={Styles.item}>
      <div className={Styles.itemName}>
        <span className={className} onClick={() => handleClick(item.name)}>
          {item.name}
        </span>
        <span>
          <button
            onClick={() => handleDelete(item)}
            className={Styles.deletebutton}
          >
            x
          </button>
        </span>
      </div>
      <hr className={Styles.line} />
    </div>
  );
}
