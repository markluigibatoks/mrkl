<script setup>
import { onMounted, ref } from "vue";
import { AssetManager } from "@/composables/useAssetManager";
import { SceneManager } from "@/composables/useSceneManager";
import { LoadingView } from "@/components/LoadingViewScene";
import generateManifest from "@/composables/useGenerateManifest";
import { MatchingPairLobby } from "./MatchingPairLobbyScene";

const canvas = ref(null);

let loadingView = null;
let matchingPairLobby = null;

onMounted(async () => {
  SceneManager.initialize({
    canvasHolder: canvas.value,
    width: 960,
    height: 540,
    backgroundColor: 0xf3f3f3,
    maxFPS: 0,
    minFPS: 10,
    size: "contain",
  });

  await AssetManager.initialize(
    generateManifest(["matchingpair", "sounds", "fonts"])
  );

  loadingView = new LoadingView();

  SceneManager.changeScene(loadingView);

  await AssetManager.preload((progress) => {
    loadingView.updateProgress(progress);
  });

  matchingPairLobby = new MatchingPairLobby();

  SceneManager.changeScene(matchingPairLobby);
});
</script>

<template>
  <div ref="canvas" class="flex items-center justify-center"></div>
</template>
