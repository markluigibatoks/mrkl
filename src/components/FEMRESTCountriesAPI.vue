<script setup>
import { computed, ref, watchEffect } from "vue";
import BaseButton from "@/components/BaseButton.vue";
import BaseSelect from "@/components/BaseSelect.vue";
import BaseSearchInput from "@/components/BaseSearchInput.vue";
import IconDarkModeOutline from "@/components/icons/IconDarkModeOutline.vue";

const searchCountryNameInput = ref(null);

const flagsByName = computed(() => {});
</script>
<template>
  <header class="bg-white px-5 py-10 drop-shadow-md sm:py-5">
    <div class="wrapper">
      <div class="flex items-center justify-between">
        <h2 class="text-lg font-[700]">Where in the world?</h2>
        <base-button class="font-[600]">
          <icon-dark-mode-outline class="-ml-1 mr-2" />Dark Mode
        </base-button>
      </div>
    </div>
  </header>
  <div class="px-5">
    <div class="wrapper">
      <div class="flex flex-col justify-between lg:flex-row lg:items-center">
        <base-search-input
          v-model="searchCountryNameInput"
          name="countries"
          placeholder="Search for a country..."
          class="my-5 min-h-[60px] flex-auto rounded-lg pl-8"
        />

        <base-select
          class="my-5 min-h-[60px] max-w-[280px] flex-auto rounded-lg !pl-8"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,wght@0,200;0,300;0,400;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,600;1,700;1,800;1,900&display=swap");

* {
  font-size: 14px;
  color: #2b3945;
  color: #202c37;
  color: #858585;
  color: #ffffff;
  color: #111517;
}

body {
  color: #fafafa;
}
</style>
