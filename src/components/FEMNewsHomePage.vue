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
        <nav class="hidden lg:block">
          <ul class="flex gap-10">
            <li>
              <a href="#" class="text-[#9492a0] hover:text-[#f15e50]">Home</a>
            </li>
            <li>
              <a href="#" class="text-[#9492a0] hover:text-[#f15e50]">New</a>
            </li>
            <li>
              <a href="#" class="text-[#9492a0] hover:text-[#f15e50]"
                >Popular</a
              >
            </li>
            <li>
              <a href="#" class="text-[#9492a0] hover:text-[#f15e50]"
                >Trending</a
              >
            </li>
            <li>
              <a href="#" class="text-[#9492a0] hover:text-[#f15e50]"
                >Categories</a
              >
            </li>
          </ul>
        </nav>
        <button class="lg:hidden">
          <figure>
            <img :src="menu" alt="hamburger" />
          </figure>
        </button>
      </div>
    </div>
  </header>
  <div class="px-5 py-6">
    <div class="m-auto max-w-[1110px]">
      <div class="flex flex-col justify-between gap-5 lg:flex-row">
        <div class="w-full lg:max-w-[730px]">
          <div class="mb-7 w-full">
            <figure class="sm:hidden">
              <img :src="web3Mobile" alt="web 3" />
            </figure>
            <figure class="hidden sm:block">
              <img :src="web3Desktop" alt="web 3" />
            </figure>
          </div>
          <div
            class="flex flex-col justify-between pr-3 text-center md:flex-row md:gap-10 md:text-start"
          >
            <h2
              class="mb-5 w-full text-3xl font-[800] text-[#00001a] md:text-6xl"
            >
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
                class="mx-auto mt-5 inline-block flex min-h-[50px] max-w-[186px] items-center justify-center bg-[#f15e50] px-5 py-3 text-center text-sm font-[600] uppercase tracking-[4px] text-white hover:bg-[#00001a] md:mx-0 md:mt-10"
                >Read more</a
              >
            </div>
          </div>
        </div>
        <div class="w-full bg-[#00001a] px-6 py-7 lg:max-w-[350px]">
          <h2 class="mb-2 text-4xl font-[700] text-[#e9ab53]">New</h2>
          <div
            class="items-around flex flex-col justify-center divide-y divide-[#5f5f79]"
          >
            <section class="w-full py-8">
              <a href="#" class="text-[#fffdfa] hover:text-[#e9ab53]"
                ><h3 class="mb-2 text-xl font-[700]">
                  Hydrogen VS Electric Cars
                </h3>
              </a>
              <p class="leading-6 text-[#c5c6ce]">
                Will hydrogen-fueled cars ever catch up to EVs?
              </p>
            </section>
            <section class="w-full py-8">
              <a href="#" class="text-[#fffdfa] hover:text-[#e9ab53]"
                ><h3 class="mb-2 text-xl font-[700]">
                  The Downsides of AI Artistry
                </h3>
              </a>
              <p class="leading-6 text-[#c5c6ce]">
                What are the possible adverse effects of on-demand AI image
                generation?
              </p>
            </section>
            <section class="w-full pt-8">
              <a href="#" class="text-[#fffdfa] hover:text-[#e9ab53]"
                ><h3 class="mb-2 text-xl font-[700]">
                  Is VC Funding Drying Up?
                </h3>
              </a>
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
        class="flex w-full flex-col flex-wrap justify-center gap-10 lg:flex-row lg:flex-nowrap lg:justify-between lg:gap-7"
      >
        <li class="relative">
          <section class="pl-[110px]">
            <figure class="absolute top-0 left-0 h-[112px] w-[90px]">
              <img :src="retroPCs" alt="retro PCs" />
            </figure>
            <span class="text-3xl font-[700] text-[#c5c6ce]">01</span>
            <a href="#" class="text-[#0b0b19] hover:text-[#f15e50]">
              <h2 class="text-md my-2 font-[700]">Reviving Retro PCs</h2>
            </a>
            <p>What happens when old PCs are given modern upgrades?</p>
          </section>
        </li>
        <li class="relative">
          <section class="pl-[110px]">
            <figure class="absolute top-0 left-0 h-[112px] w-[90px]">
              <img :src="topLaptops" alt="keyboard keys" />
            </figure>
            <span class="text-3xl font-[700] text-[#c5c6ce]">02</span>
            <a href="#" class="text-[#0b0b19] hover:text-[#f15e50]">
              <h2 class="text-md my-2 font-[700]">Top 10 Laptops of 2022</h2>
            </a>
            <p>Our best picks for various needs and budgets.</p>
          </section>
        </li>
        <li class="relative">
          <section class="pl-[110px]">
            <figure class="absolute top-0 left-0 h-[112px] w-[90px]">
              <img :src="gamingGrowth" alt="keyboard keys" />
            </figure>
            <span class="text-3xl font-[700] text-[#c5c6ce]">03</span>
            <a href="#" class="text-[#0b0b19] hover:text-[#f15e50]">
              <h2 class="text-md my-2 font-[700]">The Growth of Gaming</h2>
            </a>
            <p>How the pandemic has sparked fresh opportunities.</p>
          </section>
        </li>
      </ul>
    </div>
  </div>

  <div class="attribution">
    Challenge by
    <a href="https://www.frontendmentor.io?ref=challenge" target="_blank"
      >Frontend Mentor</a
    >. Coded by <a href="/">mrkl</a>.
  </div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap");

* {
  font-size: 15px;
  font-family: "Inter", sans-serif;
  font-weight: 400;
}

.attribution {
  font-size: 11px;
  text-align: center;
}
.attribution a {
  color: hsl(228, 45%, 44%);
}
</style>
