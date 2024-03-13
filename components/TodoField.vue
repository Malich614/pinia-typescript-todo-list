<script lang="ts" setup>
import { ref } from "vue"
import type { Ref } from "vue"

const text: Ref<string> = ref('')
const emit = defineEmits(['save-todo'])

// Emit save todo
const onSaveTodo = () => {
  emit('save-todo', text.value)
  text.value = ''
}

</script>

<template>
  <div class="todo-field">
    <input v-model="text" type="text" @keypress.enter="onSaveTodo">
  </div>
</template>