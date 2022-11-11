<script setup>
import HeaderView from "@/components/HeaderView.vue";
</script>

<template>
  <header-view />
  <main>
    <router-link :to="{ name: 'MatchingPair' }">
      <div class="mt-20 h-[250px] w-[320px] bg-slate-100 text-center">
        Matching Pair Game
      </div>
    </router-link>
  </main>
  <router-view />
</template>
