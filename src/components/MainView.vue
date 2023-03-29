<script setup>
import { SceneManager } from "@/composables/useSceneManager"
import { AssetManager } from "@/composables/useAssetManager"
import generateManifest from "@/composables/useGenerateManifest"
import { MainView } from "@/components/MainViewScene"
import { onMounted, ref } from "vue"

const canvas = ref(null)

onMounted(async () => {
  SceneManager.initialize({
    canvasHolder: canvas.value,
    backgroundColor: 0x000000,
    maxFPS: 0,
    minFPS: 10
  })

  await AssetManager.initialize(generateManifest(["mainview", "fonts"]))

  await AssetManager.preload(() => {})

  SceneManager.changeScene(new MainView())
})
</script>

<template>
  <div
    ref="canvas"
    class="flex items-center justify-center"
  ></div>
</template>
