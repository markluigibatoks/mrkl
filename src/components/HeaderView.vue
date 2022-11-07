<script setup>
import IconCode from "@/components/icons/IconCode.vue";
import { gsap } from "gsap";
import { ref, onMounted } from "vue";

const line1 = ref(null);
const line2 = ref(null);
const line3 = ref(null);
const nav = ref(null);

const open = ref(false);

const mainTimeline = gsap.timeline();
const duration = ref(0.5);

onMounted(() => {
  gsap.set(nav.value, {
    yPercent: -100,
  });

  gsap.set(line1.value, {
    y: -8,
  });

  gsap.set(line3.value, {
    y: 8,
  });

  mainTimeline.add(hamburgerAnimation(duration.value), "start");
  mainTimeline.add(navAnimation(duration.value), "start");
  mainTimeline.pause(0);
});

function toggleMenu() {
  open.value ? mainTimeline.reverse(duration.value) : mainTimeline.play(0);
}

function hamburgerAnimation(duration) {
  const timeline = gsap.timeline();

  timeline.to(
    line1.value,
    {
      y: 0,
      duration: duration / 2,
    },
    "start"
  );

  timeline.to(
    line3.value,
    {
      y: 0,
      duration: duration / 2,
    },
    "start"
  );

  timeline.set(line2.value, {
    opacity: 0,
  });

  timeline.to(
    line1.value,
    {
      rotate: 45,
      x: 0,
      y: 0,
      duration: duration / 2,
    },
    "end"
  );

  timeline.to(
    line3.value,
    {
      rotate: -45,
      x: 0,
      y: 0,
      duration: duration / 2,
    },
    "end"
  );

  return timeline;
}

function navAnimation(duration) {
  const timeline = gsap.timeline();

  timeline.set(nav.value, {
    yPercent: -100,
  });

  timeline.to(nav.value, {
    yPercent: 0,
    duration,
  });

  return timeline;
}
</script>

<template>
  <header class="fixed top-0 left-0 w-full lg:hidden">
    <div
      class="relative z-20 flex h-14 items-center justify-between bg-white px-6 shadow-lg lg:px-0"
    >
      <div class="text-4xl font-bold text-[#e91e63]">mrkl</div>
      <div class="flex gap-5 items-center">
        <a href="#" class="rounded-full bg-[#e91e63] px-4 py-2 min-h-10 text-center font-bold text-white">
          Say Hello
        </a>
        <div
          @click="toggleMenu(), (open = !open)"
          class="relative h-[30px] w-[30px] cursor-pointer"
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
    <nav ref="nav" class="relative z-10 block">
      <ul>
        <li>
          <a
            href="#"
            class="flex items-center gap-2 bg-slate-300 px-6 font-[600] leading-[48px] text-neutral-800 hover:text-sky-500"
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="#"
            class="flex items-center gap-2 bg-slate-200 px-6 font-[600] leading-[48px] text-sky-600 hover:text-sky-500"
          >
            <icon-code class="text-xl text-sky-600" />
            Playground
          </a>
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
          <a href="#" class="block px-6 py-[25px] font-[600] hover:text-sky-500"
            >Home</a
          >
        </li>
        <li
          class="
        "
        >
          <a
            href="#"
            class="flex items-center gap-2 px-6 py-[25px] text-sky-600 hover:text-sky-500"
          >
            <icon-code class="text-xl text-sky-600" />
            Playground
          </a>
        </li>
      </ul>
      <a
        href="#"
        class="min-w-[120px] rounded-full bg-[#e91e63] px-4 py-2 min-h-10 text-center font-bold text-white hover:bg-[#c2185b]"
      >
        Say Hello
      </a>
    </nav>
  </header>
</template>
