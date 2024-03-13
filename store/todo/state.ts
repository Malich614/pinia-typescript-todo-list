import { ref } from 'vue'
import type { ITodoItem } from "../../models/todo"

export default function useState () {
  const todos = ref<ITodoItem[]>([])

  return {
    todos
  }
}
