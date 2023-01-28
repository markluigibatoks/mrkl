<script setup>
const props = defineProps({
  color: {
    type: String,
    default: 'transparent',
    validator (value) {
      return value === 'transparent' || value.split('')[0] === '#'
    }
  },
  size: {
    type: Number,
    default: 16
  }
})

const cssVars = computed(() => {
  return {
    '--base-color': props.color,
    '--base-size': props.size + 'px'
  }
})
</script>

<template>
  <div
    class="animate-pulse h-[length:var(--base-size)] bg-[color:var(--base-color)]"
    :style="[cssVars]"
  >
  </div>
</template>