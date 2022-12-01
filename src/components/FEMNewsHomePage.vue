<script setup>
const logo = new URL("@/assets/images/logo.svg", import.meta.url).href;
const menu = new URL("@/assets/images/icon-menu.svg", import.meta.url).href;
const menuClose = new URL(
  "@/assets/images/icon-menu-close.svg",
  import.meta.url
).href;
const web3Mobile = new URL(
  "@/assets/images/image-web-3-mobile.jpg",
  import.meta.url
).href;
const web3Desktop = new URL(
  "@/assets/images/image-web-3-desktop.jpg",
  import.meta.url
).href;
const retroPCs = new URL("@/assets/images/image-retro-pcs.jpg", import.meta.url)
  .href;
const topLaptops = new URL(
  "@/assets/images/image-top-laptops.jpg",
  import.meta.url
).href;
const gamingGrowth = new URL(
  "@/assets/images/image-gaming-growth.jpg",
  import.meta.url
).href;
</script>

<template>
  <header class="p-5">
    <div class="m-auto max-w-[1110px]">
      <div class="flex items-center justify-between">
        <figure>
          <img :src="logo" alt="W" />
        </figure>
        <figure>
          <img :src="menu" alt="hamburger" />
        </figure>
      </div>
    </div>
  </header>
  <div class="px-5 py-6">
    <div class="m-auto max-w-[1110px]">
      <div class="flex justify-between">
        <div class="max-w-[730px]">
          <div class="mb-7 w-full">
            <figure class="sm:hidden">
              <img :src="web3Mobile" alt="web 3" />
            </figure>
            <figure class="hidden sm:block">
              <img :src="web3Desktop" alt="web 3" />
            </figure>
          </div>
          <div class="flex flex-col justify-between gap-10 pr-3 sm:flex-row">
            <h2 class="w-full text-6xl font-[800] text-[#00001a]">
              The Bright Future of Web 3.0?
            </h2>
            <div class="w-full">
              <p>
                We dive into the next evolution of the web that claims to put
                the power of the platforms back into the hands of the people.
                But is it really fulfilling its promise?
              </p>

              <a
                href="#"
                class="mt-10 inline-block flex min-h-[50px] max-w-[186px] items-center justify-center bg-[#f15e50] px-5 py-3 text-center text-sm font-[600] uppercase tracking-[4px] text-white"
                >Read more</a
              >
            </div>
          </div>
        </div>
        <div class="max-w-[350px] bg-[#00001a] px-6 py-7">
          <h2 class="mb-2 text-4xl font-[700] text-[#e9ab53]">New</h2>
          <div
            class="items-around flex flex-col justify-center divide-y divide-[#5f5f79]"
          >
            <section class="w-full py-8">
              <h3 class="mb-2 text-xl font-[700] text-[#fffdfa]">
                Hydrogen VS Electric Cars
              </h3>
              <p class="leading-6 text-[#c5c6ce]">
                Will hydrogen-fueled cars ever catch up to EVs?
              </p>
            </section>
            <section class="w-full py-8">
              <h3 class="mb-2 text-xl font-[700] text-[#fffdfa]">
                The Downsides of AI Artistry
              </h3>
              <p class="leading-6 text-[#c5c6ce]">
                What are the possible adverse effects of on-demand AI image
                generation?
              </p>
            </section>
            <section class="w-full pt-8">
              <h3 class="mb-2 text-xl font-[700] text-[#fffdfa]">
                Is VC Funding Drying Up?
              </h3>
              <p class="leading-6 text-[#c5c6ce]">
                Private funding by VC firms is down 50% YOY. We take a look at
                what that means.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="px-5 py-6">
    <div class="m-auto max-w-[1110px]">
      <ul
        class="flex list-inside list-decimal justify-between marker:text-4xl marker:font-[700]"
      >
        <li class="relative">
          <section>
            <!-- <figure class="absolute top-0 left-0 h-[112px] w-[90px]">
            <img :src="retroPCs" alt="retro PCs" />
          </figure> -->
            <h2>Reviving Retro PCs</h2>
            <p>What happens when old PCs are given modern upgrades?</p>
          </section>
        </li>
        <li class="relative">
          <section>
            <!-- <figure class="absolute top-0 left-0 h-[112px] w-[90px]">
            <img :src="topLaptops" alt="keyboard keys" />
          </figure> -->
            <h2>Top 10 Laptops of 2022</h2>
            <p>Our best picks for various needs and budgets.</p>
          </section>
        </li>
        <li class="relative">
          <section>
            <!-- <figure class="absolute top-0 left-0 h-[112px] w-[90px]">
            <img :src="gamingGrowth" alt="keyboard keys" />
          </figure> -->
            <h2>The Growth of Gaming</h2>
            <p>How the pandemic has sparked fresh opportunities.</p>
          </section>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap");

* {
  font-size: 15px;
  font-family: "Inter", sans-serif;
  font-weight: 400;
  color: #fffdfa;
  color: #c5c6ce;
  color: #5d5f79;
  /* color: #00001a; */
}
</style>
