<script setup>
const props = defineProps({
  isShowScroll: {
    type: Boolean,
    default: true
  },
  isInfinite: {
    type: Boolean,
    default: false
  },
  isPaginated: {
    type: Boolean,
    default: false
  },
  isLoadMore: {
    type: Boolean,
    default: false
  },
  url: {
    type: String,
    default: "https://jsonplaceholder.typicode.com/comments?_page=3&_limit=10"
  },
  params: {
    type: Object,
    default: () => ({})
  },
  page: {
    type: Number,
    default: 1
  },
  // eslint-disable-next-line vue/no-unused-properties
  limit: {
    type: Number,
    default: 10
  }
})

const items = ref([])

const target = ref(null)
const isTargetIntersecting = ref(false)

const isLoading = ref(false)

const wrapper = ref(null)
const page = ref(1)

onMounted(() => {
  fetchItems()

  useIntersectionObserver(target.value, ([{ isIntersecting }]) => {
    isTargetIntersecting.value = isIntersecting

    if (props.isInfinite && isIntersecting && !isLoading.value) {
      page.value++
    }
  })
})

watchEffect(fetchItems)

async function fetchItems () {
  isLoading.value = true

  const fetchParams = {
    ...props.params
  }

  const { data, isFetching, error } = await useFetch({
    url: props.url,
    params: fetchParams
  })

  isLoading.value = isFetching.value

  if (error.value) {
    items.value.length = 0
    return
  }

  if (props.isPaginated) {
    items.value = data.value
    scrollToTop()
  } else if (props.isInfinite || props.isLoadMore) {
    items.value.push(...data.value)
  } else {
    items.value = data.value
  }
}

function scrollToTop () {
  if (useMediaQueries.isSm) {
    wrapper.value.scrollTop = 0
  } else {
    const modal = wrapper.value.closest(".modal")
    modal.scrollTop = 0
  }
}
</script>

<template>
  <div
    ref="wrapper"
    class="w-full overflow-auto"
    :class="{ toggleScrollbar: !isShowScroll }"
  >
    <template v-if="isPaginated && isLoading">
      <slot name="placeholder">
        <div class="flex flex-col gap-2">
          <base-placeholder
            v-for="n of 5"
            :key="n"
            :size="40"
            :color="'#2c2c2c'"
            class="flex-auto"
          />
        </div>
      </slot>
    </template>
    <template v-else>
      <slot
        name="list"
        :items="items"
      >
        <ul>
          <li
            v-for="item in items"
            :key="item"
          >
            {{ item }}
          </li>
        </ul>
      </slot>
    </template>
    <div
      v-if="isPaginated || isInfinite || isLoadMore"
      ref="target"
      class="flex h-14 w-full items-center justify-center"
      :class="{ '!h-full': !items.length }"
    >
      <template v-if="!items.length">
        <slot name="empty">
          <base-alert
            v-if="!items.length"
            type="info"
            orientation="portrait"
          >
            <template #icon>
              <ph-warning-circle class="text-7xl text-[#9eaccf]" />
            </template>
            <p>No Information here.</p>
          </base-alert>
        </slot>
      </template>

      <template v-else>
        <template v-if="isInfinite">
          <slot name="load">
            <div v-if="isLoading">
              <base-loader class="-ml-1 mr-2 inline h-4 w-4" /> Loading
            </div>
          </slot>
        </template>

        <template v-else-if="isLoadMore">
          <base-button
            color="#1f4da2"
            size="md"
            shadowed
            class="rounded-full"
            @click="fetchItems()"
          >
            Load More
          </base-button>
        </template>

        <template v-else-if="isPaginated">
          <base-pagination
            v-model="page"
            :length="50"
            :total-visible="useMediaQueries.isSm ? 5 : 2"
            circle
          />
        </template>
      </template>
    </div>
  </div>
</template>

<style scoped>
.toggleScrollbar {
  overflow-y: scroll;
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* Internet Explorer 10+ */
}
.toggleScrollbar::-webkit-scrollbar {
  /* WebKit */
  width: 0;
  height: 0;
}
</style>
