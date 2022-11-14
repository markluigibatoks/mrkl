<script setup>
import { onMounted, ref } from "vue";
import { AssetManager } from "@/composables/useAssetManager";
import { SceneManager } from "@/composables/useSceneManager";
import { MatchingPair } from "@/composables/useMatchingPair";
import { LoadingView } from "@/components/LoadingViewScene";
import generateManifest from "@/composables/useGenerateManifest";

const canvas = ref(null);

onMounted(async () => {
  SceneManager.initialize({
    canvasHolder: canvas.value,
    width: 960,
    height: 540,
    backgroundColor: 0x000000,
    maxFPS: 120,
    minFPS: 30,
  });

  console.log(generateManifest(["matchingpair", "sounds", "fonts"]));
  await AssetManager.initialize(
    generateManifest(["matchingpair", "sounds", "fonts"])
  );

  SceneManager.app.stage.addChild(new MatchingPair());
});
</script>

<template>
  <div ref="canvas"></div>
</template>
