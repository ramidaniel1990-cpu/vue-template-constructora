<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { projects } from '@/data/config'

// Ancho de card y gap del carrusel
const CARD_W = 380
const GAP = 20

// Cards visibles según viewport
const cardsVisible = ref(1)

function updateCardsVisible() {
  if (window.innerWidth >= 1024) cardsVisible.value = 3
  else if (window.innerWidth >= 640) cardsVisible.value = 2
  else cardsVisible.value = 1
}

// Carrusel
const currentIndex = ref(0)
const maxIndex = computed(() => Math.max(0, projects.length - cardsVisible.value))

function prev() {
  if (currentIndex.value > 0) currentIndex.value--
}

function next() {
  if (currentIndex.value < maxIndex.value) currentIndex.value++
}

function goTo(index: number) {
  currentIndex.value = Math.min(Math.max(0, index), maxIndex.value)
}

// Lightbox
const lightboxOpen = ref(false)
const lightboxIndex = ref(0)

const currentLightboxProject = computed(() => {
  const idx = Math.max(0, Math.min(lightboxIndex.value, projects.length - 1))
  return projects[idx]!
})

function openLightbox(index: number) {
  lightboxIndex.value = index
  lightboxOpen.value = true
}

function closeLightbox() {
  lightboxOpen.value = false
}

function lightboxPrev() {
  lightboxIndex.value = (lightboxIndex.value - 1 + projects.length) % projects.length
}

function lightboxNext() {
  lightboxIndex.value = (lightboxIndex.value + 1) % projects.length
}

function onKeydown(e: KeyboardEvent) {
  if (!lightboxOpen.value) return
  if (e.key === 'Escape') closeLightbox()
  if (e.key === 'ArrowLeft') lightboxPrev()
  if (e.key === 'ArrowRight') lightboxNext()
}

onMounted(() => {
  updateCardsVisible()
  window.addEventListener('resize', updateCardsVisible)
  window.addEventListener('keydown', onKeydown)
})
onUnmounted(() => {
  window.removeEventListener('resize', updateCardsVisible)
  window.removeEventListener('keydown', onKeydown)
})
</script>

<template>
  <!-- Sección de portafolio con carrusel -->
  <section id="proyectos" class="py-20 lg:py-32 bg-[#0A1628] overflow-hidden">
    <div class="max-w-7xl mx-auto px-6 lg:px-12">

      <!-- Encabezado -->
      <div class="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-12 gap-6">
        <div>
          <span class="inline-block text-[#F59E0B] font-['Inter'] font-medium text-xs tracking-[0.3em] uppercase mb-4">
            Portafolio
          </span>
          <h2
            class="font-['Montserrat'] font-bold text-white leading-tight"
            style="font-size: clamp(32px, 4vw, 48px)"
          >
            Nuestros Proyectos
          </h2>
          <div class="w-16 h-1 bg-[#F59E0B] mt-6"></div>
        </div>

        <!-- Flechas de navegación — desktop -->
        <div class="hidden lg:flex items-center gap-3">
          <button
            @click="prev"
            :disabled="currentIndex === 0"
            class="w-12 h-12 border border-[#1B3A6B] flex items-center justify-center text-white hover:border-[#F59E0B] hover:text-[#F59E0B] transition-colors duration-300 disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            @click="next"
            :disabled="currentIndex >= maxIndex"
            class="w-12 h-12 border border-[#1B3A6B] flex items-center justify-center text-white hover:border-[#F59E0B] hover:text-[#F59E0B] transition-colors duration-300 disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      <!-- Carrusel de cards -->
      <div class="overflow-hidden">
        <div
          class="flex transition-transform duration-500 ease-in-out"
          :style="{
            gap: `${GAP}px`,
            transform: `translateX(calc(-${currentIndex} * (${CARD_W}px + ${GAP}px)))`,
          }"
        >
          <div
            v-for="(project, index) in projects"
            :key="project.id"
            class="relative flex-shrink-0 group cursor-pointer overflow-hidden"
            :style="{
              width: `${CARD_W}px`,
              height: '280px',
              borderRadius: '2px',
              maxWidth: 'calc(100vw - 48px)',
            }"
            @click="openLightbox(index)"
          >
            <!-- Imagen de fondo -->
            <img
              :src="project.image"
              :alt="project.name"
              class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />

            <!-- Overlay base (inferior) -->
            <div
              class="absolute inset-x-0 bottom-0 h-2/3 transition-all duration-400"
              style="background: linear-gradient(to top, rgba(10,22,40,0.95) 0%, transparent 100%)"
            ></div>

            <!-- Overlay hover (cubre todo) -->
            <div
              class="absolute inset-0 bg-[#0A1628]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-center justify-center"
            >
              <span class="border border-white text-white font-['Montserrat'] font-bold text-sm tracking-wider px-6 py-3 hover:bg-white hover:text-[#0A1628] transition-colors duration-300">
                Ver más
              </span>
            </div>

            <!-- Badge de categoría (arriba) -->
            <div class="absolute top-4 left-4 z-10">
              <span class="bg-[#F59E0B] text-black font-['Inter'] font-medium text-xs tracking-wider px-3 py-1">
                {{ project.category }}
              </span>
            </div>

            <!-- Info del proyecto (abajo) -->
            <div class="absolute bottom-0 left-0 right-0 p-5 z-10">
              <h3 class="font-['Montserrat'] font-bold text-white text-lg leading-snug">
                {{ project.name }}
              </h3>
              <p class="text-[#94A3B8] font-['Inter'] text-sm mt-1">
                {{ project.city }}
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Dots de paginación -->
      <div class="flex items-center justify-center gap-2 mt-8">
        <button
          v-for="(_, i) in Array(maxIndex + 1)"
          :key="i"
          @click="goTo(i)"
          class="transition-all duration-300"
          :class="currentIndex === i
            ? 'w-8 h-2 bg-[#F59E0B]'
            : 'w-2 h-2 bg-[#1B3A6B] hover:bg-[#94A3B8]'"
          :style="{ borderRadius: '2px' }"
        ></button>
      </div>

      <!-- Flechas móvil -->
      <div class="flex lg:hidden items-center justify-center gap-4 mt-6">
        <button
          @click="prev"
          :disabled="currentIndex === 0"
          class="w-12 h-12 border border-[#1B3A6B] flex items-center justify-center text-white hover:border-[#F59E0B] hover:text-[#F59E0B] transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          @click="next"
          :disabled="currentIndex >= maxIndex"
          class="w-12 h-12 border border-[#1B3A6B] flex items-center justify-center text-white hover:border-[#F59E0B] hover:text-[#F59E0B] transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>

    <!-- Lightbox -->
    <Teleport to="body">
      <Transition
        enter-active-class="transition-opacity duration-300"
        enter-from-class="opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="transition-opacity duration-300"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <div
          v-if="lightboxOpen"
          class="fixed inset-0 z-[100] flex items-center justify-center p-4"
          style="background: rgba(10,22,40,0.97)"
          @click.self="closeLightbox"
        >
          <!-- Botón cerrar -->
          <button
            @click="closeLightbox"
            class="absolute top-6 right-6 text-white hover:text-[#F59E0B] transition-colors"
          >
            <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <!-- Flecha izquierda -->
          <button
            @click="lightboxPrev"
            class="absolute left-4 lg:left-8 text-white hover:text-[#F59E0B] transition-colors"
          >
            <svg class="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <!-- Imagen lightbox -->
          <div class="w-full max-w-4xl mx-12 lg:mx-24">
            <img
              :src="currentLightboxProject.image"
              :alt="currentLightboxProject.name"
              class="w-full max-h-[70vh] object-cover"
            />
            <div class="mt-4 flex items-center justify-between">
              <div>
                <h3 class="font-['Montserrat'] font-bold text-white text-xl">
                  {{ currentLightboxProject.name }}
                </h3>
                <p class="text-[#94A3B8] font-['Inter'] text-sm mt-1">
                  {{ currentLightboxProject.city }} · {{ currentLightboxProject.category }}
                </p>
              </div>
              <span class="text-[#94A3B8] font-['Inter'] text-sm">
                {{ lightboxIndex + 1 }} / {{ projects.length }}
              </span>
            </div>
          </div>

          <!-- Flecha derecha -->
          <button
            @click="lightboxNext"
            class="absolute right-4 lg:right-8 text-white hover:text-[#F59E0B] transition-colors"
          >
            <svg class="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </Transition>
    </Teleport>
  </section>
</template>
