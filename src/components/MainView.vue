<script setup>
import { SceneManager } from "@/composables/useSceneManager";
import { AssetManager } from "@/composables/useAssetManager";
import generateManifest from "@/composables/useGenerateManifest";
import { MainView } from "@/components/MainViewScene";
import { onMounted, ref } from "vue";
import IconWavingHand from "@/components/icons/IconWavingHand.vue";

const canvasBg = ref(null);

onMounted(async () => {
  SceneManager.initialize({
    canvasHolder: canvasBg.value,
    width: 960,
    height: 540,
    backgroundColor: 0x000000,
    maxFPS: 0,
    minFPS: 10,
  });

  await AssetManager.initialize(generateManifest(["mainview", "fonts"]));

  await AssetManager.preload(() => {});

  SceneManager.changeScene(new MainView());
});
</script>

<template>
  <div
    class="z-10 aspect-video lg:absolute lg:top-0 lg:left-1/2 lg:max-h-full lg:w-full lg:-translate-x-1/2 lg:overflow-hidden"
  >
    <div ref="canvasBg"></div>
    <main
      class="w-full bg-slate-100 py-10 px-5 lg:absolute lg:bottom-0 lg:left-1/2 lg:m-auto lg:flex lg:origin-center lg:-translate-x-1/2 lg:flex-col lg:justify-center lg:bg-slate-900/30 lg:py-4 lg:text-white"
    >
      <div
        class="relative m-auto flex max-w-[980px] flex-col items-center justify-center gap-5 lg:flex-row lg:items-end lg:justify-between"
      >
        <div>
          <h2
            class="mb-4 flex items-center justify-center gap-4 text-3xl font-[600] leading-10 lg:items-start lg:justify-start"
          >
            안녕! <icon-waving-hand class="animate-wave" />
          </h2>

          <p class="text-center text-lg leading-7 lg:text-left">
            My name is Mark-Luigi, and my portfolio is a representation of all
            that I have learned as a developer.
          </p>
        </div>
        <a
          href="#"
          class="min-h-10 min-w-[px] rounded-full bg-[#e91e63] px-4 py-2 text-center font-bold text-white hover:bg-[#c2185b]"
          >Dive in</a
        >
      </div>
    </main>
  </div>
</template>
