<script setup>
import HeaderView from "@/components/HeaderView.vue";
import { LoadingView } from "./LoadingViewScene";
import FooterView from "@/components/FooterView.vue";
</script>

<template>
  <header-view />
  <div
    class="m-auto mt-14 max-w-[980px] text-center text-slate-400 lg:mt-[74px]"
  >
    <router-view />
  </div>
  <main class="bg-slate-200 py-10 px-5">
    <div class="m-auto max-w-[980px]">
      <h2 class="mb-5 text-2xl font-bold">PixiJS</h2>
      <ul class="list-inside list-decimal">
        <li>
          <router-link
            :to="{ name: 'MatchingPair' }"
            custom
            v-slot="{ href, navigate, isActive, isExactActive }"
          >
            <a
              :href="href"
              :class="[
                isExactActive
                  ? 'font-bold text-sky-500 underline'
                  : 'text-black',
              ]"
            >
              Matching Pair
            </a>
          </router-link>
        </li>
        <li>
          <router-link
            :to="{ name: 'Particles' }"
            custom
            v-slot="{ href, navigate, isActive, isExactActive }"
          >
            <a
              :href="href"
              :class="[
                isExactActive
                  ? 'font-bold text-sky-500 underline'
                  : 'text-black',
              ]"
            >
              Particles
            </a>
          </router-link>
        </li>
      </ul>
    </div>
  </main>
  <footer-view />
</template>
