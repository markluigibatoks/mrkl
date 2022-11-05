<script setup>
import { SceneManager } from "@/composables/useSceneManager";
import { AssetManager } from "@/composables/useAssetManager";
import manifestJson from "@/assets/manifest";
import { MainView } from "@/components/MainViewScene";
import { onMounted, ref } from "vue";
import IconWavingHand from "@/components/icons/IconWavingHand.vue";

const canvasBg = ref(null);

onMounted(async () => {
  console.log(canvasBg);

  SceneManager.initialize({
    canvasHolder: canvasBg.value,
    width: 960,
    height: 540,
    backgroundColor: 0x000000,
    maxFPS: 120,
    minFPS: 30,
  });

  await AssetManager.initialize(manifestJson);

  SceneManager.app.stage.addChild(new MainView());
});
</script>

<template>
  <div
    class="-z-10 aspect-video lg:absolute lg:top-0 lg:left-1/2 lg:max-h-full lg:w-screen lg:-translate-x-1/2 lg:overflow-hidden"
  >
    <div ref="canvasBg"></div>
    <main
      class="w-full py-10 px-5 text-center lg:absolute lg:bottom-0 lg:left-1/2 lg:m-auto lg:flex lg:origin-center lg:-translate-x-1/2 lg:flex-col lg:justify-center lg:bg-white/30 lg:py-4 lg:text-white"
    >
      <div>
        <h2
          class="align-center mb-4 flex justify-center gap-4 text-3xl font-[600] leading-10"
        >
          안녕! <icon-waving-hand />
        </h2>

        <p class="mb-2 text-lg leading-7">
          My name is Mark-Luigi Batoctoy, and my portfolio is a representation
          of all that I have learned as a developer.
        </p>
      </div>
    </main>
  </div>
</template>
