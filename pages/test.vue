<script setup lang="ts">
import { useTodoStore } from '../store/todo'

const storeTodo = useTodoStore()
console.log('storeTodo: ', storeTodo)
console.log('storeTodo.todos: ', storeTodo.todos)
console.log('storeTodo.getTodos: ', storeTodo.getTodos)
</script>

<template>
  <div class="page-test">
    <div>
      <input type="text">
    </div>
    <div class="todos">
      <ul class="todos-list">
        <li v-for="todoItem in storeTodo.getTodos" :key="todoItem.id">
          {{ todoItem.text }}
        </li>
      </ul>
    </div>
  </div>
</template>