import type { ITodoStore, ITodoItem } from "./models"

export default function useActions (state: ITodoStore) {

  function setOnceTodo (todoItem: ITodoItem) {
    const findTodo = state.todos.value.find((t: ITodoItem) => t.id === todoItem.id)

    if (!findTodo) {
      state.todos.value.push(todoItem)
    }
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