<script setup>
const props = defineProps({
  length: {
    type: Number,
    default: 1
  },
  modelValue: {
    type: Number,
    default: 1
  },
  circle: {
    type: Boolean,
    default: false
  },
  totalVisible: {
    type: Number,
    default: 2,
    validator (value) {
      return value >= 2
    }
  }
})

const emit = defineEmits(['update:modelValue'])

function prev (){
  if (props.modelValue === 1) {
    return
  }

  emit('update:modelValue', props.modelValue - 1)
}

function jumpTo (page){
  emit('update:modelValue', page)
}

function next (){
  if (props.modelValue === props.length) {
    return
  }

  emit('update:modelValue', props.modelValue + 1)
}

const pages = computed(() => {
  let startPage = (props.modelValue <= parseInt(props.totalVisible / 2)) ? 1 : props.modelValue - parseInt(props.totalVisible / 2)
  let endPage = props.totalVisible - 1 + startPage
  endPage = (props.length < endPage) ? props.length : endPage
  const diff = startPage - endPage + props.totalVisible - 1
  startPage -= (startPage - diff > 0) ? diff : 0

  return Array.from({ length: props.totalVisible }, (_, n) => n + startPage)
})
</script>

<template>
  <ul class="flex items-center gap-2">
    <li>
      <base-button2
        color="#2c2c2c"
        :class="{'rounded-full': circle}"
        :disabled="modelValue === 1"
        class="!h-8"
        @click="jumpTo(1)"
      >
        FIRST
      </base-button2>
    </li>

    <li>
      <base-button2
        icon
        size="xsm"
        color="#2c2c2c"
        :class="{'rounded-full': circle}"
        :disabled="modelValue === 1"
        @click="prev"
      >
        &#171;
      </base-button2>
    </li>

    <li
      v-for="n in pages"
      :key="n"
    >
      <base-button2
        icon
        size="xsm"
        :color="n === modelValue ? '#1f4da2' : '#2c2c2c'"
        :class="{'rounded-full': circle}"
        @click="jumpTo(n)"
      >
        {{ n }}
      </base-button2>
    </li>
    <li>
      <base-button2
        icon
        size="xsm"
        color="#2c2c2c"
        :class="{'rounded-full': circle}"
        :disabled="modelValue === length"
        @click="next"
      >
        &#187;
      </base-button2>
    </li>
    <li>
      <base-button2
        color="#2c2c2c"
        :class="{'rounded-full': circle}"
        :disabled="modelValue === length"
        class="!h-8"
        @click="jumpTo(length)"
      >
        Last
      </base-button2>
    </li>
  </ul>
</template>