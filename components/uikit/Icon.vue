<script lang="ts" setup>
export interface IProps {
  name: string;
}
const props = withDefaults(defineProps<IProps>(), {})
</script>

<template>
  <i :class="`icons-${props.name}`"></i>
</template>

<style lang="scss" scoped>
// .icons-icon {
//   &:before {
//     content: var(--icons-icon);
//     font-family: "icons";
//   }
// }

// .icons-instagram {
//   &:before {
//     content: var(--icons-instagram);
//     font-family: "icons";
//   }
// }

// .icons-quest {
//   &:before {
//     content: var(--icons-quest);
//     font-family: "icons";
//   }
// }
</style>