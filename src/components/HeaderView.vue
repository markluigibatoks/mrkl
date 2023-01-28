<script setup>
import { gsap } from "gsap"

const line1 = ref(null)
const line2 = ref(null)
const line3 = ref(null)
const nav = ref(null)

const open = ref(false)

const mainTimeline = gsap.timeline()
const duration = ref(0.5)

onMounted(() => {
  gsap.set(nav.value, {
    yPercent: -100
  })

  gsap.set(line1.value, {
    y: -8
  })

  gsap.set(line3.value, {
    y: 8
  })

  mainTimeline.add(hamburgerAnimation(duration.value), "start")
  mainTimeline.add(navAnimation(duration.value), "start")
  mainTimeline.pause(0)
})

function toggleMenu () {
  open.value ? mainTimeline.reverse(duration.value) : mainTimeline.play(0)
}

function hamburgerAnimation (duration) {
  const timeline = gsap.timeline()

  timeline.to(
    line1.value,
    {
      y: 0,
      duration: duration / 2
    },
    "start"
  )

  timeline.to(
    line3.value,
    {
      y: 0,
      duration: duration / 2
    },
    "start"
  )

  timeline.set(line2.value, {
    opacity: 0
  })

  timeline.to(
    line1.value,
    {
      rotate: 45,
      x: 0,
      y: 0,
      duration: duration / 2
    },
    "end"
  )

  timeline.to(
    line3.value,
    {
      rotate: -45,
      x: 0,
      y: 0,
      duration: duration / 2
    },
    "end"
  )

  return timeline
}

function navAnimation (duration) {
  const timeline = gsap.timeline()

  timeline.set(nav.value, {
    yPercent: -100
  })

  timeline.to(nav.value, {
    yPercent: 0,
    duration
  })

  return timeline
}
</script>

<template>
  <header class="fixed top-0 left-0 w-full lg:hidden">
    <div
      class="relative z-20 flex h-14 items-center justify-between bg-white px-6 shadow-lg lg:px-0"
    >
      <div
        class="cursor-pointer select-none text-4xl font-bold text-[#e91e63]"
        @click="toggleMenu(), (open = !open)"
      >
        mrkl
      </div>
      <div class="flex items-center gap-5">
        <a
          href="#"
          class="min-h-10 rounded-full bg-[#e91e63] px-4 py-2 text-center font-bold text-white hover:bg-[#c2185b]"
        >
          Say Hello
        </a>
        <div
          class="relative h-[30px] w-[30px] cursor-pointer"
          @click="toggleMenu(), (open = !open)"
        >
          <i
            ref="line1"
            class="absolute top-1/2 left-1/2 -mt-[2px] -ml-[11px] h-[2px] w-[22px] origin-center bg-[#e91e63]"
          ></i>
          <i
            ref="line2"
            class="absolute top-1/2 left-1/2 -mt-[2px] -ml-[11px] h-[2px] w-[22px] origin-center bg-[#e91e63]"
          ></i>
          <i
            ref="line3"
            class="absolute top-1/2 left-1/2 -mt-[2px] -ml-[11px] h-[2px] w-[22px] origin-center bg-[#e91e63]"
          ></i>
        </div>
      </div>
    </div>
    <nav
      ref="nav"
      class="absolute z-10 block w-full"
    >
      <ul>
        <li>
          <router-link
            v-slot="{ href, navigate, isActive, isExactActive }"
            :to="{ name: 'Home' }"
            custom
          >
            <a
              :href="href"
              :class="[
                isExactActive
                  ? 'bg-slate-300 text-sky-600'
                  : 'bg-slate-200 text-neutral-800',
              ]"
              class="flex items-center gap-2 px-6 font-[600] leading-[48px] hover:text-sky-500"
            >
              Home
            </a>
          </router-link>
        </li>
        <li>
          <router-link
            v-slot="{ href, navigate, isActive, isExactActive }"
            :to="{ name: 'Playground' }"
            custom
          >
            <a
              :href="href"
              :class="[
                isExactActive
                  ? 'bg-slate-300 text-sky-600'
                  : 'bg-slate-200 text-neutral-800',
              ]"
              class="flex items-center gap-2 px-6 font-[600] leading-[48px] hover:text-sky-500"
            >
              <icon-code class="text-xl" />
              Playground
            </a>
          </router-link>
        </li>
      </ul>
    </nav>
  </header>
  <header
    class="-transform-x-1/2 absolute left-0 z-20 hidden w-full origin-center bg-white lg:block"
  >
    <nav class="m-auto flex max-w-[980px] items-center justify-between">
      <ul class="flex items-center">
        <li
          class="
        "
        >
          <router-link
            v-slot="{ href, navigate, isActive, isExactActive }"
            :to="{ name: 'Home' }"
            custom
          >
            <a
              :href="href"
              :class="{ 'text-sky-500 underline': isExactActive }"
              class="block px-6 py-[25px] font-[600] hover:text-sky-500"
            >
              Home
            </a>
          </router-link>
        </li>
        <li
          class="
        "
        >
          <router-link
            v-slot="{ href, navigate, isActive, isExactActive }"
            :to="{ name: 'Playground' }"
            custom
          >
            <a
              :href="href"
              :class="[
                isExactActive ? 'text-sky-500 underline' : 'text-sky-600',
              ]"
              class="flex items-center gap-2 px-6 py-[25px] hover:text-sky-500"
            >
              <icon-code
                :class="[
                  isExactActive ? 'text-sky-500 underline' : 'text-sky-600',
                ]"
                class="text-xl"
              />
              Playground
            </a>
          </router-link>
        </li>
      </ul>
      <a
        href="#"
        class="min-h-10 min-w-[120px] rounded-full bg-[#e91e63] px-4 py-2 text-center font-bold text-white hover:bg-[#c2185b]"
      >
        Say Hello
      </a>
    </nav>
  </header>
</template>
