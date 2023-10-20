<script setup lang="ts">
import Header from "~/components/header/Header.vue";
import Footer from "~/components/footer/Footer.vue";
const { $pwa } = useNuxtApp();

onMounted(() => {
  if ($pwa.offlineReady) {
    window.alert("App ready to work offline");
  }
});
</script>

<template>
  <!-- <div v-show="$pwa.needRefresh">
    <span> New content available, click on reload button to update. </span>

    <button @click="$pwa.updateServiceWorker()">Reload</button>
  </div> -->
  <div class="grid grid-rows-[auto_1fr_auto] min-h-screen">
    <Header></Header>
    <slot></slot>
    <Footer></Footer>
  </div>
</template>
