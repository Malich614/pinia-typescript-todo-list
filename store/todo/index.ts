import { defineStore } from 'pinia'
import type { ITodoItem } from "./models"
import { state } from './state'
import * as getters from './getters'

export const useTodoStore = defineStore({
  id: 'Todo',
  state: () => {
    return state
  },
  getters,
  actions: {
    setOnceTodo (todoItem: ITodoItem) {
      const findTodo = this.todos.find((t: ITodoItem) => t.id === todoItem.id)

      if (!findTodo) {
        this.todos.push(todoItem)
      }
    }
  }
})
