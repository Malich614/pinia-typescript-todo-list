import { ref } from 'vue'
import type { ITodoItem } from "./models"

export default function useState () {
  const todos = ref<ITodoItem[]>([
    {
      id: 1,
      text: 'Test',
      complete: false,
      actions: {
        edit: false,
        delete: false,
      },
    }
  ])

  return {
    todos
  }
}
