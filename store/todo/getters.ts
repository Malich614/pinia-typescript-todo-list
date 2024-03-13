import { computed } from "vue"
import type { ITodoStore } from "../../models/todo"

export default function useGetters (state: ITodoStore) {
  const getTodos = computed(() => state.todos.value)

  return {
    getTodos
  }
}
