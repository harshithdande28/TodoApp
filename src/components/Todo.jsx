import { useState } from "react";
import TodoList from "./TodoList";
import Form from "./Form";
import Footer from "./Footer";
export default function Todo() {
  const [todos, setTodos] = useState([]);
  const completed = todos.filter((todo) => todo.done).length;
  const totalTodos = todos.length
  return (
    <div>
      <Form todos={todos} setTodos={setTodos}/>
      <TodoList todos={todos} setTodos={setTodos}/>
      <Footer completedTodos={completed} totalTodos={totalTodos}/>
    </div>
  );
}
