import type { ITodoStore } from "./models"

export const state: ITodoStore = {
  todos: [
    {
      id: 1,
      text: 'Test',
      complete: false
    }
  ]
}
