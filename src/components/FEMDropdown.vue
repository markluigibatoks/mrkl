<script setup>
import { getImageURL } from "../composables/useStaticURL";
import { ref } from "vue";

const isMobileNavOpen = ref(false);

const isMenuSub1Open = ref(false);
const isMenuSub2Open = ref(false);
</script>

<template>
  <header class="lg:hidden">
    <div class="wrapper px-5 py-5">
      <div class="content">
        <div class="flex items-center justify-between">
          <figure>
            <img :src="getImageURL('femdropdown/logo.svg')" alt="snap logo" />
          </figure>

          <button @click="isMobileNavOpen = !isMobileNavOpen">
            <figure>
              <img
                :src="getImageURL('femdropdown/icon-menu.svg')"
                alt="icon-menu"
              />
            </figure>
          </button>
        </div>
      </div>
    </div>
    <transition
      enter-from-class="opacity-0"
      enter-active-class="duration-200 ease-in"
      enter-to-class="opacity-100"
      leave-from-class="opacity-100"
      leave-active-class="duration-200 ease-out"
      leave-to-class="opacity-0"
    >
      <nav
        v-show="isMobileNavOpen"
        class="fixed top-0 left-0 h-full w-full bg-black/20"
      >
        <transition
          enter-from-class="translate-x-full"
          enter-active-class="duration-200 ease-in transform"
          enter-to-class="translate-x-0"
          leave-from-class="translate-x-0"
          leave-active-class="duration-200 ease-out transform"
          leave-to-class="translate-x-full"
        >
          <div
            v-show="isMobileNavOpen"
            class="wrapper absolute top-0 right-0 h-full w-2/3 bg-white"
          >
            <div class="content relative px-5 pt-20 pb-5">
              <button
                @click="isMobileNavOpen = !isMobileNavOpen"
                class="absolute top-5 right-5"
              >
                <svg width="26" height="26" xmlns="http://www.w3.org/2000/svg">
                  <g fill="#151515" fill-rule="evenodd">
                    <path d="m2.393.98 22.628 22.628-1.414 1.414L.979 2.395z" />
                    <path
                      d="M.98 23.607 23.609.979l1.414 1.414L2.395 25.021z"
                    />
                  </g>
                </svg>
              </button>
              <ul>
                <li class="relative py-1">
                  <div class="flex items-center gap-3">
                    <button
                      class="text-lg font-[700] text-[#696969] hover:text-[#141414]"
                    >
                      Features
                    </button>
                    <button
                      @click="isMenuSub1Open = !isMenuSub1Open"
                      class="p-3"
                    >
                      <i v-if="isMenuSub1Open">
                        <svg
                          width="10"
                          height="6"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            stroke="#686868"
                            stroke-width="1.5"
                            fill="none"
                            d="m1 5 4-4 4 4"
                          />
                        </svg>
                      </i>
                      <i v-else="isMenuSub1Open">
                        <svg
                          width="10"
                          height="6"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            stroke="#686868"
                            stroke-width="1.5"
                            fill="none"
                            d="m1 1 4 4 4-4"
                          />
                        </svg>
                      </i>
                    </button>
                  </div>

                  <ul
                    :class="[isMenuSub1Open ? 'max-h-screen' : 'max-h-0']"
                    class="h-full overflow-hidden px-5 transition-[max-height]"
                  >
                    <li class="relative py-1">
                      <div class="flex items-center gap-2">
                        <button
                          class="flex items-center gap-2 text-lg font-[700] text-[#696969] hover:text-[#141414]"
                        >
                          <svg
                            width="14"
                            height="16"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M14 3v12a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h1V1a1 1 0 1 1 2 0v1h2V1a1 1 0 1 1 2 0v1h2V1a1 1 0 0 1 2 0v1h1a1 1 0 0 1 1 1Zm-2 3H2v1h10V6Zm0 3H2v1h10V9Zm0 3H2v1h10v-1Z"
                              fill="#726CEE"
                            />
                          </svg>
                          Todo List
                        </button>
                      </div>
                    </li>
                    <li class="relative py-1">
                      <div class="flex items-center gap-2">
                        <button
                          class="flex items-center gap-2 text-lg font-[700] text-[#696969] hover:text-[#141414]"
                        >
                          <svg
                            width="16"
                            height="16"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M12.667 8.667h-4v4h4v-4ZM11.334 0v1.333H4.667V0h-2v1.333h-1C.75 1.333 0 2.083 0 3v11.333C0 15.25.75 16 1.667 16h12.667C15.25 16 16 15.25 16 14.333V3c0-.917-.75-1.667-1.666-1.667h-1V0h-2Zm3 14.333H1.667V5.5h12.667v8.833Z"
                              fill="#4BB1DA"
                            />
                          </svg>
                          Calendar
                        </button>
                      </div>
                    </li>
                    <li class="relative py-1">
                      <div class="flex items-center gap-2">
                        <button
                          class="flex items-center gap-2 text-lg font-[700] text-[#696969] hover:text-[#141414]"
                        >
                          <svg
                            width="13"
                            height="17"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M6.408 13.916c-3.313 0-6-1.343-6-3 0-.612.371-1.18 1-1.654V7.916a5 5 0 0 1 3.041-4.6 2 2 0 0 1 3.507-1.664 2 2 0 0 1 .411 1.664 5.002 5.002 0 0 1 3.041 4.6v1.346c.629.474 1 1.042 1 1.654 0 1.657-2.687 3-6 3Zm0 1c.694 0 1.352-.066 1.984-.16.004.054.016.105.016.16a2 2 0 0 1-4 0c0-.055.012-.106.016-.16.633.094 1.29.16 1.984.16Z"
                              fill="#EDD556"
                            />
                          </svg>
                          Reminders
                        </button>
                      </div>
                    </li>
                    <li class="relative py-1">
                      <div class="flex items-center gap-2">
                        <button
                          class="flex items-center gap-2 text-lg font-[700] text-[#696969] hover:text-[#141414]"
                        >
                          <svg
                            width="16"
                            height="16"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0Zm0 2.133a5.867 5.867 0 1 0 0 11.734A5.867 5.867 0 0 0 8 2.133ZM8 3.2a4.8 4.8 0 1 1 0 9.6 4.8 4.8 0 0 1 0-9.6Zm-.533 2.667a.533.533 0 0 0-.534.533v2.133c0 .295.24.534.534.534h3.2a.533.533 0 0 0 0-1.067H8V6.4a.533.533 0 0 0-.533-.533Z"
                              fill="#8E4CB6"
                            />
                          </svg>
                          Planning
                        </button>
                      </div>
                    </li>
                  </ul>
                </li>
                <li class="relative py-1">
                  <div class="flex items-center gap-3">
                    <button
                      class="flex items-center gap-2 text-lg font-[700] text-[#696969] hover:text-[#141414]"
                    >
                      Company
                    </button>
                    <button
                      @click="isMenuSub2Open = !isMenuSub2Open"
                      class="p-3"
                    >
                      <i v-if="isMenuSub2Open">
                        <svg
                          width="10"
                          height="6"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            stroke="#686868"
                            stroke-width="1.5"
                            fill="none"
                            d="m1 5 4-4 4 4"
                          />
                        </svg>
                      </i>
                      <i v-else="isMenuSub2Open">
                        <svg
                          width="10"
                          height="6"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            stroke="#686868"
                            stroke-width="1.5"
                            fill="none"
                            d="m1 1 4 4 4-4"
                          />
                        </svg>
                      </i>
                    </button>
                  </div>
                  <ul
                    :class="[isMenuSub2Open ? 'max-h-screen' : 'max-h-0']"
                    class="h-full overflow-hidden px-5 transition-[max-height]"
                  >
                    <li class="relative py-1">
                      <div class="flex items-center gap-3">
                        <button
                          class="flex items-center gap-2 text-lg font-[700] text-[#696969] hover:text-[#141414]"
                        >
                          History
                        </button>
                      </div>
                    </li>
                    <li class="relative py-1">
                      <div class="flex items-center gap-3">
                        <button
                          class="flex items-center gap-2 text-lg font-[700] text-[#696969] hover:text-[#141414]"
                        >
                          Our Team
                        </button>
                      </div>
                    </li>
                    <li class="relative py-1">
                      <div class="flex items-center gap-3">
                        <button
                          class="flex items-center gap-2 text-lg font-[700] text-[#696969] hover:text-[#141414]"
                        >
                          Blog
                        </button>
                      </div>
                    </li>
                  </ul>
                </li>
                <li class="relative py-1">
                  <div class="flex items-center gap-3">
                    <button
                      class="flex items-center gap-2 text-lg font-[700] text-[#696969] hover:text-[#141414]"
                    >
                      Careers
                    </button>
                  </div>
                </li>
                <li class="relative py-1">
                  <div class="flex items-center gap-3">
                    <button
                      class="flex items-center gap-2 text-lg font-[700] text-[#696969] hover:text-[#141414]"
                    >
                      About
                    </button>
                  </div>
                </li>
              </ul>
              <button class="w-full p-2 text-[#696969] hover:text-[#141414]">
                Login
              </button>
              <button
                class="w-full rounded-xl border-2 border-[#696969] border-[#141414] p-2 text-[#696969] hover:text-[#141414]"
              >
                Register
              </button>
            </div>
          </div>
        </transition>
      </nav>
    </transition>
  </header>
  <header class="hidden px-10 py-5 lg:block">
    <div class="wrapper">
      <div class="content flex items-center">
        <figure class="mr-10">
          <img :src="getImageURL('femdropdown/logo.svg')" alt="snap logo" />
        </figure>

        <nav class="w-full">
          <div class="wrapper">
            <div class="content relative flex items-center justify-between">
              <ul class="flex">
                <li class="relative py-1 px-3">
                  <div class="flex items-center gap-3">
                    <button
                      class="text-lg font-[700] text-[#696969] hover:text-[#141414]"
                    >
                      Features
                    </button>
                    <button
                      @click="isMenuSub1Open = !isMenuSub1Open"
                      class="p-3 hover:text-[#141414]"
                    >
                      <i v-if="isMenuSub1Open">
                        <svg
                          width="10"
                          height="6"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            stroke="#686868"
                            stroke-width="1.5"
                            fill="none"
                            d="m1 5 4-4 4 4"
                          />
                        </svg>
                      </i>
                      <i v-else="isMenuSub1Open">
                        <svg
                          width="10"
                          height="6"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            stroke="#686868"
                            stroke-width="1.5"
                            fill="none"
                            d="m1 1 4 4 4-4"
                          />
                        </svg>
                      </i>
                    </button>
                  </div>

                  <ul
                    :class="[isMenuSub1Open ? 'block' : 'hidden']"
                    class="absolute top-full left-0 rounded-xl px-5 shadow-xl"
                  >
                    <li class="relative py-1">
                      <div class="flex items-center gap-2">
                        <button
                          class="flex items-center gap-2 text-lg font-[700] text-[#696969] hover:text-[#141414]"
                        >
                          <svg
                            width="14"
                            height="16"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M14 3v12a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h1V1a1 1 0 1 1 2 0v1h2V1a1 1 0 1 1 2 0v1h2V1a1 1 0 0 1 2 0v1h1a1 1 0 0 1 1 1Zm-2 3H2v1h10V6Zm0 3H2v1h10V9Zm0 3H2v1h10v-1Z"
                              fill="#726CEE"
                            />
                          </svg>
                          Todo List
                        </button>
                      </div>
                    </li>
                    <li class="relative py-1">
                      <div class="flex items-center gap-2">
                        <button
                          class="flex items-center gap-2 text-lg font-[700] text-[#696969] hover:text-[#141414]"
                        >
                          <svg
                            width="16"
                            height="16"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M12.667 8.667h-4v4h4v-4ZM11.334 0v1.333H4.667V0h-2v1.333h-1C.75 1.333 0 2.083 0 3v11.333C0 15.25.75 16 1.667 16h12.667C15.25 16 16 15.25 16 14.333V3c0-.917-.75-1.667-1.666-1.667h-1V0h-2Zm3 14.333H1.667V5.5h12.667v8.833Z"
                              fill="#4BB1DA"
                            />
                          </svg>
                          Calendar
                        </button>
                      </div>
                    </li>
                    <li class="relative py-1">
                      <div class="flex items-center gap-2">
                        <button
                          class="flex items-center gap-2 text-lg font-[700] text-[#696969] hover:text-[#141414]"
                        >
                          <svg
                            width="13"
                            height="17"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M6.408 13.916c-3.313 0-6-1.343-6-3 0-.612.371-1.18 1-1.654V7.916a5 5 0 0 1 3.041-4.6 2 2 0 0 1 3.507-1.664 2 2 0 0 1 .411 1.664 5.002 5.002 0 0 1 3.041 4.6v1.346c.629.474 1 1.042 1 1.654 0 1.657-2.687 3-6 3Zm0 1c.694 0 1.352-.066 1.984-.16.004.054.016.105.016.16a2 2 0 0 1-4 0c0-.055.012-.106.016-.16.633.094 1.29.16 1.984.16Z"
                              fill="#EDD556"
                            />
                          </svg>
                          Reminders
                        </button>
                      </div>
                    </li>
                    <li class="relative py-1">
                      <div class="flex items-center gap-2">
                        <button
                          class="flex items-center gap-2 text-lg font-[700] text-[#696969] hover:text-[#141414]"
                        >
                          <svg
                            width="16"
                            height="16"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0Zm0 2.133a5.867 5.867 0 1 0 0 11.734A5.867 5.867 0 0 0 8 2.133ZM8 3.2a4.8 4.8 0 1 1 0 9.6 4.8 4.8 0 0 1 0-9.6Zm-.533 2.667a.533.533 0 0 0-.534.533v2.133c0 .295.24.534.534.534h3.2a.533.533 0 0 0 0-1.067H8V6.4a.533.533 0 0 0-.533-.533Z"
                              fill="#8E4CB6"
                            />
                          </svg>
                          Planning
                        </button>
                      </div>
                    </li>
                  </ul>
                </li>
                <li class="relative py-1 px-3">
                  <div class="flex items-center gap-3">
                    <button
                      class="flex items-center gap-2 text-lg font-[700] text-[#696969] hover:text-[#141414]"
                    >
                      Company
                    </button>
                    <button
                      @click="isMenuSub2Open = !isMenuSub2Open"
                      class="p-3"
                    >
                      <i v-if="isMenuSub2Open">
                        <svg
                          width="10"
                          height="6"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            stroke="#686868"
                            stroke-width="1.5"
                            fill="none"
                            d="m1 5 4-4 4 4"
                          />
                        </svg>
                      </i>
                      <i v-else="isMenuSub2Open">
                        <svg
                          width="10"
                          height="6"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            stroke="#686868"
                            stroke-width="1.5"
                            fill="none"
                            d="m1 1 4 4 4-4"
                          />
                        </svg>
                      </i>
                    </button>
                  </div>
                  <ul
                    :class="[isMenuSub2Open ? 'block' : 'hidden']"
                    class="absolute top-full left-0 rounded-xl px-5 shadow-xl"
                  >
                    <li class="relative py-1">
                      <div class="flex items-center gap-3">
                        <button
                          class="flex items-center gap-2 text-lg font-[700] text-[#696969] hover:text-[#141414]"
                        >
                          History
                        </button>
                      </div>
                    </li>
                    <li class="relative py-1">
                      <div class="flex items-center gap-3">
                        <button
                          class="flex items-center gap-2 text-lg font-[700] text-[#696969] hover:text-[#141414]"
                        >
                          Our Team
                        </button>
                      </div>
                    </li>
                    <li class="relative py-1">
                      <div class="flex items-center gap-3">
                        <button
                          class="flex items-center gap-2 text-lg font-[700] text-[#696969] hover:text-[#141414]"
                        >
                          Blog
                        </button>
                      </div>
                    </li>
                  </ul>
                </li>
                <li class="relative py-1 px-3">
                  <div class="flex items-center gap-3">
                    <button
                      class="flex items-center gap-2 text-lg font-[700] text-[#696969] hover:text-[#141414]"
                    >
                      Careers
                    </button>
                  </div>
                </li>
                <li class="relative py-1 px-3">
                  <div class="flex items-center gap-3">
                    <button
                      class="flex items-center gap-2 text-lg font-[700] text-[#696969] hover:text-[#141414]"
                    >
                      About
                    </button>
                  </div>
                </li>
              </ul>
              <div class="flex items-center gap-5">
                <button class="w-full p-2 text-[#696969] hover:text-[#141414]">
                  Login
                </button>
                <button
                  class="w-full rounded-xl border-2 border-[#696969] border-[#141414] py-2 px-10 text-[#696969] hover:text-[#141414]"
                >
                  Register
                </button>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  </header>
  <main class="lg:px-5">
    <div class="wrapper m-auto max-w-[1440px]">
      <div
        class="content flex flex-wrap lg:flex-row-reverse lg:flex-nowrap lg:items-center lg:justify-between lg:gap-10 xl:items-start"
      >
        <div class="left w-full lg:w-1/3 xl:w-2/5">
          <figure>
            <img
              class="m-auto lg:hidden"
              :src="getImageURL('femdropdown/image-hero-mobile.png')"
              alt="make remote work"
            />

            <img
              class="m-auto hidden lg:block"
              :src="getImageURL('femdropdown/image-hero-desktop.png')"
              alt="make remote work"
            />
          </figure>
        </div>
        <div
          class="right mx-auto mt-10 px-5 lg:mx-0 lg:mt-40 lg:w-2/3 xl:w-2/5"
        >
          <section class="text-center lg:text-left">
            <h2
              class="mb-5 text-4xl font-[700] text-[#141414] lg:mb-10 lg:text-6xl"
            >
              Make remote work
            </h2>

            <p>
              Get your team in sync, no matter your location. Streamline
              processes, create team rituals, and watch productivity soar.
            </p>

            <button
              class="mt-5 rounded-xl border border-[#141414] bg-[#141414] px-5 py-2 text-[#fafafa] hover:bg-transparent hover:text-[#141414] lg:mt-10"
            >
              Learn more
            </button>
          </section>

          <div
            class="icons mt-10 flex items-center justify-between gap-5 lg:mt-40"
          >
            <figure>
              <img
                :src="getImageURL('femdropdown/client-databiz.svg')"
                alt="databiz"
              />
            </figure>
            <figure>
              <img
                :src="getImageURL('femdropdown/client-audiophile.svg')"
                alt="audiophile"
              />
            </figure>
            <figure>
              <img
                :src="getImageURL('femdropdown/client-meet.svg')"
                alt="meet"
              />
            </figure>
            <figure>
              <img
                :src="getImageURL('femdropdown/client-maker.svg')"
                alt="maker"
              />
            </figure>
          </div>
        </div>
      </div>
    </div>
  </main>

  <div class="attribution">
    Challenge by
    <a href="https://www.frontendmentor.io?ref=challenge" target="_blank"
      >Frontend Mentor</a
    >. Coded by <a href="/">mrkl</a>.
  </div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Epilogue:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

html,
body {
  font-family: "Epilogue", sans-serif;
  font-size: 18px;
  font-weight: 500;
  color: #696969;
}

.attribution {
  font-size: 11px;
  text-align: center;
}
.attribution a {
  color: hsl(228, 45%, 44%);
}
</style>
