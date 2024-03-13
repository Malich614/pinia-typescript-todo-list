<script setup lang="ts">
// Pinia
import { useTodoStore } from '../store/todo'

const storeTodo = useTodoStore()

const onSaveTodo = (value: string) => {
  if (value.length) {
    storeTodo.setOnceTodo(value)
  }
}

console.log('storeTodo: ', storeTodo)
console.log('storeTodo.todos: ', storeTodo.todos)
console.log('storeTodo.getTodos: ', storeTodo.getTodos)
</script>

<template>
  <div class="page-test">
    <TodoField @save-todo="onSaveTodo" />
    <div class="todos">
      <ul class="todos-list">
        <li
          class="todos-list__item"
          v-for="todoItem in storeTodo.getTodos"
          :key="todoItem.id"
        >
          <Todo :item="todoItem" />
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>