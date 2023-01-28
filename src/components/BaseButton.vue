<script setup>
const iconSizes = {
  xsm: 32,
  sm: 40,
  md: 56,
  lg: 64,
  xl: 72,
  "2xl": 80,
  "3xl": 88
}

const defaultSizes = {
  xsm: 20,
  sm: 28,
  md: 36,
  lg: 44,
  xl: 52,
  "2xl": 60,
  "3xl": 68
}

const props = defineProps({
  // eslint-disable-next-line vue/no-unused-properties
  isLoading: {
    type: Boolean,
    default: false
  },
  color: {
    type: String,
    default: "transparent",
    validator (value) {
      return value === "transparent" || value.split("")[0] === "#"
    }
  },
  shadowColor: {
    type: String,
    default: "transparent",
    validator (value) {
      return value === "transparent" || value.split("")[0] === "#"
    }
  },
  shadowed: {
    type: Boolean,
    default: false
  },
  icon: {
    type: Boolean,
    default: false
  },
  disabled: {
    type: Boolean,
    default: false
  },
  block: {
    type: Boolean,
    default: false
  },
  outlined: {
    type: Boolean,
    default: false
  },
  size: {
    type: String,
    default: "md",
    validator (value) {
      return ["xsm", "sm", "md", "lg", "xl", "2xl", "3xl"].includes(value)
    }
  }
})

const classList = computed(() => {
  const list = []

  if (props.icon) {
    list.push(
      "w-[length:var(--base-size)] h-[length:var(--base-size)] min-w-[length:var(--base-size)] text-2xl"
    )
  } else {
    list.push("px-4 h-[length:var(--base-size)]")
  }

  if (props.disabled) {
    list.push("!opacity-60 pointer-events-none")
  }

  if (props.block) {
    list.push("!min-w-full !max-w-none flex-auto")
  }

  if (props.outlined) {
    list.push(
      "border border-[color:var(--base-color)] !bg-transparent text-[color:var(--base-color)]"
    )
  }

  if (props.shadowed) {
    list.push(
      "shadow-[inset_0_1px_1px_var(--light-color),_inset_0_0_1px_#255fb6]"
    )
  }

  return list
})

const cssVars = computed(() => {
  return {
    "--base-color": props.color,
    "--light-color":
      props.shadowColor === "transparent"
        ? lighten(props.color || "#000", 50)
        : props.shadowColor,
    "--base-size":
      useGetKey(props.size, props.icon ? iconSizes : defaultSizes) + "px"
  }
})
</script>

<template>
  <button
    :style="[cssVars]"
    class="inline-flex items-center justify-center whitespace-nowrap bg-[color:var(--base-color)] uppercase transition-all duration-200 ease-in-out hover:brightness-90 focus:ring-2 focus:ring-blue-500 active:brightness-110"
    :class="[classList]"
  >
    <slot></slot>
  </button>
</template>
