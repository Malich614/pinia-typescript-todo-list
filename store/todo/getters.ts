import type { ITodoStore, ITodoItem } from "./models"

export const getTodos = (state: ITodoStore): ITodoItem[] => {
  return state.todos
}
