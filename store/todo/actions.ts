import type { ITodoStore, ITodoItem } from "../../models/todo"
import { Todo } from "../../controllers/todo"

export default function useActions (state: ITodoStore) {

  function setOnceTodo (text: string) {
    const todo = new Todo()
    state.todos.value.push(todo.create(text))
  }

  function setTodoActionDelete (id: string | number, isDelete: boolean) {
    const findTodo = state.todos.value.find((t: ITodoItem) => t.id === id)

    if (findTodo) {
      findTodo.actions.delete = isDelete
    }
  }

  return {
    setOnceTodo,
    setTodoActionDelete
  }
}