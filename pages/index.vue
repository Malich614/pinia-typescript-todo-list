<script setup lang="ts">
import type { ITodoItem } from '../store/todo/models';
import { useTodoStore } from '../store/todo'
import { ref } from 'vue';

const storeTodo = useTodoStore()
const inputText =  ref<string>('')

const onSaveTodo = () => {
  if (inputText.value.length) {
    storeTodo.setOnceTodo(inputText.value)
  }
}

// Views
const onViewEditTodo = (todoItem: ITodoItem) => {

}

const onViewDeleteTodo = (todoItem: ITodoItem) => {

}

// Actions
const onActionCompleteTodo = (todoItem: ITodoItem) => {

}
console.log('storeTodo: ', storeTodo)
console.log('storeTodo.todos: ', storeTodo.todos)
console.log('storeTodo.getTodos: ', storeTodo.getTodos)
</script>

<template>
  <div class="page-test">
    <div>
      <input v-model="inputText" type="text" @keypress.enter="onSaveTodo">
    </div>
    <div class="todos">
      <ul class="todos-list">
        <li
          class="todos-list__item"
          v-for="todoItem in storeTodo.getTodos"
          :key="todoItem.id"
        >
          <span class="todos-list__item--status">Status: {{ todoItem.complete ? 'Success' : 'In Progress' }} </span>
          <template v-if="todoItem.actions.edit">
            <input class="todos-list__item--input" type="text" :value="todoItem.text">
          </template>
          <template v-else>
            <span class="todos-list__item--text">{{ todoItem.text }}</span>
          </template>
          <template v-if="!todoItem.actions.delete && !todoItem.actions.edit">
            <button class="todos-list__item--edit" @click.prevent="onViewEditTodo(todoItem)">Edit</button>
            <button class="todos-list__item--delete" @click.prevent="onViewDeleteTodo(todoItem)">Delete</button>
            <button class="todos-list__item--complete" @click.prevent="onActionCompleteTodo(todoItem)">Complete</button>
          </template>
          <template v-else-if="todoItem.actions.delete">
            <button class="todos-list__item--cancel">Cancel</button>
            <button class="todos-list__item--delete">Delete</button>
          </template>
          <template v-else-if="todoItem.actions.edit">
            <button class="todos-list__item--cancel">Cancel</button>
            <button class="todos-list__item--accept">Accept</button>
          </template>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.todos {
  &-list {
    &__item {

    }
  }
}
</style>