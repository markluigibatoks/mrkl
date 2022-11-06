<script setup>
import HeaderView from "@/components/HeaderView.vue";
import MainView from "@/components/MainView.vue";
import FooterView from "@/components/FooterView.vue";
</script>

<template>
  <header-view />
  <main-view />
  <div
    class="pointer-events-none -z-20 hidden aspect-video max-h-screen w-screen overflow-hidden lg:block"
  ></div>
  <footer-view />
</template>
