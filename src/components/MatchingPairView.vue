<script setup>
import { onMounted, ref } from "vue";
import { AssetManager } from "@/composables/useAssetManager";
import { SceneManager } from "@/composables/useSceneManager";
import { MatchingPair } from "@/composables/useMatchingPair";
import { LoadingView } from "@/components/LoadingViewScene";
import manifestJson from "@/assets/matching-pair-manifest.json";

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

  await AssetManager.initialize(manifestJson);

  SceneManager.app.stage.addChild(new LoadingView());
});
</script>

<template>
  <div ref="canvas"></div>
</template>
