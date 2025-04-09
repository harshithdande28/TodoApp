import { useState } from "react";
import Styles from "./form.module.css";
export default function Form({ todos, setTodos }) {
  const [todo, setTodo] = useState({name:"",done:false});
  function handleSubmit(e) {
    e.preventDefault();
    setTodos([...todos, todo]);
    setTodo({name:"",done:false});
  }
  return (
    <div>
      <form className={Styles.todoform} onSubmit={(e) => handleSubmit(e)}>
        <div className={Styles.inputcontainer}>
        <input
          className={Styles.moderninput}
          onChange={(e) => setTodo({name:e.target.value,done:false})}
          value={todo.name}
          type="text"
          placeholder="Enter todo item..."
        />
        <button className={Styles.modernbutton}type="submit">Add</button>
        </div>
      </form>
    </div>
  );
}
