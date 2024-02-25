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
        <li
          class="todos-list__item"
          v-for="todoItem in storeTodo.getTodos"
          :key="todoItem.id"
        >
          <span>Status: {{ todoItem.complete ? 'Success' : 'In Progress' }} </span>
          <template v-if="todoItem.actions.edit">
            <input type="text" :value="todoItem.text">
          </template>
          <template v-else>
            {{ todoItem.text }}
          </template>
          <template v-if="!todoItem.actions.delete && !todoItem.actions.edit">
            <button>Edit</button>
            <button>Delete</button>
            <button>Complete</button>
          </template>
          <template v-else-if="todoItem.actions.delete">
            <button>Cancel</button>
            <button>Delete</button>
          </template>
          <template v-else-if="todoItem.actions.edit">
            <button>Cancel</button>
            <button>Accept</button>
          </template>
        </li>
      </ul>
    </div>
  </div>
</template>