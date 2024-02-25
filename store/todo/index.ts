import { defineStore } from 'pinia'
import useState from './state'
import useGetters from './getters'
import useActions from './actions'

export const useTodoStore = defineStore('Todo', () => {
  const state = useState()
  const getters = useGetters(state)
  const actions = useActions(state)

  return {
    ...state,
    ...getters,
    ...actions
  }
})
