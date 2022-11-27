<script setup>
import { onMounted, ref } from "vue";
import { AssetManager } from "@/composables/useAssetManager";
import { SceneManager } from "@/composables/useSceneManager";
import { LoadingView } from "@/components/LoadingViewScene";
import generateManifest from "@/composables/useGenerateManifest";
import { ParticlesScene } from "@/components/ParticlesScene";

const canvas = ref(null);

let loadingView = null;
let particlesScene = null;

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

  await AssetManager.initialize(generateManifest(["sounds", "fonts"]));

  loadingView = new LoadingView();

  SceneManager.changeScene(loadingView);

  await AssetManager.preload((progress) => {
    loadingView.updateProgress(progress);
  });

  particlesScene = new ParticlesScene();

  SceneManager.changeScene(particlesScene);
});
</script>

<template>
  <div ref="canvas" class="flex items-center justify-center"></div>
</template>
