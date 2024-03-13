<script setup lang="ts">
import type { ITodoItem as ITodoItemProps } from "../models/todo"

export interface Props {
  item: ITodoItemProps
}

const props = withDefaults(defineProps<Props>(), {});

console.group()
console.log('props: ', props)
console.log('props.item: ', props.item)
console.groupEnd()

// Views
const onViewEditTodo = () => {

}

const onViewDeleteTodo = () => {

}

// Actions
const onActionCompleteTodo = () => {

}


</script>

<template>
  <div class="todo-item">
    <span class="todos-list__item--status">Status: {{ props.item.complete ? 'Success' : 'In Progress' }} </span>
    <template v-if="props.item.actions.edit">
      <input class="todos-list__item--input" type="text" :value="props.item.text">
    </template>
    <template v-else>
      <span class="todos-list__item--text">{{ props.item.text }}</span>
    </template>
    <template v-if="!props.item.actions.delete && !props.item.actions.edit">
      <UikitButton
        class="todos-list__item--edit"
        icon-name="instagram"
        @click.prevent="onViewEditTodo"
      >
        Edit 11
      </UikitButton>
      <button class="todos-list__item--delete" @click.prevent="onViewDeleteTodo">Delete</button>
      <button class="todos-list__item--complete" @click.prevent="onActionCompleteTodo">Complete</button>
    </template>
    <template v-else-if="props.item.actions.delete">
      <button class="todos-list__item--cancel">Cancel</button>
      <button class="todos-list__item--delete">Delete</button>
    </template>
    <template v-else-if="props.item.actions.edit">
      <button class="todos-list__item--cancel">Cancel</button>
      <button class="todos-list__item--accept">Accept</button>
    </template>
  </div>
</template>