<script setup>
const target = ref(null)

defineProps({
  name: {
    type: String,
    default: ""
  },
  placeholder: {
    type: String,
    default: "Search"
  },
  options: {
    type: Array,
    default: () => []
  },
  modelValue: {
    type: String,
    default: ""
  }
})

defineEmits(["update:modelValue"])
</script>

<template>
  <div
    class="relative flex min-h-[38px] max-w-[450px] cursor-text items-center px-3 shadow shadow-lg transition-all"
    @click="target.focus()"
  >
    <slot name="prepend"></slot>
    <input
      ref="target"
      :list="name"
      type="search"
      class="max-h-[32px] flex-auto px-2 pt-1 pb-0.5"
      :placeholder="placeholder"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    >
    <datalist :id="name">
      <option v-if="!options.length">
        Default
      </option>
      <option
        v-for="option in options"
        :key="option"
      >
        {{ option }}
      </option>
    </datalist>
    <slot name="append"></slot>
  </div>
</template>
