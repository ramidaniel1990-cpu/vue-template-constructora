<script setup lang="ts">
import { heroStats, siteConfig } from '@/data/config'

function scrollToProjects() {
  document.getElementById('proyectos')?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<template>
  <!-- Hero: imagen de fondo a pantalla completa con overlay gradiente -->
  <section
    id="inicio"
    class="relative min-h-screen flex flex-col justify-end overflow-hidden"
  >
    <!-- Imagen de fondo -->
    <div
      class="absolute inset-0 bg-cover bg-no-repeat hero-bg"
      style="background-image: url('/images/heroSection.png')"
    ></div>

    <!-- Overlay gradiente izquierda → derecha -->
    <div
      class="absolute inset-0"
      style="background: linear-gradient(to right, rgba(10,22,40,0.92) 0%, rgba(10,22,40,0.65) 50%, rgba(10,22,40,0.15) 100%)"
    ></div>

    <!-- Contenido principal pegado abajo a la izquierda -->
    <div class="relative z-10 w-full">
      <div class="max-w-7xl mx-auto px-6 lg:px-24 pb-20 lg:pb-32 pt-32">

        <!-- Tagline superior con línea decorativa amarilla -->
        <p
          class="font-['Montserrat'] font-medium text-[#F59E0B] text-xs tracking-widest uppercase mb-7"
          style="border-left: 3px solid #F59E0B; padding-left: 12px;"
        >
          Ingeniería · Construcción · Arquitectura
        </p>

        <!-- Título H1 enorme en Montserrat 800 -->
        <h1 class="font-['Montserrat'] font-extrabold leading-[1.05] mb-6">
          <span class="block text-white" style="font-size: clamp(42px, 7vw, 80px)">Construimos</span>
          <span class="block text-white" style="font-size: clamp(42px, 7vw, 80px)">tus sueños</span>
          <span class="block text-[#F59E0B]" style="font-size: clamp(42px, 7vw, 80px)">con solidez</span>
        </h1>

        <!-- Subtítulo -->
        <p
          class="text-[#94A3B8] font-['Inter'] text-base lg:text-lg leading-relaxed mb-10"
          style="max-width: 500px"
        >
          Más de 10 años construyendo hogares y espacios comerciales en Venezuela con calidad, compromiso y entrega puntual.
        </p>

        <!-- Botones de acción -->
        <div class="flex flex-col sm:flex-row gap-4">
          <a
            :href="siteConfig.whatsappUrl"
            target="_blank"
            rel="noopener"
            class="inline-flex items-center justify-center bg-[#F59E0B] text-black font-['Montserrat'] font-bold text-sm tracking-wider px-8 py-4 hover:bg-[#D97706] transition-colors duration-300"
          >
            Cotizar Proyecto
          </a>
          <button
            @click="scrollToProjects"
            class="inline-flex items-center justify-center border-2 border-white text-white font-['Montserrat'] font-bold text-sm tracking-wider px-8 py-4 hover:bg-white hover:text-[#0A1628] transition-all duration-300"
          >
            Ver Proyectos
          </button>
        </div>
      </div>

      <!-- Barra de estadísticas en la parte inferior -->
      <div class="relative z-10 w-full" style="background: rgba(10,22,40,0.82); backdrop-filter: blur(4px);">
        <div class="max-w-7xl mx-auto px-6 lg:px-12">
          <div class="grid grid-cols-2 lg:grid-cols-4 divide-x divide-[#1B3A6B]">
            <div
              v-for="stat in heroStats"
              :key="stat.label"
              class="flex flex-col items-center justify-center py-6 lg:py-8 gap-1"
            >
              <span class="font-['Montserrat'] font-bold text-[#F59E0B] text-3xl lg:text-4xl">
                {{ stat.value }}
              </span>
              <span class="font-['Inter'] text-[#94A3B8] text-xs tracking-[0.15em] uppercase">
                {{ stat.label }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Mobile: desplaza hacia la derecha de la imagen para mostrar a los obreros */
.hero-bg {
  background-position: 75% center;
}

/* Desktop: imagen centrada normal */
@media (min-width: 1024px) {
  .hero-bg {
    background-position: center center;
  }
}
</style>
