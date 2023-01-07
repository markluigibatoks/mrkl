<script setup>
import { getImageURL } from "../composables/useStaticURL";
</script>

<template>
  <div class="px-4 py-5">
    <div class="mx-auto max-w-[1440px]">
      <header class="flex gap-3">
        <h2 class="text-lg font-[700] text-[#1c202b]">Notifications</h2>
        <span class="rounded-md bg-[#0a317b] px-3 py-px text-white">3</span>
        <div class="flex-auto"></div>
        <a href="#" class="text-sm">Mark all as read</a>
      </header>
      <section class="mt-6">
        <ul>
          <li class="mb-3 last:mb-0">
            <div class="flex gap-3 rounded-xl bg-[#f7fafd] p-4">
              <figure class="h-10 min-h-[40px] w-10 min-w-[40px]">
                <img
                  :src="getImageURL('femnotifications/avatar-mark-webber.webp')"
                />
              </figure>
              <div>
                <a
                  href="#"
                  class="mr-0.5 font-[700] text-[#1c202b] hover:text-[#0a317b]"
                  >Mark Webber</a
                >
                reacted to your recent post
                <a href="#" class="ml-0.5 font-[700] hover:text-[#0a317b]"
                  >My first tournament today!
                  <span
                    class="ml-1 inline-block h-2 w-2 rounded-full bg-[#f65351] align-middle"
                  ></span
                ></a>

                <span class="block text-sm text-[#939dae]">1m ago</span>
              </div>
            </div>
          </li>

          <li class="mb-3 last:mb-0">
            <div class="flex gap-3 rounded-xl bg-[#f7fafd] p-4">
              <figure class="h-10 min-h-[40px] w-10 min-w-[40px]">
                <img
                  :src="getImageURL('femnotifications/avatar-angela-gray.webp')"
                />
              </figure>
              <div>
                <a
                  href="#"
                  class="mr-0.5 font-[700] text-[#1c202b] hover:text-[#0a317b]"
                  >Angela Gray</a
                >
                followed you
                <span
                  class="ml-1 inline-block h-2 w-2 rounded-full bg-[#f65351] align-middle"
                ></span>

                <span class="block text-sm text-[#939dae]">5m ago</span>
              </div>
            </div>
          </li>

          <li class="mb-3 last:mb-0">
            <div class="flex gap-3 rounded-xl bg-[#f7fafd] p-4">
              <figure class="h-10 min-h-[40px] w-10 min-w-[40px]">
                <img
                  :src="
                    getImageURL('femnotifications/avatar-jacob-thompson.webp')
                  "
                />
              </figure>
              <div>
                <a
                  href="#"
                  class="mr-0.5 font-[700] text-[#1c202b] hover:text-[#0a317b]"
                  >Jacob Thompson</a
                >
                has joined your group
                <a href="#" class="ml-0.5 font-[700] hover:text-[#0a317b]"
                  >Chess Club
                  <span
                    class="ml-1 inline-block h-2 w-2 rounded-full bg-[#f65351] align-middle"
                  ></span
                ></a>

                <span class="block text-sm text-[#939dae]">1 day ago</span>
              </div>
            </div>
          </li>

          <li class="mb-3 last:mb-0">
            <div class="flex gap-3 rounded-xl p-4">
              <figure class="h-10 min-h-[40px] w-10 min-w-[40px]">
                <img
                  :src="
                    getImageURL('femnotifications/avatar-rizky-hasanuddin.webp')
                  "
                />
              </figure>
              <div>
                <a
                  href="#"
                  class="mr-0.5 font-[700] text-[#1c202b] hover:text-[#0a317b]"
                  >Rizky Hasanuddin</a
                >
                sent you a private message
                <span class="block text-sm text-[#939dae]">1 day ago</span>

                <a
                  href="#"
                  class="mt-3 block rounded border border-[#dde7ee] p-4 hover:bg-[#dde7ee]"
                >
                  <p class="text-sm">
                    Hello, thanks for setting up the Chess Club. I've been a
                    member for a few weeks now and I'm already having lots of
                    fun and improving my game.
                  </p>
                </a>
              </div>
            </div>
          </li>

          <li class="mb-3 last:mb-0">
            <div class="flex gap-3 rounded-xl p-4">
              <figure class="h-10 min-h-[40px] w-10 min-w-[40px]">
                <img
                  :src="
                    getImageURL('femnotifications/avatar-kimberly-smith.webp')
                  "
                />
              </figure>
              <div>
                <a
                  href="#"
                  class="mr-0.5 font-[700] text-[#1c202b] hover:text-[#0a317b]"
                  >Kimberly Smith</a
                >
                commented on your picture
                <span class="block text-sm text-[#939dae]">1 week ago</span>
              </div>
              <div class="flex-auto"></div>
              <a
                href="#"
                class="h-11 w-[46px] rounded border border-transparent p-0.5 hover:border-[#939dae]"
              >
                <figure class="h-10 min-h-[40px] w-10 min-w-[40px]">
                  <img
                    :src="getImageURL('femnotifications/image-chess.webp')"
                  />
                </figure>
              </a>
            </div>
          </li>

          <li class="mb-3 last:mb-0">
            <div class="flex gap-3 rounded-xl p-4">
              <figure class="h-10 min-h-[40px] w-10 min-w-[40px]">
                <img
                  :src="
                    getImageURL('femnotifications/avatar-nathan-peterson.webp')
                  "
                />
              </figure>
              <div>
                <a
                  href="#"
                  class="mr-0.5 font-[700] text-[#1c202b] hover:text-[#0a317b]"
                  >Nathan Peterson</a
                >
                reacted to your recent post

                <a href="#" class="ml-0.5 font-[700] hover:text-[#0a317b]"
                  >5 end-game strategies to increase your win rate
                </a>

                <span class="block text-sm text-[#939dae]">2 weeks ago</span>
              </div>
            </div>
          </li>

          <li class="mb-3 last:mb-0">
            <div class="flex gap-3 rounded-xl p-4">
              <figure class="h-10 min-h-[40px] w-10 min-w-[40px]">
                <img
                  :src="getImageURL('femnotifications/avatar-anna-kim.webp')"
                />
              </figure>
              <div>
                <a
                  href="#"
                  class="mr-0.5 font-[700] text-[#1c202b] hover:text-[#0a317b]"
                  >Anna Kim</a
                >
                left the group
                <a
                  href="#"
                  class="ml-0.5 font-[700] text-[#0a317b] hover:text-[#0a317b]"
                  >Chess Club</a
                >
                <span class="block text-sm text-[#939dae]">2 weeks ago</span>
              </div>
            </div>
          </li>
        </ul>
      </section>
    </div>
  </div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,200;1,300;1,400;1,500;1,600;1,700;1,800&display=swap");

* {
  font-family: "Plus Jakarta Sans", sans-serif;
  font-size: 16px;
  font-weight: 500;
  color: #5e6778;
}

.attribution {
  font-size: 11px;
  text-align: center;
}
.attribution a {
  color: hsl(228, 45%, 44%);

  color: #f65351;
  color: #0a317b;
  color: #ffffff;
  color: #f7fafd;
  color: #e5effa;
  color: #dde7ee;
  color: #939dae;
  color: #5e6778;
  color: #1c202b;
}
</style>
