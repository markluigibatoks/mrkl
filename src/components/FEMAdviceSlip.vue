<script setup>
import axios from "axios";
import { ref, onMounted } from "vue";

const slip = ref({});

onMounted(async () => {
  await fetchSlip();
});

async function fetchSlip() {
  try {
    const response = await axios.get(
      `https://api.adviceslip.com/advice/${Math.random() * 223 + 1}`
    );
    if (response.status === 200) {
      slip.value = response.data.slip;
    }
  } catch {
    console.log("Error fetching the Advice Slip");
  }
}
</script>

<template>
  <div class="h-screen w-screen bg-[#1f2632] px-5 py-10">
    <div class="mx-auto flex h-full w-full items-center justify-center">
      <div
        class="relative max-w-[514px] rounded-xl bg-[#323a49] p-12 text-center"
      >
        <span class="block text-sm uppercase tracking-wide text-[#52ffa8]"
          >Advice #{{ slip.id }}</span
        >

        "{{ slip.advice }}"

        <div class="relative my-6 h-4 w-full overflow-hidden">
          <svg
            class="absolute top-0 left-1/2 -translate-x-1/2"
            width="444"
            height="16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g fill="none" fill-rule="evenodd">
              <path fill="#4F5D74" d="M0 8h196v1H0zM248 8h196v1H248z" />
              <g transform="translate(212)" fill="#CEE3E9">
                <rect width="6" height="16" rx="3" />
                <rect x="14" width="6" height="16" rx="3" />
              </g>
            </g>
          </svg>
        </div>

        <button
          class="absolute top-[length:calc(100%-32px)] left-1/2 flex h-16 w-16 -translate-x-1/2 items-center justify-center rounded-full bg-[#52ffa8] hover:shadow-[0px_0px_24px_#52ffa8]"
          @click="fetchSlip"
        >
          <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M20 0H4a4.005 4.005 0 0 0-4 4v16a4.005 4.005 0 0 0 4 4h16a4.005 4.005 0 0 0 4-4V4a4.005 4.005 0 0 0-4-4ZM7.5 18a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z"
              fill="#202733"
            />
          </svg>
        </button>
      </div>
    </div>
    <div class="attribution">
      Challenge by
      <a href="https://www.frontendmentor.io?ref=challenge" target="_blank"
        >Frontend Mentor</a
      >. Coded by <a href="/">mrkl</a>.
    </div>
  </div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Manrope:wght@200;300;400;500;600;700;800&display=swap");

* {
  font-family: "Manrope", sans-serif;
  font-size: 28px;
  font-weight: 800;
  color: #cee3e9;
}

.attribution {
  font-size: 11px !important;
  text-align: center;
}
.attribution a {
  color: hsl(228, 45%, 44%);
  font-size: 16px !important;
}
</style>
