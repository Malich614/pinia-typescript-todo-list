import { computed } from "vue"
import type { ITodoStore } from "./models"

export default function useGetters (state: ITodoStore) {
  const getTodos = computed(() => state.todos.value)

  return {
    getTodos
  }
}
