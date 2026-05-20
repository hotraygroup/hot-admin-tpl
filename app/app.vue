<script setup lang="ts">
import { useThemeStore } from "./store/theme";

const themeStore = useThemeStore();

const isDesktop = () => {
  return window.innerWidth >= 768;
};

const handleWindowResize = () => {
  if (themeStore.isDesktop === isDesktop()) return;
  themeStore.isDesktop = isDesktop();
};

onMounted(() => {
  window.addEventListener("resize", handleWindowResize);
});

onUnmounted(() => {
  window.removeEventListener("resize", handleWindowResize);
});

// Page transition config
const pageTransition = { name: 'page', mode: 'out-in' };
</script>
<template>
  <div>
    <NuxtLayout>
      <NuxtPage :transition="pageTransition" />
    </NuxtLayout>
  </div>
</template>

<style>
/* Page transition styles */
.page-enter-active,
.page-leave-active {
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

.page-enter-from {
  opacity: 0;
  transform: translateY(8px);
}

.page-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}
</style>
