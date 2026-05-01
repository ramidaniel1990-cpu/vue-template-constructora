<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { socialLinks } from '@/data/config'

const hasScrolled = ref(false)

function handleScroll() {
  hasScrolled.value = window.scrollY > 100
}

onMounted(() => window.addEventListener('scroll', handleScroll, { passive: true }))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))
</script>

<template>
  <!-- Botones sociales flotantes — fixed bottom-right -->
  <div class="fixed bottom-8 right-5 z-40 flex flex-col gap-3">
    <a
      v-for="social in socialLinks"
      :key="social.name"
      :href="social.href"
      target="_blank"
      rel="noopener"
      :aria-label="social.name"
      class="social-btn w-12 h-12 rounded-full flex items-center justify-center shadow-lg"
      :class="hasScrolled ? 'social-btn--active' : 'social-btn--idle'"
      :style="hasScrolled && social.name !== 'Instagram'
        ? { background: social.bgColor }
        : undefined"
    >
      <svg viewBox="0 0 24 24" fill="white" class="w-5 h-5">
        <path :d="social.icon" />
      </svg>
    </a>
  </div>
</template>

<style scoped>
.social-btn {
  transition: opacity 0.4s ease, transform 0.4s ease, background 0.4s ease;
}

.social-btn--idle {
  background: #9CA3AF;
  opacity: 0.5;
  transform: scale(0.9);
}

.social-btn--active {
  opacity: 1;
  transform: scale(1);
}

.social-btn--active:hover {
  transform: scale(1.1);
}

/* Instagram: gradiente activado solo en estado activo */
.social-btn--active[aria-label="Instagram"] {
  background: linear-gradient(
    45deg,
    #f09433 0%,
    #e6683c 25%,
    #dc2743 50%,
    #cc2366 75%,
    #bc1888 100%
  ) !important;
}
</style>
