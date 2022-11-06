<script setup>
import IconDiscord from "@/components/icons/IconDiscord.vue";
import IconFacebook from "@/components/icons/IconFacebook.vue";
import IconGithub from "@/components/icons/IconGithub.vue";
import IconLinkedIn from "@/components/icons/IconLinkedIn.vue";
import IconSkype from "@/components/icons/IconSkype.vue";
</script>
<template>
  <div class="w-full bg-slate-800">
    <div class="m-auto max-w-[980px] py-10 text-center text-slate-400">
      <h2 class="mb-5 text-3xl">Let's be internet friends</h2>
      <div class="flex items-center justify-center gap-4">
        <a href="#" class="text-slate-200 hover:text-slate-400"
          ><icon-discord class="text-2xl"
        /></a>
        <a href="#" class="text-slate-200 hover:text-slate-400"
          ><icon-facebook class="text-2xl"
        /></a>
        <a href="#" class="text-slate-200 hover:text-slate-400"
          ><icon-github class="text-2xl"
        /></a>
        <a href="#" class="text-slate-200 hover:text-slate-400"
          ><icon-linked-in class="text-2xl"
        /></a>
        <a href="#" class="text-slate-200 hover:text-slate-400"
          ><icon-skype class="text-2xl"
        /></a>
      </div>
      <p class="mt-10">
        <a href="#" class="text-slate-100 hover:underline">hello@mrkl.me</a>
        &copy; Mark-Luigi Batoctoy. All Rights Reserved.
      </p>
    </div>
  </div>
  <div></div>
</template>
