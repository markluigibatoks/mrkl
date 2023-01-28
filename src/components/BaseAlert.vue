<script setup>
import MdiAlertCircle from '@/components/icons/MdiAlertCircle.vue'
import MdiAlertOctagon from '@/components/icons/MdiAlertOctagon.vue'
import MdiInformation from '@/components/icons/MdiInformation.vue'
import MdiCheckCircle from '@/components/icons/MdiCheckCircle.vue'

const props = defineProps({
  type: {
    type: String,
    default: 'warning',
    validator (value) {
      return ['success', 'info', 'warning', 'error'].includes(value)
    }
  },
  orientation: {
    type: String,
    default: 'landscape',
    validator (value) {
      return ['portrait', 'landscape'].includes(value)
    }
  }
})

const classList = computed(() => {
  const list = []

  if (props.orientation === 'portrait') {
    list.push('flex-col')
  }

  if (props.type === 'success') {
    list.push('text-[#4caf50]')
  } else if (props.type === 'info') {
    list.push('text-[#2196f3]')
  } else if (props.type === 'error') {
    list.push('text-[#ff5252]')
  } else {
    list.push('text-[#84756e]')
  }

  return list
})

const icon = computed(() => {
  let i

  if (props.type === 'success') {
    i = MdiCheckCircle
  } else if (props.type === 'info') {
    i = MdiInformation
  } else if (props.type === 'error') {
    i = MdiAlertOctagon
  } else {
    i = MdiAlertCircle
  }

  return i
})

</script>

<template>
  <div
    :class="classList"
    class="flex items-center gap-1 font-[600]"
  >
    <slot name="icon">
      <div class="flex justify-center items-center w-6 h-6">
        <component
          :is="icon"
        />
      </div>
    </slot>

    <slot></slot>
  </div>
</template>