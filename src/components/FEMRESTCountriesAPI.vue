<script setup>
const searchCountryNameInput = ref("")
const filterByRegion = ref("")

const url = computed(() => {
  if (searchCountryNameInput.value !== "") {
    return baseURL + `name/${searchCountryNameInput.value}`
  }

  if (filterByRegion.value !== "") {
    return baseURL + `region/${filterByRegion.value}`
  }

  return `https://restcountries.com/v3.1/all`
})

const countriesRaw = (await axios.get('https://restcountries.com/v3.1/all')).data
const countryNames = computed(() => {
  return countriesRaw.flatMap(x => x.name.common)
})
const countryRegions = ["Africa", "Americas", "Asia", "Europe", "Oceania"]
const baseURL = "https://restcountries.com/v3.1/"

const isDark = useDark()
const toggleDark = useToggle(isDark)

const body = document.querySelector("body")
onMounted(() => {
  body.classList.add(
    "text-[#111517]",
    "dark:text-[#fafafa]",
    "dark:bg-[#2b3945]"
  )
})
</script>
<template>
  <header class="bg-white px-5 py-10 drop-shadow-md dark:bg-[#202c37] sm:py-5">
    <div class="wrapper">
      <div class="flex items-center justify-between">
        <h2 class="text-lg font-[700]">
          Where in the world?
        </h2>
        <base-button
          class="font-[600]"
          @click="toggleDark()"
        >
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
          :options="countryNames"
          placeholder="Search for a country..."
          class="my-5 min-h-[60px] flex-auto rounded-lg pl-8 dark:bg-[#202c37] dark:text-[#111517]"
        >
          <template #prepend>
            <icon-search class="-ml-1 mr-2 h-6 w-10 pr-1 dark:text-[#fafafa]" />
          </template>
        </base-search-input>

        <select
          ref="target"
          v-model="filterByRegion"
          class="dark:text-white select my-5 min-h-[60px] max-w-[280px] flex-auto rounded-lg !pl-8 leading-[60px] dark:bg-[#202c37] w-full appearance-none rounded-lg bg-white bg-clip-padding bg-no-repeat py-1.5 pl-3 pr-10 shadow shadow-lg transition ease-in-out focus:border-blue-600 focus:bg-white focus:text-gray-700 focus:outline-none"
        >
          <option
            value=""
            selected
            default
            disabled
          >
            Filter by Region
          </option>
          <option
            v-for="option in countryRegions"
            :key="option"
            :value="option"
          >
            {{ option }}
          </option>
        </select>
      </div>
    </div>
  </div>
  <div class="px-5">
    <div class="wrapper">
      <base-list :url="url">
        <template #list="{ items }">
          <ul
            class="grid grid-cols-1 justify-items-center gap-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
          >
            <li
              v-for="country of items"
              :key="country"
            >
              <div
                class="flag max-w-[320px] overflow-hidden rounded-lg shadow shadow-lg"
              >
                <figure class="bg-slate-100">
                  <img
                    class="h-[180px] w-[320px] object-contain"
                    :src="country.flags.svg"
                    :alt="country.name.common"
                  >
                </figure>

                <section class="p-5 pb-10 dark:bg-[#202c37]">
                  <h3 class="mb-3 text-lg font-[700]">
                    {{ country.name.common }}
                  </h3>
                  <ul>
                    <li>
                      <span class="font-[600]">Population:</span>
                      {{ country.population }}
                    </li>
                    <li>
                      <span class="font-[600]">Region:</span>
                      {{ country.region }}
                    </li>
                    <li>
                      <span class="font-[600]">Capital:</span>
                      {{ country.capital ? country.capital[0] : "" }}
                    </li>
                  </ul>
                </section>
              </div>
            </li>
          </ul>
        </template>
      </base-list>
    </div>
  </div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,wght@0,200;0,300;0,400;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,600;1,700;1,800;1,900&display=swap");

* {
  font-size: 14px;
  /* color: #2b3945;
  color: #202c37;
  color: #858585;
  color: #ffffff;
  color: #111517; */
}

.wrapper {
  max-width: 1440px;
  margin: auto;
}

.select {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 24 24' %3E%3Cpath fill='currentColor' d='M7.41 8.58L12 13.17l4.59-4.59L18 10l-6 6l-6-6l1.41-1.42Z' %3E%3C/path%3E%3C/svg%3E");
  background-position: right 0.75rem center;
  background-size: 16px 12px;
}
</style>
