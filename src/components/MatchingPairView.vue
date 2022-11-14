<script setup>
import { onMounted, ref } from "vue";
import { AssetManager } from "@/composables/useAssetManager";
import { SceneManager } from "@/composables/useSceneManager";
import { MatchingPair } from "@/composables/useMatchingPair";
import { LoadingView } from "@/components/LoadingViewScene";
import generateManifest from "@/composables/useGenerateManifest";

const canvas = ref(null);

let loadingView = null;
let matchingPair = null;

onMounted(async () => {
  SceneManager.initialize({
    canvasHolder: canvas.value,
    width: 960,
    height: 540,
    backgroundColor: 0x000000,
    maxFPS: 12,
    minFPS: 12,
    size: "contain",
  });

  console.log(generateManifest(["matchingpair", "sounds", "fonts"]));
  await AssetManager.initialize(
    generateManifest(["matchingpair", "sounds", "fonts"])
  );

  loadingView = new LoadingView();

  SceneManager.changeScene(loadingView);

  await AssetManager.preload((progress) => {
    loadingView.updateProgress(progress);
  });

  matchingPair = new MatchingPair();

  SceneManager.changeScene(matchingPair);
});
</script>

<template>
  <div ref="canvas"></div>
</template>
