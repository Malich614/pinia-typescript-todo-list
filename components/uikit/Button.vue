<script lang="ts" setup>
type buttonType = "nuxt-link" | "link"

export interface IButton {
  iconName?: string;
  disabled?: boolean;
  type?: buttonType;
  title?: string;
  text?: string;
  to?: any;
}

const BUTTTON_TYPE_LINK = "link"
const BUTTTON_TYPE_NUXT_LINK = "nuxt-link"
const props = withDefaults(defineProps<IButton>(), {})
</script>

<template>
  <a
    v-if="props.type === BUTTTON_TYPE_LINK"
    :href="props.to"
    :title="props.title"
    :disabled="props.disabled"
  >
    <template v-if="props.text">
      {{ props.text }}
    </template>
    <template v-else>
      <slot />
    </template>
    <UikitIcon v-if="props.iconName" :name="props.iconName" />
  </a>
  <NuxtLink
    v-else-if="props.type === BUTTTON_TYPE_NUXT_LINK"
    :to="props.to"
    :title="props.title"
    :disabled="props.disabled"
  >
    <template v-if="props.text">
      {{ props.text }}
    </template>
    <template v-else>
      <slot />
    </template>
    <UikitIcon v-if="props.iconName" :name="props.iconName" />
  </NuxtLink>
  <button
    v-else
    :title="props.title"
    :disabled="props.disabled"
  >
    <template v-if="props.text">
      {{ props.text }}
    </template>
    <template v-else>
      <slot />
    </template>
    <UikitIcon v-if="props.iconName" :name="props.iconName" />
  </button>
</template>

<style lang="scss" scoped>

</style>
