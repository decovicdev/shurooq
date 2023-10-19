<script setup>
const links = [
  {
    name: "Why sharjah",
    link: "/",
  },
  {
    name: "Shurooq",
    link: "/",
  },
  {
    name: "Invest in sharjah",
    link: "/",
  },
  {
    name: "Destination portfolio",
    link: "/",
  },
  {
    name: "Investment portfolio",
    link: "/",
  },
  {
    name: "Contact",
    link: "/",
  },
];
</script>

<template>
  <footer class="relative bg-gray-darker md:flex gap-6 lg:gap-24 lg:px-16">
    <img
      class="absolute h-[170%] top-1/2 -translate-y-1/2 object-center right-0 opacity-10 hidden lg:block"
      src="../assets/images/why-sharjah.webp"
      draggable="false"
      loading="lazy"
    />
    <div
      class="bg-gray-dark p-4 md:p-12 flex-shrink-1 flex-grow-0 max-w-md text-gray-lighter text-ss/5"
    >
      <img
        class="max-w-[349px] object-cover"
        src="../assets/images/Logo_WHITE.png"
      />
      <p class="mt-6">
        Source: Sharjah Update | Published:<br />
        October 12, 2020 - 3:32 pm
      </p>
      <form class="mt-10 max-w-[360px]">
        <h4 class="mb-5">
          Receive weekly updates on Sharjah business news direct to your inbox
        </h4>
        <input
          type="email"
          placeholder="your e-mail"
          class="py-4 pl-8 bg-gray-darker text-sm outline-none"
        />
        <button
          @click.stop=""
          class="py-4 px-8 text-white text-sm bg-primary-base"
        >
          Subscribe to
        </button>
      </form>
    </div>
    <div class="p-4 md:py-12">
      <h2 class="text-xl text-white/70 mb-4">Menu</h2>
      <nav v-for="{ link, name } in links">
        <NuxtLink :to="link" class="grid gap-3 text-white/50">
          {{ name }}
        </NuxtLink>
      </nav>
      <div class="text-gray-light mt-8 text-sm max-w-prose">
        <nav class="flex gap-7 mb-5 underline">
          <p>Terms</p>
          <p>Privacy</p>
        </nav>
        <p class="mt-5">
          Sharjah Investment and Development Authority (Shurooq) ©2021 All
          rights reserved. Government of Sharjah
        </p>
      </div>
    </div>
  </footer>
</template>
