<script setup>
// If you want to use it in setup, import from the nuxtApp.
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
  <div>
    <Header />
    <slot />
    <Footer />
  </div>
</template>
